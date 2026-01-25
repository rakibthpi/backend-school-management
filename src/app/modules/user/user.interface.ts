import { Model } from 'mongoose';

export type IUser = {
  userId: string;
  email: string;
  password?: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: 'student' | 'faculty' | 'admin';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

export interface UserModel extends Model<IUser> {
  isUserExistsByCustomId(id: string): Promise<IUser | null>;

  isPasswordMatched(plainTextPassword: string, hashedPassword: string): Promise<boolean>;

  isJWTIssuedBeforePasswordChanged(passwordChangedTimestamp: Date, jwtIssuedTimestamp: number): boolean;
}
