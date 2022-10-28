import { State } from "./state.model";

export interface District {
  _id?: number;
  name?: string;
  description?: string;
  code?: string;
  state?: State;
}
