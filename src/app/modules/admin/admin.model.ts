import { model, Schema } from 'mongoose';

import { User } from '../user/user.model.js';
import type { IAdmin, IName } from './admin.interface.js';

const nameSchema = new Schema<IName>(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  { _id: false },
);

const adminSchema = new Schema<IAdmin>(
  {
    adminId: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: nameSchema,
      required: true,
    },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    permissions: { type: [String], default: [] },
    lastLoginAt: { type: Date },
    failedLoginAttempts: { type: Number, default: 0 },
    accountLockedUntil: { type: Date },
    twoFactorEnabled: { type: Boolean, default: false },
    twoFactorSecret: { type: String },
    status: {
      type: String,
      enum: ['active', 'inactive', 'blocked'],
      default: 'active',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

adminSchema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    await User.deleteOne({ userId: doc.adminId });
  }
});

export const Admin = model<IAdmin>('Admin', adminSchema);
