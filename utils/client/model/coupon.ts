import _ from 'lodash';

export class Coupon {
  private json: any;

  constructor(json: any) {
    this.json = json;
  }

  get id() {
    return this.json.id;
  }
  get userId() {
    return this.json.user_id;
  }

  get discountedValue() {
    return this.json.discountedValue;
  }

  get couponCode() {
    return this.json.coupon_code;
  }

  get expiresAt() {
    //   DateTime get expiresAt => DateTime.parse(json['expires_at'] as String);
    return this.json.expiresAt;
  }

  get usedAt() {
    return this.json.usedAt;
  }

  get canceledAt() {
    return this.json.canceledAt;
  }

  get createdAt() {
    return this.json.created_at;
  }

  get updatedAt() {
    return this.json.updated_at;
  }

  get store_id() {
    return this.json.store_id;
  }

  get discountValue() {
    return this.json.discounted_value ?? 0.0;
  }
  get isPercentage() {
    return this.json.isPercentage;
  }

  get title() {
    return this.json.title;
  }

  get description() {
    return this.json.description;
  }

  get imageSrc() {
    return this.json.image_src;
  }

  get couponType() {
    return this.json.coupon_type;
  }

  get minPrice() {
    return this.json.minPrice;
  }

  get productIds() {
    return this.json.product_ids;
  }

  get collectionIds() {
    return this.json.collectionIds;
  }

  get brandIds() {
    return this.json.brandIds;
  }
}

export class Coupons {
  private json: any;
  private _coupons: Coupon[];

  constructor(json: any) {
    this.json = json;
    this._coupons = _.map(this.json || [], (item) => {
      return new Coupon(item);
    });
  }

  get items(): Coupon[] {
    return this._coupons;
  }
}

// {
//   "total": 1,
//     "records": [
//   {
//     "id": 11879,
//     "user_id": 320212,
//     "coupon_code": "always",
//     "discounted_value": "0.0",
//     "expires_at": "2023-12-31T23:59:59.999+09:00",
//     "used_at": null,
//     "canceled_at": null,
//     "created_at": "2023-04-13T16:32:40.952+09:00",
//     "updated_at": "2023-04-13T16:32:40.952+09:00",
//     "store_id": "winc",
//     "discount_value": "2000.0",
//     "is_percentage": false,
//     "title": "2023쿠폰",
//     "description": "상품준비 이후 취소/노쇼 시 쿠폰 소멸",
//     "image_src": null,
//     "coupon_type": "product",
//     "min_price": 16000,
//     "product_ids": [],
//     "collection_ids": [],
//     "brand_ids": []
//   }
// ]
// }
