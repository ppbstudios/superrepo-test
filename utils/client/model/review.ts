import _ from 'lodash';
import { Coupon } from '~/utils/client/model/coupon';
export class Review {
  private json: any;
  constructor(json: any) {
    this.json = json;
  }

  get id(): number {
    return this.json.id;
  }
  get userId(): number {
    return this.json.user_id;
  }
  get productId(): number {
    return this.json.ppb_product_id;
  }
  get franchiseId(): number {
    return this.json.ppb_franchise_id;
  }
  get orderId(): number {
    return this.json.ppb_order_id;
  }
  get status(): string {
    return this.json.status;
  }
  get reviewPoint(): number {
    return this.json.review_point ?? 5.0;
  }
  get reviewComment(): string {
    return this.json.review_comment ?? '';
  }
  get oneLine(): string {
    return this.json.one_line;
  }
  get dia(): string {
    return this.json.dia;
  }
  get fit(): string {
    return this.json.fit;
  }
  get reorder(): string {
    return this.json.reorder;
  }
  get createdAt(): string {
    return this.json.created_At;
  }
  get opinions(): [] {
    return this.json.opinions;
  }
  get tags(): [] {
    return this.json.tags;
  }
  get likeCount(): number {
    return this.json.like_count;
  }
  get userLike(): boolean {
    return this.json.user_like ?? false;
  }
  get isTextReview(): boolean {
    return this.json.is_text_review ?? true;
  }
  get userNickName(): string {
    return this.json.user.nick_name;
  }
  get reviewImages(): {}[] {
    return this.json.review_images ?? [];
  }
  get reviewVideos(): [] {
    return this.json.review_videos ?? [];
  }
  get thumbNail() {
    if (!_.isEmpty(this.reviewImages)) {
      const imageUrls: any = this.reviewImages[0];
      if (
        imageUrls.hasOwnProperty('size256') &&
        imageUrls.size256.hasOwnProperty('url')
      ) {
        return imageUrls.size256.url;
      }
      if (
        imageUrls.hasOwnProperty('size1024') &&
        imageUrls.size256.hasOwnProperty('url')
      ) {
        return imageUrls.size256.url;
      }
      if (imageUrls.hasOwnProperty('url')) {
        return imageUrls.size256.url;
      }
    } else {
      return null;
    }
  }
  get reviewImageFirstUrl() {
    if (!_.isEmpty(this.reviewImages)) {
      const imageUrls: any = this.reviewImages[0];
      if (imageUrls.hasOwnProperty('url')) {
        return imageUrls.url;
      }
    } else {
      return null;
    }
  }
  get isInfluencerReview(): boolean {
    return this.json.is_influencer_review;
  }
  get coupons() {
    return new Coupon(this.json.coupons);
  }
  // 추후 추가작업 필요! 일단 get만업 작업
  //   void refreshByAnother(Review anotherReview) {
  //   if (id == anotherReview.id) {
  //   json = anotherReview.json;
  // }
  // }
  //
  // Future<void> refreshReviewImages() async {
  //   Review r = await client.getReviewById(id);
  //   logger.d('refreshReviewImages ==>' + r.reviewImages.toString());
  //   reviewImages = r.reviewImages;
  // }
  //
  // int get totalDiscountValue {
  //   int value = 0;
  //   coupons.coupons.forEach((element) {
  //     value += element.discountValue;
  //   });
  //   return value;
  // }
}

export class Reviews {
  private json: any;
  private _reviews: Review[] = [];
  private _reviewsById: any = {};
  constructor(json: any) {
    this.json = json;
    for (const reviewJson of this.json) {
      const review = new Review(reviewJson);
      this._reviews.push(review);
      this._reviewsById[reviewJson.id] = review;
    }
  }

  get items() {
    return this._reviews;
  }
  // 용도가 뭘까?
  // get ids(){
  //
  // }
}
