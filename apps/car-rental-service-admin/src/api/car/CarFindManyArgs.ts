import { CarWhereInput } from "./CarWhereInput";
import { CarOrderByInput } from "./CarOrderByInput";

export type CarFindManyArgs = {
  where?: CarWhereInput;
  orderBy?: Array<CarOrderByInput>;
  skip?: number;
  take?: number;
};
