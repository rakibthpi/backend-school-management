import { z } from 'zod';

const createUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().optional(),
  lastName: z.string().min(1).max(20),
});

export const createAdminValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    admin: z.object({
      name: createUserNameValidationSchema,
      email: z.string().email(),
      contactNo: z.string(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().min(1).max(20).optional(),
});

export const updateAdminValidationSchema = z.object({
  body: z.object({
    admin: z
      .object({
        name: updateUserNameValidationSchema.optional(),
        email: z.string().email().optional(),
        contactNo: z.string().optional(),
      })
      .optional(),
  }),
});

export const adminValidations = {
  createAdminValidationSchema,
  updateAdminValidationSchema,
};
