import { Model, Types } from 'mongoose';

export type IName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type IAdmin = {
  adminId: string;
  user: Types.ObjectId;
  name: IName;
  email: string;
  contactNo: string;
  permissions: string[];
  lastLoginAt?: Date;
  failedLoginAttempts: number;
  accountLockedUntil?: Date;
  twoFactorEnabled: boolean;
  twoFactorSecret?: string;
  status: 'active' | 'inactive' | 'blocked';
  isDeleted: boolean;
};

export type AdminModel = Model<IAdmin, Record<string, unknown>>;
