import { CarWhereInput } from "./CarWhereInput";

export type CarListRelationFilter = {
  every?: CarWhereInput;
  some?: CarWhereInput;
  none?: CarWhereInput;
};
