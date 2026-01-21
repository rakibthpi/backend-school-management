import type { IStudent } from './student.interface.js';
export declare const createStudentToDB: (studentData: IStudent) => Promise<
  import('mongoose').Document<unknown, {}, IStudent, {}, import('mongoose').DefaultSchemaOptions> &
    IStudent & {
      _id: import('mongoose').Types.ObjectId;
    } & {
      __v: number;
    } & {
      id: string;
    }
>;
//# sourceMappingURL=student.services.d.ts.map
