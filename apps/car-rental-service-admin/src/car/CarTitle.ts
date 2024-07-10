import { Car as TCar } from "../api/car/Car";

export const CAR_TITLE_FIELD = "name";

export const CarTitle = (record: TCar): string => {
  return record.name?.toString() || String(record.id);
};
