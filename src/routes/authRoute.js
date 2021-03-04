import express from 'express';

import checkRole from '../middleware/checkRole';

import { login, register } from '../controllers/authController';

const authRoute = express.Router();

const { GUEST_ROLE, USER_ROLE, ADMIN_ROLE } = process.env;

authRoute.post('/login', checkRole([USER_ROLE, ADMIN_ROLE, GUEST_ROLE]), login);

authRoute.post('/register', checkRole([USER_ROLE, ADMIN_ROLE, GUEST_ROLE]), register);

export default authRoute;
