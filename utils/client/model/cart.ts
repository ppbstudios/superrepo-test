import _ from "lodash";

class Cart {
  private json: typeCart;

  constructor(json: typeCart) {
    this.json = json;
  }

  get itemCount(): number {
    return this.json['item_count'] || 0;
  }

  get cartItems(): string[] {
    return this.json['cart_items'] || [];
  }

  get skus(): string[] {
    return _.map(this.cartItems, 'sku') || [];
  }
}
