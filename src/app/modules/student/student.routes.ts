import express from 'express';

import { StudentController } from './student.controller.js';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudent);
router.patch('/:studentId', StudentController.updateStudent);
router.delete('/:studentId', StudentController.deleteStudent);

export const studentRoutes = router;
