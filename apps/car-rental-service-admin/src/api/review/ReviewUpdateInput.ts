import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  content?: string | null;
  rating?: number | null;
  car?: CarWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
