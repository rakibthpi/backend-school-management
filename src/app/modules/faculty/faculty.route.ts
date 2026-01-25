import express from 'express';

import auth from '../../middlewares/auth.js';
import validateRequest from '../../middlewares/validateRequest.js';
import { FacultyControllers } from './faculty.controller.js';
import { updateFacultyValidationSchema } from './faculty.validation.js';

const router = express.Router();

router.get('/:id', auth('admin', 'faculty'), FacultyControllers.getSingleFaculty);

router.delete('/:id', auth('admin'), FacultyControllers.deleteFaculty);

router.patch(
  '/:id',
  auth('admin', 'faculty'),
  validateRequest(updateFacultyValidationSchema),
  FacultyControllers.updateFaculty,
);

router.get('/', auth('admin', 'faculty'), FacultyControllers.getAllFaculties);

export const FacultyRoutes = router;
