import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReviewService } from "./review.service";
import { ReviewControllerBase } from "./base/review.controller.base";

@swagger.ApiTags("reviews")
@common.Controller("reviews")
export class ReviewController extends ReviewControllerBase {
  constructor(protected readonly service: ReviewService) {
    super(service);
  }
}
