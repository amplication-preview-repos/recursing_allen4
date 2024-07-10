import { Module } from "@nestjs/common";
import { RentalModuleBase } from "./base/rental.module.base";
import { RentalService } from "./rental.service";
import { RentalController } from "./rental.controller";
import { RentalResolver } from "./rental.resolver";

@Module({
  imports: [RentalModuleBase],
  controllers: [RentalController],
  providers: [RentalService, RentalResolver],
  exports: [RentalService],
})
export class RentalModule {}
