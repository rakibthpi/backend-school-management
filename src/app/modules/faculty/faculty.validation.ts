import { z } from 'zod';

const createUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().optional(),
  lastName: z.string().min(1).max(20),
});

const createAcademicBackgroundValidationSchema = z.object({
  previousInstitution: z.string(),
  board: z.string(),
  passingYear: z.number(),
  result: z.string(),
});

export const createFacultyValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    faculty: z.object({
      name: createUserNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      academicDepartment: z.string(),
      academicBackground: createAcademicBackgroundValidationSchema,
      profileImage: z.string(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().min(1).max(20).optional(),
});

const updateAcademicBackgroundValidationSchema = z.object({
  previousInstitution: z.string().optional(),
  board: z.string().optional(),
  passingYear: z.number().optional(),
  result: z.string().optional(),
});

export const updateFacultyValidationSchema = z.object({
  body: z.object({
    faculty: z
      .object({
        name: updateUserNameValidationSchema.optional(),
        gender: z.enum(['male', 'female', 'other']).optional(),
        dateOfBirth: z.string().optional(),
        email: z.string().email().optional(),
        contactNo: z.string().optional(),
        emergencyContactNo: z.string().optional(),
        bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
        presentAddress: z.string().optional(),
        permanentAddress: z.string().optional(),
        academicDepartment: z.string().optional(),
        academicBackground: updateAcademicBackgroundValidationSchema.optional(),
        profileImage: z.string().optional(),
      })
      .optional(),
  }),
});

export const facultyValidations = {
  createFacultyValidationSchema,
  updateFacultyValidationSchema,
};
