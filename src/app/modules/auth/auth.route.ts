import express from 'express';

import validateRequest from '../../middlewares/validateRequest.js';
import { AuthControllers } from './auth.controller.js';
import { AuthValidation } from './auth.validation.js';

const router = express.Router();

router.post('/login', validateRequest(AuthValidation.loginValidationSchema), AuthControllers.loginUser);

router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken,
);

export const AuthRoutes = router;
