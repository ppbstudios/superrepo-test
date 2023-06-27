import _ from 'lodash';

export class Variant {
  private json:any;

  /**
   * @param json
   *
   * {
   *       "id": 1063122,
   *       "title": "브라운 / -7.00",
   *       "sku": "H73833J2S23C",
   *       "position": 23,
   *       "option1": "브라운",
   *       "option2": "-7.00",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109606 ",
   *       "inventory_quantity": 3,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   */
  constructor(json:any) {
    this.json = json;
  }

  get id() {
    return this.json.id;
  }

  get title() {
    return this.json.title;
  }

  get sku() {
    return this.json.sku;
  }

  get position() {
    return this.json.position;
  }

  get option1() {
    return this.json.option1;
  }

  get option2() {
    return this.json.option2;
  }

  get option3() {
    return this.json.option3;
  }

  get option4() {
    return this.json.option4;
  }

  get barcode() {
    return `${this.json.barcode}`;
  }

  get inventoryQuantity() {
    return this.json.inventory_quantity;
  }
}

export class ProductImage {
  private json:any;
  /**
   * @param json
   * {
   *       "id": 18640,
   *       "ppb_product_id": 10631,
   *       "position": 1,
   *       "created_at": "2023-03-06T16:30:14.390+09:00",
   *       "updated_at": "2023-03-06T16:30:16.403+09:00",
   *       "alt": "thumb-01",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18640/ppb_image_file-c74b5a.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18640/ppb_image_file-c74b5a_size256.jpg",
   *       "overlays": []
   * },
   */
  constructor(json:any) {
    this.json = json;
  }

  get id() {
    return this.json.id;
  }

  get ppbProductId() {
    return this.json.ppb_product_id;
  }

  get position() {
    return this.json.position;
  }

  get createdAt() {
    return this.json.created_at;
  }

  get updatedAt() {
    return this.json.updated_at;
  }

  get alt():string {
    return this.json.alt;
  }

  get src():string {
    return this.json.src;
  }

  get size256():string {
    return this.json.size256;
  }

  get overlays():any[] {
    return this.json.overlays;
  }
}

export class Product {
  private json:any;
  private _variants:Variant[];
  private _images:ProductImage[];

