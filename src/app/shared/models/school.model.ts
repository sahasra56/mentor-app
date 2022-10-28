import { District } from "./district.model";

export interface School {
  _id?: number;
  name?: string;
  description?: string;
  code?: string;
  district?: District;
}
