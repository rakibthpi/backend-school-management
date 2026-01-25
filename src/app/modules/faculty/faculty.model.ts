import { model, Schema } from 'mongoose';

import { User } from '../user/user.model.js';
import type { IAcademicBackground, IFaculty, IName } from './faculty.interface.js';

const nameSchema = new Schema<IName>(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
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

const facultySchema = new Schema<IFaculty>(
  {
    facultyId: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: nameSchema,
      required: true,
    },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
    dateOfBirth: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicDepartment',
      required: true,
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    academicBackground: {
      type: academicBackgroundSchema,
      required: true,
    },
    profileImage: { type: String, required: true },
    joiningDate: { type: String, required: true },
    status: {
      type: String,
      enum: ['active', 'blocked'],
      default: 'active',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

facultySchema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    await User.deleteOne({ userId: doc.facultyId });
  }
});

export const Faculty = model<IFaculty>('Faculty', facultySchema);
