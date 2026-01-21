import type { Request, Response } from 'express';

import { StudentService } from './student.services.js';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const result = await StudentService.createStudentToDB(student);
    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create student',
      error,
    });
  }
};

export const StudentController = {
  createStudent,
};
