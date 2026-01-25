import { z } from 'zod';

const createAdmissionSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum(['Autumn', 'Summer', 'Fall'], {
      message: 'Name is required',
    }),
    year: z.string({
      message: 'Year is required',
    }),
    code: z.enum(['01', '02', '03'], {
      message: 'Code is required',
    }),
    startMonth: z.enum(
      [
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
      {
        message: 'Start month is required',
      },
    ),
    endMonth: z.enum(
      [
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
      {
        message: 'End month is required',
      },
    ),
  }),
});

const updateAdmissionSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum(['Autumn', 'Summer', 'Fall']).optional(),
    year: z.string().optional(),
    code: z.enum(['01', '02', '03']).optional(),
    startMonth: z
      .enum([
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
      ])
      .optional(),
    endMonth: z
      .enum([
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
      ])
      .optional(),
  }),
});

export const AdmissionSemesterValidation = {
  createAdmissionSemesterValidationSchema,
  updateAdmissionSemesterValidationSchema,
};
