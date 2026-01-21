import express from 'express';

import { StudentController } from './student.controller.js';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);

export const studentRoutes = router;
