import express from 'express';

import auth from '../../middlewares/auth.js';
import validateRequest from '../../middlewares/validateRequest.js';
import { createAdminValidationSchema } from '../admin/admin.validation.js';
import { createFacultyValidationSchema } from '../faculty/faculty.validation.js';
import { createStudentValidationSchema } from '../student/student.validation.js';
import { UserControllers } from './user.controller.js';

const router = express.Router();

router.post(
  '/create-student',
  auth('admin'),
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

router.post(
  '/create-faculty',
  auth('admin'),
  validateRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);

router.post('/create-admin', auth('admin'), validateRequest(createAdminValidationSchema), UserControllers.createAdmin);

export const UserRoutes = router;
