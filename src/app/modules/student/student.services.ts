import type { IStudent } from './student.interface.js';
import { Student } from './student.model.js';

const createStudentToDB = async (studentData: IStudent) => {
  const result = await Student.create(studentData);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find({ isDeleted: { $ne: true } }).select('-__v -_id');
  return result;
};

const getSingleStudentFromDB = async (studentId: string) => {
  const result = await Student.findOne({ studentId, isDeleted: { $ne: true } }).select('-__v -_id');
  return result;
};

const updateStudentInDB = async (studentId: string, updateData: Partial<IStudent>) => {
  const result = await Student.findOneAndUpdate({ studentId }, updateData, {
    new: true,
  }).select('-__v -_id');
  return result;
};

const deleteStudentFromDB = async (studentId: string) => {
  const result = await Student.findOneAndUpdate({ studentId }, { isDeleted: true }, { new: true }).select('-__v -_id');
  return result;
};

export const StudentService = {
  createStudentToDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentInDB,
  deleteStudentFromDB,
};
