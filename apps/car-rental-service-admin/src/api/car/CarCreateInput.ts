import { RentalCreateNestedManyWithoutCarsInput } from "./RentalCreateNestedManyWithoutCarsInput";
import { ReviewCreateNestedManyWithoutCarsInput } from "./ReviewCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  model?: string | null;
  year?: number | null;
  fuelType?: string | null;
  pricePerDay?: number | null;
  name?: string | null;
  rentals?: RentalCreateNestedManyWithoutCarsInput;
  reviews?: ReviewCreateNestedManyWithoutCarsInput;
};
