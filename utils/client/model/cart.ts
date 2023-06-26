import _ from "lodash";

export class Cart {
  private _json:any;

  /**
   * Cart constructor
   * @param json
   * example:
   * {
   * "id": 6982,
   * "app_key": "",
   * "cart_token": "5TjRD1z23dI",
   * "items": {},
   * "item_count": 0,
   * "total_price": 0,
   * "total_discount": 0,
   * "currency": "krw",
   * "ppb_franchise_id": null,
   * "ppb_coupon_id": null,
   * "order_discount_price": 0
   * }
   */
  constructor(json:any) {
    this._json = json;
  }

  set json(value: any) {
    this._json = value;
  }

  get json(): any {
    return this._json;
  }

  get id() {
    return this._json.id;
  }

  get appKey() {
    return this._json.app_key;
  }

  get cartToken() {
    return this._json.cart_token;
  }

  get items() {
    return this._json.items;
  }

  get itemCount() {
    return this._json.item_count;
  }

  get totalPrice() {
    return this._json.total_price;
  }

  get totalDiscount() {
    return this._json.total_discount;
  }

  get currency() {
    return this._json.currency;
  }

  get ppbFranchiseId() {
    return this._json.ppb_franchise_id;
  }

  get ppbCouponId() {
    return this._json.ppb_coupon_id;
  }

  get orderDiscountPrice() {
    return this._json.order_discount_price;
  }


}
