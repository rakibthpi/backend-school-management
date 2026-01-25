import express from 'express';

import auth from '../../middlewares/auth.js';
import validateRequest from '../../middlewares/validateRequest.js';
import { StudentControllers } from './student.controller.js';
import { updateStudentValidationSchema } from './student.validation.js';

const router = express.Router();

router.get('/:id', auth('admin', 'faculty'), StudentControllers.getSingleStudent);

router.delete('/:id', auth('admin'), StudentControllers.deleteStudent);

router.patch('/:id', auth('admin'), validateRequest(updateStudentValidationSchema), StudentControllers.updateStudent);

router.get('/', auth('admin', 'faculty'), StudentControllers.getAllStudents);

export const StudentRoutes = router;
