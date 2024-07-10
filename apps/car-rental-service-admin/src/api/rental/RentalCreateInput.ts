import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RentalCreateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  car?: CarWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
