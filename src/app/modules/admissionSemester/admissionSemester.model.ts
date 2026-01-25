import { model, Schema } from 'mongoose';
import type { IAdmissionSemester } from './admissionSemester.interface.js';

const admissionSemesterSchema = new Schema<IAdmissionSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: ['Autumn', 'Summer', 'Fall'],
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: ['01', '02', '03'],
    },
    startMonth: {
      type: String,
      required: true,
      enum: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
    endMonth: {
      type: String,
      required: true,
      enum: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
  },
  {
    timestamps: true,
  },
);

admissionSemesterSchema.pre('save', async function () {
  const isSemesterExist = await AdmissionSemester.findOne({
    name: this.name,
    year: this.year,
  });

  if (isSemesterExist) {
    throw new Error('Semester already exists!');
  }
});

export const AdmissionSemester = model<IAdmissionSemester>('AdmissionSemester', admissionSemesterSchema);
