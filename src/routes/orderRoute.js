import express from 'express';

import checkRole from '../middleware/checkRole';

import { createOrder, getUserOrders, deleteUserOrder } from '../controllers/orderController';

const orderRoute = express.Router();

const { GUEST_ROLE, USER_ROLE, ADMIN_ROLE } = process.env;

orderRoute.post('/', checkRole([GUEST_ROLE, USER_ROLE, ADMIN_ROLE]), createOrder);

orderRoute.get('/', checkRole([USER_ROLE, ADMIN_ROLE]), getUserOrders);

orderRoute.delete('/delete/:orderId', checkRole([ADMIN_ROLE]), deleteUserOrder);

export default orderRoute;
