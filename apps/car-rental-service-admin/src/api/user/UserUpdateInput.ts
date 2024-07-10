import { InputJsonValue } from "../../types";
import { RentalUpdateManyWithoutUsersInput } from "./RentalUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  rentals?: RentalUpdateManyWithoutUsersInput;
  reviews?: ReviewUpdateManyWithoutUsersInput;
};
