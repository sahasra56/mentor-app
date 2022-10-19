import { User } from "src/app/core/models";

export interface Question {
  _id: number;
  title?: string;
  description?: string;
  createdBy?: User;
  createdOn?: string;
  createdAt?: string;
  answers?: Answer[];
  isAnswered?: boolean;
}

export interface Answer {
  _id?: number;
  description?: string;
  answeredBy?: User;
  answeredOn?: string;
}