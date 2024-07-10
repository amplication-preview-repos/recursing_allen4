import { RentalUpdateManyWithoutCarsInput } from "./RentalUpdateManyWithoutCarsInput";
import { ReviewUpdateManyWithoutCarsInput } from "./ReviewUpdateManyWithoutCarsInput";

export type CarUpdateInput = {
  model?: string | null;
  year?: number | null;
  fuelType?: string | null;
  pricePerDay?: number | null;
  name?: string | null;
  rentals?: RentalUpdateManyWithoutCarsInput;
  reviews?: ReviewUpdateManyWithoutCarsInput;
};
