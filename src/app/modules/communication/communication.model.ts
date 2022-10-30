import { Common } from "src/app/core/models/common.model";

export interface Communication extends Common {
  _id?: number;
  content?: string;
  to?: any;
  createdBy?: any
}
