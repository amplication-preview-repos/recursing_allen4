import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarServiceBase } from "./base/car.service.base";

@Injectable()
export class CarService extends CarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
