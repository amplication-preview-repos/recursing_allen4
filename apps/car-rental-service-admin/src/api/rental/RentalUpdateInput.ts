import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RentalUpdateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  car?: CarWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
