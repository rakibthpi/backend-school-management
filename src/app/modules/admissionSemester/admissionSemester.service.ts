import type { IAdmissionSemester } from './admissionSemester.interface.js';
import { AdmissionSemester } from './admissionSemester.model.js';

const admissionSemesterNameCodeMapper: Record<string, string> = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

const createAdmissionSemesterIntoDB = async (payload: IAdmissionSemester) => {
  if (admissionSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AdmissionSemester.create(payload);
  return result;
};

const getAllAdmissionSemestersFromDB = async () => {
  const result = await AdmissionSemester.find();
  return result;
};

const getSingleAdmissionSemesterFromDB = async (id: string) => {
  const result = await AdmissionSemester.findById(id);
  return result;
};

const updateAdmissionSemesterIntoDB = async (id: string, payload: Partial<IAdmissionSemester>) => {
  if (payload.name && payload.code && admissionSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AdmissionSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AdmissionSemesterServices = {
  createAdmissionSemesterIntoDB,
  getAllAdmissionSemestersFromDB,
  getSingleAdmissionSemesterFromDB,
  updateAdmissionSemesterIntoDB,
};
