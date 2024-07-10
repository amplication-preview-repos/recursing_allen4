import { Rental as TRental } from "../api/rental/Rental";

export const RENTAL_TITLE_FIELD = "id";

export const RentalTitle = (record: TRental): string => {
  return record.id?.toString() || String(record.id);
};
