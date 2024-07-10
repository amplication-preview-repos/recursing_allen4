import { Rental } from "../rental/Rental";
import { Review } from "../review/Review";

export type Car = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  model: string | null;
  year: number | null;
  fuelType: string | null;
  pricePerDay: number | null;
  name: string | null;
  rentals?: Array<Rental>;
  reviews?: Array<Review>;
};
