import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CarService } from "./car.service";
import { CarControllerBase } from "./base/car.controller.base";

@swagger.ApiTags("cars")
@common.Controller("cars")
export class CarController extends CarControllerBase {
  constructor(protected readonly service: CarService) {
    super(service);
  }
}
