import { Car } from "../car/Car";
import { User } from "../user/User";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  rating: number | null;
  car?: Car | null;
  user?: User | null;
};
