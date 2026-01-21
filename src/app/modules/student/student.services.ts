import type { IStudent } from './student.interface.js';
import { Student } from './student.model.js';

const createStudentToDB = async (studentData: IStudent) => {
  const result = await Student.create(studentData);
  return result;
};

export const StudentService = {
  createStudentToDB,
};
