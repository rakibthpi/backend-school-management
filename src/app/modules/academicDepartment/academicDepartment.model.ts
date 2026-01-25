import { model, Schema } from 'mongoose';
import type { IAcademicDepartment } from './academicDepartment.interface.js';

const academicDepartmentSchema = new Schema<IAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

academicDepartmentSchema.pre('save', async function () {
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: this.name,
  });

  if (isDepartmentExist) {
    throw new Error('This department is already exist!');
  }
});

academicDepartmentSchema.pre('findOneAndUpdate', async function () {
  const query = this.getQuery();
  const isDepartmentExist = await AcademicDepartment.findOne(query);

  if (!isDepartmentExist) {
    throw new Error('This department does not exist! ');
  }
});

export const AcademicDepartment = model<IAcademicDepartment>('AcademicDepartment', academicDepartmentSchema);
