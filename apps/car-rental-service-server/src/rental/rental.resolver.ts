import * as graphql from "@nestjs/graphql";
import { RentalResolverBase } from "./base/rental.resolver.base";
import { Rental } from "./base/Rental";
import { RentalService } from "./rental.service";

@graphql.Resolver(() => Rental)
export class RentalResolver extends RentalResolverBase {
  constructor(protected readonly service: RentalService) {
    super(service);
  }
}
