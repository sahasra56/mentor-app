import { User } from "src/app/core/models";

export interface Article {
  _id: number;
  imagePath?: string;
  title?: string;
  description?: string;
  publisher?: string;
  createdBy?: User;
  createdAt?: string;
  isViewed?: boolean;
}