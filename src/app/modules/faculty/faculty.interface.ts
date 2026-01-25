import { Model, Types } from 'mongoose';

export type IName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type IAcademicBackground = {
  previousInstitution: string;
  board: string;
  passingYear: number;
  result: string;
};

export type IFaculty = {
  facultyId: string;
  user: Types.ObjectId;
  name: IName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  academicDepartment: Types.ObjectId;
  presentAddress: string;
  permanentAddress: string;
  academicBackground: IAcademicBackground; // Assuming single object like Student for now
  profileImage: string;
  joiningDate: string;
  status: 'active' | 'blocked';
  isDeleted: boolean;
};

export type FacultyModel = Model<IFaculty, Record<string, unknown>>;
