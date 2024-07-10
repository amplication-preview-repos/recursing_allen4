import { JsonValue } from "type-fest";
import { Rental } from "../rental/Rental";
import { Review } from "../review/Review";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  rentals?: Array<Rental>;
  reviews?: Array<Review>;
};
