import { Module } from "@nestjs/common";
import { CarModuleBase } from "./base/car.module.base";
import { CarService } from "./car.service";
import { CarController } from "./car.controller";
import { CarResolver } from "./car.resolver";

@Module({
  imports: [CarModuleBase],
  controllers: [CarController],
  providers: [CarService, CarResolver],
  exports: [CarService],
})
export class CarModule {}
