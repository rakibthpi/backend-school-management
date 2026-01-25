import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest.js';
import { AcademicDepartmentControllers } from './academicDepartment.controller.js';
import { AcademicDepartmentValidation } from './academicDepartment.validation.js';

const router = Router();

router.post(
  '/create-academic-department',
  validateRequest(AcademicDepartmentValidation.createAcademicDepartmentValidationSchema),
  AcademicDepartmentControllers.createAcademicDepartment,
);

router.get('/:departmentId', AcademicDepartmentControllers.getSingleAcademicDepartment);

router.patch(
  '/:departmentId',
  validateRequest(AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema),
  AcademicDepartmentControllers.updateAcademicDepartment,
);

router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);

export const AcademicDepartmentRoutes = router;
