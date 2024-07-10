import * as graphql from "@nestjs/graphql";
import { ReviewResolverBase } from "./base/review.resolver.base";
import { Review } from "./base/Review";
import { ReviewService } from "./review.service";

@graphql.Resolver(() => Review)
export class ReviewResolver extends ReviewResolverBase {
  constructor(protected readonly service: ReviewService) {
    super(service);
  }
}
