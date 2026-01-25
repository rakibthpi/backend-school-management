import { connect, model, Schema } from 'mongoose';

import type { IAcademicBackground, IGuardian, ILocalGuardian, IName, IStudent } from './student.interface.js';

const nameSchema = new Schema<IName>(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { _id: false },
);
const guardianSchema = new Schema<IGuardian>(
  {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
  },
  { _id: false },
);
const localGuardianSchema = new Schema<ILocalGuardian>(
  {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
  },
  { _id: false },
);
const academicBackgroundSchema = new Schema<IAcademicBackground>(
  {
    previousInstitution: { type: String, required: true },
    board: { type: String, required: true },
    passingYear: { type: Number, required: true },
    result: { type: String, required: true },
  },
  { _id: false },
);

const studentSchema = new Schema<IStudent>({
  studentId: { type: String, required: true, unique: true },
  name: {
    type: nameSchema,
    required: true,
  },
  email: { type: String, required: true },
  gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
  dateOfBirth: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    required: true,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: 'Invalid blood group',
    },
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  academicBackground: {
    type: academicBackgroundSchema,
    required: true,
  },
  admissionDate: { type: String },
  profileImage: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});

studentSchema.pre('save', async function () {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const student = this;

  // Set admissionDate if not provided
  if (!student.admissionDate) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    student.admissionDate = `${year}-${month}-${day}`;
  }

  // Generate unique studentId if not provided
  if (!student.studentId) {
    const admissionDate = student.admissionDate.replace(/-/g, ''); // YYMMDD or YYYYMMDD
    const datePrefix = admissionDate.substring(2, 8); // YYMMDD

    let isUnique = false;
    let generatedId = '';

    while (!isUnique) {
      const randomDigits = Math.floor(10000 + Math.random() * 90000); // 5 random digits
      generatedId = `${datePrefix}${randomDigits}`;

      // Check for uniqueness in the database
      const existingStudent = await Student.findOne({ studentId: generatedId });
      if (!existingStudent) {
        isUnique = true;
      }
    }

    student.studentId = generatedId;
  }
});

export const Student = model<IStudent>('Student', studentSchema);
