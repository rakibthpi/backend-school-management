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
  name: IName;
  email: string;
  gender: 'male' | 'female';
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
  studentId: string;
  profileImage?: string;
};
//# sourceMappingURL=student.interface.d.ts.map
