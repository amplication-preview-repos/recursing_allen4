import { CarWhereUniqueInput } from "./CarWhereUniqueInput";
import { CarUpdateInput } from "./CarUpdateInput";

export type UpdateCarArgs = {
  where: CarWhereUniqueInput;
  data: CarUpdateInput;
};
