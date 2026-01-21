import { createStudentToDB } from './student.services.js';
export const createStudent = async (req, res) => {
  try {
    const student = req.body;
    const result = await createStudentToDB(student);
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
//# sourceMappingURL=student.controller.js.map
