import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync.js';
import sendResponse from '../../utils/sendResponse.js';
import { AdmissionSemesterServices } from './admissionSemester.service.js';

const createAdmissionSemester = catchAsync(async (req, res) => {
  const result = await AdmissionSemesterServices.createAdmissionSemesterIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admission semester is created successfully',
    data: result,
  });
});

const getAllAdmissionSemesters = catchAsync(async (req, res) => {
  const result = await AdmissionSemesterServices.getAllAdmissionSemestersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admission semesters are retrieved successfully',
    data: result,
  });
});

const getSingleAdmissionSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AdmissionSemesterServices.getSingleAdmissionSemesterFromDB(semesterId as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admission semester is retrieved successfully',
    data: result,
  });
});

const updateAdmissionSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AdmissionSemesterServices.updateAdmissionSemesterIntoDB(semesterId as string, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admission semester is updated successfully',
    data: result,
  });
});

export const AdmissionSemesterControllers = {
  createAdmissionSemester,
  getAllAdmissionSemesters,
  getSingleAdmissionSemester,
  updateAdmissionSemester,
};
