import { Car } from "../car/Car";
import { User } from "../user/User";

export type Rental = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date | null;
  endDate: Date | null;
  car?: Car | null;
  user?: User | null;
};
