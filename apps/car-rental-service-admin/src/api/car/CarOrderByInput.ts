import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  model?: SortOrder;
  year?: SortOrder;
  fuelType?: SortOrder;
  pricePerDay?: SortOrder;
  name?: SortOrder;
};
