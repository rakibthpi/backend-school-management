import type { IStudent } from './student.interface.js';
export declare const Student: import('mongoose').Model<
  IStudent,
  {},
  {},
  {},
  import('mongoose').Document<unknown, {}, IStudent, {}, import('mongoose').DefaultSchemaOptions> &
    IStudent & {
      _id: import('mongoose').Types.ObjectId;
    } & {
      __v: number;
    } & {
      id: string;
    },
  any,
  IStudent
>;
//# sourceMappingURL=student.model.d.ts.map
