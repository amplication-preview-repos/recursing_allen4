import { RentalWhereInput } from "./RentalWhereInput";
import { RentalOrderByInput } from "./RentalOrderByInput";

export type RentalFindManyArgs = {
  where?: RentalWhereInput;
  orderBy?: Array<RentalOrderByInput>;
  skip?: number;
  take?: number;
};
