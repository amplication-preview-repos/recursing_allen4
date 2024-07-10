import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RentalServiceBase } from "./base/rental.service.base";

@Injectable()
export class RentalService extends RentalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
