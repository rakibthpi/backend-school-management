import express from 'express';

import auth from '../../middlewares/auth.js';
import validateRequest from '../../middlewares/validateRequest.js';
import { AdminControllers } from './admin.controller.js';
import { updateAdminValidationSchema } from './admin.validation.js';

const router = express.Router();

router.get('/:id', auth('admin'), AdminControllers.getSingleAdmin);

router.delete('/:id', auth('admin'), AdminControllers.deleteAdmin);

router.patch('/:id', auth('admin'), validateRequest(updateAdminValidationSchema), AdminControllers.updateAdmin);

router.get('/', auth('admin'), AdminControllers.getAllAdmins);

export const AdminRoutes = router;
