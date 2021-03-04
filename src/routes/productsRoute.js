import express from 'express';

import checkRole from '../middleware/checkRole';

import {
  getProducts,
  getByIDProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productsController';

const { GUEST_ROLE, USER_ROLE, ADMIN_ROLE } = process.env;

const productsRoute = express.Router();

productsRoute.get('/', checkRole([USER_ROLE, ADMIN_ROLE, GUEST_ROLE]), getProducts);

productsRoute.get('/:id', checkRole([USER_ROLE, ADMIN_ROLE, GUEST_ROLE]), getByIDProduct);

productsRoute.post('/', checkRole([ADMIN_ROLE]), createProduct);

productsRoute.put('/:id', checkRole([ADMIN_ROLE]), updateProduct);

productsRoute.delete('/:id', checkRole([ADMIN_ROLE]), deleteProduct);

export default productsRoute;
