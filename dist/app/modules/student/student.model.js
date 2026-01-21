import { connect, model, Schema } from 'mongoose';
const nameSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});
const guardianSchema = new Schema({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});
const localGuardianSchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});
const academicBackgroundSchema = new Schema({
  previousInstitution: { type: String, required: true },
  board: { type: String, required: true },
  passingYear: { type: Number, required: true },
  result: { type: String, required: true },
});
const studentSchema = new Schema({
  name: nameSchema,
  email: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  academicBackground: academicBackgroundSchema,
  admissionDate: { type: String, required: true },
  studentId: { type: String, required: true },
  profileImage: { type: String, required: true },
});
export const Student = model('Student', studentSchema);
//# sourceMappingURL=student.model.js.map
