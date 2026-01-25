import { Types } from 'mongoose';

export type IName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type IGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type ILocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type IAcademicBackground = {
  previousInstitution: string;
  board: string;
  passingYear: number;
  result: string;
};

export type IStudent = {
  studentId: string;
  user: Types.ObjectId;
  name: IName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  academicDepartment: Types.ObjectId;
  admissionSemester: Types.ObjectId;
  academicBackground: IAcademicBackground;
  profileImage?: string;
  admissionDate?: string; // Optional in prompt? "admissionDate" listed. Model has it optional.
  status: 'active' | 'blocked'; // Prompt just says status. Assuming values.
  isDeleted: boolean;
};
