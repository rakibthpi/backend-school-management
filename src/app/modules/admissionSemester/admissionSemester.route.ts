import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest.js';
import { AdmissionSemesterControllers } from './admissionSemester.controller.js';
import { AdmissionSemesterValidation } from './admissionSemester.validation.js';

const router = Router();

router.post(
  '/create-admission-semester',
  validateRequest(AdmissionSemesterValidation.createAdmissionSemesterValidationSchema),
  AdmissionSemesterControllers.createAdmissionSemester,
);

router.get('/:semesterId', AdmissionSemesterControllers.getSingleAdmissionSemester);

router.patch(
  '/:semesterId',
  validateRequest(AdmissionSemesterValidation.updateAdmissionSemesterValidationSchema),
  AdmissionSemesterControllers.updateAdmissionSemester,
);

router.get('/', AdmissionSemesterControllers.getAllAdmissionSemesters);

export const AdmissionSemesterRoutes = router;
