import { Common } from "./common.model";
import { Designation } from "./designation.model";

export class User extends Common {
  _id?: number = undefined;
  userId?: number = undefined;
  email?: string = undefined;
  hash?: string = undefined;
  token?: string = undefined;
  firstName?: string = undefined;
  middleName?: string = undefined;
  lastName?: string = undefined;
  mobileNumber?: string = undefined;
  alternateNumber?: string = undefined;
  role?: any;
  designation!: Designation;
  name?: {
    firstName: string,
    lastName: string
  };
  topics: any;
  age?: number;
  profilePicUrl?: any;
  profilePicDetails?: any;
  state?: number;
  district?: number;
  school?: number;
  isVerified?: boolean;
  docUrl?: string;
  isProfileCompleted?: boolean;

  static roles = {
    ADMIN: 1,
    MENTOR: 2,
    SEEKER: 3
  };
}