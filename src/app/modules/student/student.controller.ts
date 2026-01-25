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

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDB();

    if (result && result.length > 0) {
      res.status(200).json({
        success: true,
        message: 'Students fetched successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'No students found',
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch students',
      error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getSingleStudentFromDB(studentId as string);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Student fetched successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Student not found',
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch student',
      error,
    });
  }
};

const updateStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const { student } = req.body;
    const result = await StudentService.updateStudentInDB(studentId as string, student);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Student updated successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Student not found for update',
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update student',
      error,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.deleteStudentFromDB(studentId as string);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Student deleted successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Student not found for deletion',
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete student',
      error,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
