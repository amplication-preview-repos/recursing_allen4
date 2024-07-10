import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type CarWhereInput = {
  id?: StringFilter;
  model?: StringNullableFilter;
  year?: IntNullableFilter;
  fuelType?: StringNullableFilter;
  pricePerDay?: FloatNullableFilter;
  name?: StringNullableFilter;
  rentals?: RentalListRelationFilter;
  reviews?: ReviewListRelationFilter;
};
