import _ from 'lodash';
import { typeVariant } from '~/utils/client/types/variant';
import { Product } from '~/utils/client/model/product';
import { parsePrice } from '~/utils/application_helper';
import { JsonProduct } from '~/utils/client/types/product';
//

export class Variant {
  private json: typeVariant;
  private product: Product;
  constructor(variantJson: typeVariant, product: Product) {
    this.json = variantJson;
    this.product = product;
  }
  get id(): number {
    return this.json['id'];
  }
  get title(): string {
    return this.json['title'] ?? '';
  }
  get price(): number {
    return this.price1; // 1팩 가격
  }

  get price1(): number {
    return parsePrice(this.json['price1_krw']) ?? 9876543210; // 1팩 가격
  }

  get price2(): number {
    return parsePrice(this.json['price2_krw']) ?? 9876543210; // 2팩 가격
  }

  get price3(): number {
    return parsePrice(this.json['price3_krw']) ?? 9876543210; // 3팩 가격
  }

  get price4(): number {
    return parsePrice(this.json['price4_krw']) ?? 9876543210; // 4팩 가격
  }

  get price5(): number {
    return parsePrice(this.json['price5_krw']) ?? 9876543210; // 5팩 가격
  }

  get sku(): string {
    return this.json['sku'] ?? '';
  }

  get position(): number {
    return this.json['position'];
  }

  get compareAtPrice(): number {
    return parsePrice(this.json['compare_at_price_krw']) ?? 9876543210;
  }

  get option(): string {
    return this.product.isLens() ? this.json['option2'] : this.json['option1'];
  }

  get option1(): string {
    return this.json['option1'] ?? '';
  }

  get option2(): string {
    return this.json['option2'] ?? '';
  }

  get option3(): string {
    return this.json['option3'] ?? '';
  }

  get option4(): string {
    return this.json['option4'] ?? '';
  }

  get barcode(): number | string {
    return this.json['barcode'] ?? '';
  }

  get inventoryQuantity(): number {
    return this.json['inventory_quantity'] ?? -1;
  }
}

export class Variants {
  private readonly product: Product;
  private jsonArray: typeVariant[];
  private variants: Variant[];
  private variantsById: Hash<Variant>;
  static instance: Variants | void;

  constructor(product: Product, jsonArray: typeVariant[]) {
    this.product = product;
    this.jsonArray = jsonArray;
    this.variants = [];
    this.variantsById = {};
  }

  static getVariantsInstance(product: Product, jsonArray: typeVariant[]) {
    if (!Variants.instance) {
      Variants.instance = new Variants(product, jsonArray);
    }
    return Variants.instance;
  }

  set json(jsonArray: typeVariant[]) {
    this.variants = [];
    this.variantsById = {};
    _.forEach(this.json, (variantJson) => {
      const variant = new Variant(variantJson, this.product);
      this.variants.push(variant);
      this.variantsById[variant.id] = variant;
    });
  }

  get items(): Variant[] {
    return this.variants;
  }

  get ids(): number[] {
    return Object.keys(this.variantsById).map(Number);
  }

  byId(variantsId: string | number): Variant {
    return this.variantsById[variantsId];
  }

  add(variant: Variant) {
    this.variants.push(variant);
    this.variantsById[variant.id] = variant;
  }

  addAll(variants: Variant[]) {
    // 변수명 확인.  this.variants, 파라미터 인자 variants
    this.variants.push(...variants);
    _.forEach(variants, (element) => {
      this.variantsById[element.id] = element;
    });
  }

  // 옵션값(option1~4)을 매칭해서 일치하는 variant list 를 반환
  // [option1] : lens: color 색상, etc: option 옵션
  // [option2] : sph 근시도수
  // [option3] : cyl 난시도수
  // [option4] : axis 축

  //!  옵션타입 및 로직 이해하고와서 다시작성해야함
  // getVariantsByOptions({ option1, option2, option3, option4 }) {
  //   const filtered = [];

  //   for (let v of this.items) {
  //     if (option1 != null && v.option1 != option1) {
  //       continue;
  //     }
  //     if (option2 != null && v.option2 != option2) {
  //       continue;
  //     }
  //     if (option3 != null && v.option3 != option3) {
  //       continue;
  //     }
  //     if (option4 != null && v.option4 != option4) {
  //       continue;
  //     }
  //     filtered.push(v);
  //   }
  //     밑에 로직 이해 필요. 조건 맞는 요소 필터링 해놓고 왜 다시 새로만들고 보내는건지 잘모르겠음.
  //     deep copy 를 진행하는건가?
  //   const res = new Variants(product: product);
  //   res.addAll(filtered);
  //   return res;
  // }
}
