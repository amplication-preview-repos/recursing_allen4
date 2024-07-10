import * as graphql from "@nestjs/graphql";
import { CarResolverBase } from "./base/car.resolver.base";
import { Car } from "./base/Car";
import { CarService } from "./car.service";

@graphql.Resolver(() => Car)
export class CarResolver extends CarResolverBase {
  constructor(protected readonly service: CarService) {
    super(service);
  }
}
