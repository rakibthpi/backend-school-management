import { Router } from 'express';

import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route.js';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route.js';
import { AdminRoutes } from '../modules/admin/admin.route.js';
import { AdmissionSemesterRoutes } from '../modules/admissionSemester/admissionSemester.route.js';
import { AuthRoutes } from '../modules/auth/auth.route.js';
import { FacultyRoutes } from '../modules/faculty/faculty.route.js';
import { StudentRoutes } from '../modules/student/student.routes.js';
import { UserRoutes } from '../modules/user/user.route.js';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/admission-semesters',
    route: AdmissionSemesterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
