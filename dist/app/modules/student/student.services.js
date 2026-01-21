import { Student } from './student.model.js';
export const createStudentToDB = async (studentData) => {
  const result = await Student.create(studentData);
  return result;
};
//# sourceMappingURL=student.services.js.map
