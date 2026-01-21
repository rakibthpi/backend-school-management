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
  name: IName;
  email: string;
  gender: 'male' | 'female'; // That is type littral
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  academicBackground: IAcademicBackground;
  admissionDate: string;
  profileImage?: string;
};
