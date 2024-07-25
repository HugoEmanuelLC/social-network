import { Router } from 'express';
import * as authController from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/api/auth/login', authController.login);
authRouter.post('/api/auth/register', authController.register);

export { authRouter };