  /**
   * @param json
   * example:
   * {                                                                                                                       8:06:35 AM
   *   "id": 10631,
   *   "channel_id": 48,
   *   "store_id": "hapakristinkr",
   *   "shopify_id": null,
   *   "body_html": null,
   *   "title": "[1+1] 에이투지 크리스틴 원데이 미니(13.6 | 2pcs) - 브라운",
   *   "vendor": "VisionScience",
   *   "product_type": "1 day",
   *   "created_at": "2023-03-06T14:39:02.812+09:00",
   *   "handle": "h73833j2",
   *   "updated_at": "2023-06-08T00:40:12.792+09:00",
   *   "published_at": "2023-03-07T09:03:25.389+09:00",
   *   "status": "draft",
   *   "tags": [
   *     "시크릿"
   *   ],
   *   "collection_handles": [],
   *   "collection_ids": [],
   *   "favorite_count": 3,
   *   "extra": {},
   *   "filter_colors": [],
   *   "ppb_brand_id": 1,
   *   "labels": [],
   *   "order_count": 190,
   *   "product_group": "에이투지 신규 1+1",
   *   "review_point": "4.88095238095238",
   *   "review_count": 42,
   *   "thumbnail_image_id": null,
   *   "lens_type": null,
   *   "dia_inner": 13.6,
   *   "dia_outer": 14.2,
   *   "water": 0.48,
   *   "base_curve": 8.7,
   *   "material": "PC 하이드로겔",
   *   "review_number": null,
   *   "lens_description": "내 눈에 어울리는 직경 찾기 직경 선택 렌즈. 컬러 렌즈 입문자를 위해 내 눈처럼 톤-업되는 브라운 컬러와 다양한 눈 유형에 맞게 선택할 수 있는 6가지 직경으로 제작되었습니다. 꽃결 같은 그래픽이 외곽으로 부드럽게 이어지며, 옅은 테두리로 선명하고 부드러운 눈매를 완성합니다. ",
   *   "lens_count": 2,
   *   "color": "브라운",
   *   "pack_count": 1,
   *   "set_product_ids": [
   *     9708
   *   ],
   *   "web_only": false,
   *   "bogo_type": "1+1",
   *   "bogo_collection_id": null,
   *   "thumbnail_video": null,
   *   "detail_video": null,
   *   "locale": {
   *     "ko": {
   *       "title": "[1+1] 에이투지 크리스틴 원데이 미니(13.6 | 2pcs) - 브라운",
   *       "color": "브라운",
   *       "material": "PC 하이드로겔",
   *       "lens_description": "내 눈에 어울리는 직경 찾기 직경 선택 렌즈. 컬러 렌즈 입문자를 위해 내 눈처럼 톤-업되는 브라운 컬러와 다양한 눈 유형에 맞게 선택할 수 있는 6가지 직경으로 제작되었습니다. 꽃결 같은 그래픽이 외곽으로 부드럽게 이어지며, 옅은 테두리로 선명하고 부드러운 눈매를 완성합니다. "
   *     },
   *     "en": {
   *       "title": null,
   *       "material": null,
   *       "color": null,
   *       "lens_description": null
   *     },
   *     "jp": {
   *       "title": null,
   *       "material": null,
   *       "color": null,
   *       "lens_description": null
   *     }
   *   },
   *   "options": [
   *     {
   *       "name": "color",
   *       "values": [
   *         "브라운"
   *       ],
   *       "position": 1,
   *       "product_id": 10631
   *     },
   *     {
   *       "name": "근시도수(SPH)",
   *       "values": [
   *         "0.00",
   *         "-0.50",
   *         "-1.00",
   *         "-1.25",
   *         "-1.50",
   *         "-1.75",
   *         "-2.00",
   *         "-2.25",
   *         "-2.50",
   *         "-2.75",
   *         "-3.00",
   *         "-3.25",
   *         "-3.50",
   *         "-3.75",
   *         "-4.00",
   *         "-4.25",
   *         "-4.50",
   *         "-4.75",
   *         "-5.00",
   *         "-5.50",
   *         "-6.00",
   *         "-6.50",
   *         "-7.00",
   *         "-7.50",
   *         "-8.00"
   *       ],
   *       "position": 2,
   *       "product_id": 10631
   *     }
   *   ],
   *   "cyl": null,
   *   "description_json": {
   *     "lens_type": null,
   *     "dia": "13.6mm(14.2mm)",
   *     "base_curve": 8.7,
   *     "water": 0.48,
   *     "material": "PC 하이드로겔",
   *     "review_number": null,
   *     "lens_description": "내 눈에 어울리는 직경 찾기 직경 선택 렌즈. 컬러 렌즈 입문자를 위해 내 눈처럼 톤-업되는 브라운 컬러와 다양한 눈 유형에 맞게 선택할 수 있는 6가지 직경으로 제작되었습니다. 꽃결 같은 그래픽이 외곽으로 부드럽게 이어지며, 옅은 테두리로 선명하고 부드러운 눈매를 완성합니다. ",
   *     "lens_count": 2
   *   },
   *   "variants": [
   *     {
   *       "id": 1063100,
   *       "title": "브라운 / 0.00",
   *       "sku": "H73833J2S1C",
   *       "position": 1,
   *       "option1": "브라운",
   *       "option2": "0.00",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109385 ",
   *       "inventory_quantity": 0,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063101,
   *       "title": "브라운 / -0.50",
   *       "sku": "H73833J2S2C",
   *       "position": 2,
   *       "option1": "브라운",
   *       "option2": "-0.50",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109392 ",
   *       "inventory_quantity": 0,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063102,
   *       "title": "브라운 / -1.00",
   *       "sku": "H73833J2S3C",
   *       "position": 3,
   *       "option1": "브라운",
   *       "option2": "-1.00",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109408 ",
   *       "inventory_quantity": 8,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063103,
   *       "title": "브라운 / -1.25",
   *       "sku": "H73833J2S4C",
   *       "position": 4,
   *       "option1": "브라운",
   *       "option2": "-1.25",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109415 ",
   *       "inventory_quantity": 9,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063104,
   *       "title": "브라운 / -1.50",
   *       "sku": "H73833J2S5C",
   *       "position": 5,
   *       "option1": "브라운",
   *       "option2": "-1.50",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109422 ",
   *       "inventory_quantity": 0,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063105,
   *       "title": "브라운 / -1.75",
   *       "sku": "H73833J2S6C",
   *       "position": 6,
   *       "option1": "브라운",
   *       "option2": "-1.75",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109439 ",
   *       "inventory_quantity": -3,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063106,
   *       "title": "브라운 / -2.00",
   *       "sku": "H73833J2S7C",
   *       "position": 7,
   *       "option1": "브라운",
   *       "option2": "-2.00",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109446 ",
   *       "inventory_quantity": 16,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063107,
   *       "title": "브라운 / -2.25",
   *       "sku": "H73833J2S8C",
   *       "position": 8,
   *       "option1": "브라운",
   *       "option2": "-2.25",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109453 ",
   *       "inventory_quantity": -2,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063108,
   *       "title": "브라운 / -2.50",
   *       "sku": "H73833J2S9C",
   *       "position": 9,
   *       "option1": "브라운",
   *       "option2": "-2.50",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109460 ",
   *       "inventory_quantity": 35,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063109,
   *       "title": "브라운 / -2.75",
   *       "sku": "H73833J2S10C",
   *       "position": 10,
   *       "option1": "브라운",
   *       "option2": "-2.75",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109477 ",
   *       "inventory_quantity": 0,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063110,
   *       "title": "브라운 / -3.00",
   *       "sku": "H73833J2S11C",
   *       "position": 11,
   *       "option1": "브라운",
   *       "option2": "-3.00",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109484 ",
   *       "inventory_quantity": 43,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063111,
   *       "title": "브라운 / -3.25",
   *       "sku": "H73833J2S12C",
   *       "position": 12,
   *       "option1": "브라운",
   *       "option2": "-3.25",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109491 ",
   *       "inventory_quantity": 1,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063112,
   *       "title": "브라운 / -3.50",
   *       "sku": "H73833J2S13C",
   *       "position": 13,
   *       "option1": "브라운",
   *       "option2": "-3.50",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109507 ",
   *       "inventory_quantity": 58,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063113,
   *       "title": "브라운 / -3.75",
   *       "sku": "H73833J2S14C",
   *       "position": 14,
   *       "option1": "브라운",
   *       "option2": "-3.75",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109514 ",
   *       "inventory_quantity": 50,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063114,
   *       "title": "브라운 / -4.00",
   *       "sku": "H73833J2S15C",
   *       "position": 15,
   *       "option1": "브라운",
   *       "option2": "-4.00",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109521 ",
   *       "inventory_quantity": 0,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063115,
   *       "title": "브라운 / -4.25",
   *       "sku": "H73833J2S16C",
   *       "position": 16,
   *       "option1": "브라운",
   *       "option2": "-4.25",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109538 ",
   *       "inventory_quantity": 13,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063116,
   *       "title": "브라운 / -4.50",
   *       "sku": "H73833J2S17C",
   *       "position": 17,
   *       "option1": "브라운",
   *       "option2": "-4.50",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109545 ",
   *       "inventory_quantity": 38,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063117,
   *       "title": "브라운 / -4.75",
   *       "sku": "H73833J2S18C",
   *       "position": 18,
   *       "option1": "브라운",
   *       "option2": "-4.75",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109552 ",
   *       "inventory_quantity": 12,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063118,
   *       "title": "브라운 / -5.00",
   *       "sku": "H73833J2S19C",
   *       "position": 19,
   *       "option1": "브라운",
   *       "option2": "-5.00",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109569 ",
   *       "inventory_quantity": 10,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063119,
   *       "title": "브라운 / -5.50",
   *       "sku": "H73833J2S20C",
   *       "position": 20,
   *       "option1": "브라운",
   *       "option2": "-5.50",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109576 ",
   *       "inventory_quantity": 0,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063120,
   *       "title": "브라운 / -6.00",
   *       "sku": "H73833J2S21C",
   *       "position": 21,
   *       "option1": "브라운",
   *       "option2": "-6.00",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109583 ",
   *       "inventory_quantity": 5,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063121,
   *       "title": "브라운 / -6.50",
   *       "sku": "H73833J2S22C",
   *       "position": 22,
   *       "option1": "브라운",
   *       "option2": "-6.50",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109590 ",
   *       "inventory_quantity": 5,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063122,
   *       "title": "브라운 / -7.00",
   *       "sku": "H73833J2S23C",
   *       "position": 23,
   *       "option1": "브라운",
   *       "option2": "-7.00",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109606 ",
   *       "inventory_quantity": 3,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063123,
   *       "title": "브라운 / -7.50",
   *       "sku": "H73833J2S24C",
   *       "position": 24,
   *       "option1": "브라운",
   *       "option2": "-7.50",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109613 ",
   *       "inventory_quantity": 8,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     },
   *     {
   *       "id": 1063124,
   *       "title": "브라운 / -8.00",
   *       "sku": "H73833J2S25C",
   *       "position": 25,
   *       "option1": "브라운",
   *       "option2": "-8.00",
   *       "option3": null,
   *       "option4": null,
   *       "barcode": "8809887109620 ",
   *       "inventory_quantity": 8,
   *       "compare_at_price_krw": "10000",
   *       "price1_krw": "5000",
   *       "price2_krw": null,
   *       "price3_krw": null,
   *       "price4_krw": null,
   *       "price5_krw": null,
   *       "compare_at_price_jpy": null,
   *       "price1_jpy": null,
   *       "price2_jpy": null,
   *       "price3_jpy": null,
   *       "price4_jpy": null,
   *       "price5_jpy": null,
   *       "compare_at_price_usd": null,
   *       "price1_usd": null,
   *       "price2_usd": null,
   *       "price3_usd": null,
   *       "price4_usd": null,
   *       "price5_usd": null,
   *       "compare_at_price2": "10000",
   *       "price": "5000",
   *       "compare_at_price": "10000",
   *       "price2": null,
   *       "price3": null,
   *       "price4": null,
   *       "price5": null
   *     }
   *   ],
   *   "package_image": "https://cdn-dev.winc.app/uploads/ppb/image/src/18595/ppb_image_file-365eef.jpg",
   *   "lens_pattern_image": "https://cdn-dev.winc.app/uploads/ppb/image/src/18594/ppb_image_file-95ba15.png",
   *   "image": {
   *     "id": 18640,
   *     "ppb_product_id": 10631,
   *     "position": 1,
   *     "created_at": "2023-03-06T16:30:14.390+09:00",
   *     "updated_at": "2023-03-06T16:30:16.403+09:00",
   *     "alt": "thumb-01",
   *     "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18640/ppb_image_file-c74b5a.jpg",
   *     "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18640/ppb_image_file-c74b5a_size256.jpg",
   *     "overlays": []
   *   },
   *   "images": [
   *     {
   *       "id": 18640,
   *       "ppb_product_id": 10631,
   *       "position": 1,
   *       "created_at": "2023-03-06T16:30:14.390+09:00",
   *       "updated_at": "2023-03-06T16:30:16.403+09:00",
   *       "alt": "thumb-01",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18640/ppb_image_file-c74b5a.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18640/ppb_image_file-c74b5a_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18646,
   *       "ppb_product_id": 10631,
   *       "position": 2,
   *       "created_at": "2023-03-06T16:35:41.180+09:00",
   *       "updated_at": "2023-03-06T16:35:44.421+09:00",
   *       "alt": "thumb-02",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18646/ppb_image_file-987525.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18646/ppb_image_file-987525_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18626,
   *       "ppb_product_id": 10631,
   *       "position": 3,
   *       "created_at": "2023-03-06T16:27:41.171+09:00",
   *       "updated_at": "2023-03-06T16:35:44.443+09:00",
   *       "alt": "thumb-03",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18626/ppb_image_file-1bef15.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18626/ppb_image_file-1bef15_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18627,
   *       "ppb_product_id": 10631,
   *       "position": 4,
   *       "created_at": "2023-03-06T16:27:41.851+09:00",
   *       "updated_at": "2023-03-06T16:35:44.464+09:00",
   *       "alt": "thumb-04",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18627/ppb_image_file-dfb81a.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18627/ppb_image_file-dfb81a_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18628,
   *       "ppb_product_id": 10631,
   *       "position": 5,
   *       "created_at": "2023-03-06T16:27:42.668+09:00",
   *       "updated_at": "2023-03-06T16:35:44.485+09:00",
   *       "alt": "thumb-05",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18628/ppb_image_file-0f6ab1.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18628/ppb_image_file-0f6ab1_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18629,
   *       "ppb_product_id": 10631,
   *       "position": 6,
   *       "created_at": "2023-03-06T16:27:43.361+09:00",
   *       "updated_at": "2023-03-06T16:35:44.509+09:00",
   *       "alt": "thumb-06",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18629/ppb_image_file-46481b.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18629/ppb_image_file-46481b_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18630,
   *       "ppb_product_id": 10631,
   *       "position": 7,
   *       "created_at": "2023-03-06T16:27:44.148+09:00",
   *       "updated_at": "2023-03-06T16:35:44.529+09:00",
   *       "alt": "thumb-07",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18630/ppb_image_file-34a4c9.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18630/ppb_image_file-34a4c9_size256.jpg",
   *       "overlays": []
   *     }
   *   ],
   *   "detail_image": {
   *     "id": 18733,
   *     "ppb_product_id": 10631,
   *     "position": 1,
   *     "created_at": "2023-03-07T08:50:37.577+09:00",
   *     "updated_at": "2023-03-07T08:50:37.577+09:00",
   *     "alt": "detail",
   *     "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18733/ppb_image_file-2905b2.gif",
   *     "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18733/ppb_image_file-2905b2_size256.gif",
   *     "overlays": []
   *   },
   *   "detail_images": [
   *     {
   *       "id": 18732,
   *       "ppb_product_id": 10631,
   *       "position": 1,
   *       "created_at": "2023-03-07T08:50:36.262+09:00",
   *       "updated_at": "2023-03-07T08:50:36.262+09:00",
   *       "alt": "detail-01",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18732/ppb_image_file-2905b2.gif",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18732/ppb_image_file-2905b2_size256.gif",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18734,
   *       "ppb_product_id": 10631,
   *       "position": 2,
   *       "created_at": "2023-03-07T08:50:38.165+09:00",
   *       "updated_at": "2023-03-07T08:50:38.165+09:00",
   *       "alt": "detail-02",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18734/ppb_image_file-0c5519.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18734/ppb_image_file-0c5519_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18735,
   *       "ppb_product_id": 10631,
   *       "position": 3,
   *       "created_at": "2023-03-07T08:50:38.800+09:00",
   *       "updated_at": "2023-03-07T08:50:38.800+09:00",
   *       "alt": "detail-03",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18735/ppb_image_file-f7885a.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18735/ppb_image_file-f7885a_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18736,
   *       "ppb_product_id": 10631,
   *       "position": 4,
   *       "created_at": "2023-03-07T08:50:40.761+09:00",
   *       "updated_at": "2023-03-07T08:50:40.761+09:00",
   *       "alt": "detail-04",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18736/ppb_image_file-95f08b.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18736/ppb_image_file-95f08b_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18737,
   *       "ppb_product_id": 10631,
   *       "position": 6,
   *       "created_at": "2023-03-07T08:50:48.031+09:00",
   *       "updated_at": "2023-03-07T08:50:48.031+09:00",
   *       "alt": "detail-06",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18737/ppb_image_file-48f596.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18737/ppb_image_file-48f596_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18738,
   *       "ppb_product_id": 10631,
   *       "position": 7,
   *       "created_at": "2023-03-07T08:50:48.569+09:00",
   *       "updated_at": "2023-03-07T08:50:48.569+09:00",
   *       "alt": "detail-07",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18738/ppb_image_file-9c60bb.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18738/ppb_image_file-9c60bb_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18739,
   *       "ppb_product_id": 10631,
   *       "position": 8,
   *       "created_at": "2023-03-07T08:51:12.814+09:00",
   *       "updated_at": "2023-03-07T08:51:12.814+09:00",
   *       "alt": "detail-08",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18739/ppb_image_file-f28959.gif",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18739/ppb_image_file-f28959_size256.gif",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18740,
   *       "ppb_product_id": 10631,
   *       "position": 9,
   *       "created_at": "2023-03-07T08:51:14.797+09:00",
   *       "updated_at": "2023-03-07T08:51:14.797+09:00",
   *       "alt": "detail-09",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18740/ppb_image_file-31b166.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18740/ppb_image_file-31b166_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18741,
   *       "ppb_product_id": 10631,
   *       "position": 10,
   *       "created_at": "2023-03-07T08:51:15.500+09:00",
   *       "updated_at": "2023-03-07T08:51:15.500+09:00",
   *       "alt": "detail-10",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18741/ppb_image_file-1d33f7.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18741/ppb_image_file-1d33f7_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18742,
   *       "ppb_product_id": 10631,
   *       "position": 11,
   *       "created_at": "2023-03-07T08:51:17.012+09:00",
   *       "updated_at": "2023-03-07T08:51:17.012+09:00",
   *       "alt": "detail-11",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18742/ppb_image_file-a3e3fc.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18742/ppb_image_file-a3e3fc_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18743,
   *       "ppb_product_id": 10631,
   *       "position": 12,
   *       "created_at": "2023-03-07T08:51:19.564+09:00",
   *       "updated_at": "2023-03-07T08:51:19.564+09:00",
   *       "alt": "detail-12",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18743/ppb_image_file-21b70a.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18743/ppb_image_file-21b70a_size256.jpg",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18744,
   *       "ppb_product_id": 10631,
   *       "position": 13,
   *       "created_at": "2023-03-07T08:51:46.152+09:00",
   *       "updated_at": "2023-03-07T08:51:46.152+09:00",
   *       "alt": "detail-13",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18744/ppb_image_file-156d7d.gif",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18744/ppb_image_file-156d7d_size256.gif",
   *       "overlays": []
   *     },
   *     {
   *       "id": 18745,
   *       "ppb_product_id": 10631,
   *       "position": 14,
   *       "created_at": "2023-03-07T08:51:47.236+09:00",
   *       "updated_at": "2023-03-07T08:51:47.236+09:00",
   *       "alt": "detail-14",
   *       "src": "https://cdn-dev.winc.app/uploads/ppb/image/src/18745/ppb_image_file-9b8537.jpg",
   *       "size256": "https://cdn-dev.winc.app/uploads/ppb/image/src/18745/ppb_image_file-9b8537_size256.jpg",
   *       "overlays": []
   *     }
   *   ],
   *   "url": "https://hapakristin.co.kr/products/h73833j2"
   * }
   */
  constructor(json:any) {
    this.json = json;
    this._variants = _.map(this.json.variants || [], (item) => {
      return new Variant(item);
    });
    this._images = _.map(this.json.images || [], (item) => {
      return new ProductImage(item);
    });
  }

  get id():number {
    return this.json.id;
  }

  get title():string {
    return this.json.title;
  }

  get handle():string {
    return this.json.handle;
  }

  get description():string {
    return this.json.description;
  }

  get images():ProductImage[] {
    return this._images;
  }

  get url():string {
    return this.json.url;
  }

  get variants():Variant[] {
    return this._variants;
  }

  compareAtPrice(packCount:number = 1, currency:string = 'krw') {
    const v0 = this.json.variants[0] || {};
    const price = v0[`compare_at_price_${currency}`] || v0[`price1_${currency}`];
    return price * packCount;
  }

  price(packCount:number = 1, currency:string = 'krw', priceGroupId:any = null) {
    const v0 = this.json.variants[0] || {};
    if (priceGroupId) {
      return 99999999999;
    } else {
      return v0[`price${packCount}_${currency}`] || v0[`price1_${currency}`] * packCount;
    }
  }
}

export class Products {
  private json:any;
  private _products:Product[];

  constructor(json:any) {
    this.json = json;
    this._products = _.map(this.json || [], (item) => {
      return new Product(item);
    });
  }

  get items(): Product[] {
    return this._products;
  }
}
