import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest.js';
import { AcademicSemesterControllers } from './academicSemester.controller.js';
import { AcademicSemesterValidation } from './academicSemester.validation.js';

const router = Router();

router.post(
  '/create-academic-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterValidationSchema),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get('/:semesterId', AcademicSemesterControllers.getSingleAcademicSemester);

router.patch(
  '/:semesterId',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterValidationSchema),
  AcademicSemesterControllers.updateAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

export const AcademicSemesterRoutes = router;
