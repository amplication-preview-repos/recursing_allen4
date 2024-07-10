import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RentalService } from "./rental.service";
import { RentalControllerBase } from "./base/rental.controller.base";

@swagger.ApiTags("rentals")
@common.Controller("rentals")
export class RentalController extends RentalControllerBase {
  constructor(protected readonly service: RentalService) {
    super(service);
  }
}
