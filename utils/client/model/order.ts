export class Order {
  private json: any;

  /**
   * @param json
   * {
   *   "id": 548085,
   *   "app_key": "winc",
   *   "channel_id": 82,
   *   "store_id": null,
   *   "created_at": "2023-06-14T16:23:41.004+09:00",
   *   "updated_at": "2023-06-14T16:25:09.713+09:00",
   *   "shopify_name": null,
   *   "ppb_name": "WD05531451",
   *   "ppb_price_total_krw": "18000.0",
   *   "ppb_price_cancel_refund_krw": "0.0",
   *   "ppb_price_discounts_krw": "0.0",
   *   "ppb_price_sales_krw": "18000.0",
   *   "ppb_price_vat_krw": "0.0",
   *   "ppb_price_net_sales_krw": "18000.0",
   *   "ppb_price_total": "18000.0",
   *   "ppb_price_cancel_refund": "0.0",
   *   "ppb_price_discounts": "0.0",
   *   "ppb_price_sales": "18000.0",
   *   "ppb_price_vat": "0.0",
   *   "ppb_price_net_sales": "18000.0",
   *   "total_tax": "0.0",
   *   "taxes_included": true,
   *   "ppb_franchise_id": 7949,
   *   "token_customer": "VzuFtFt8Fxg",
   *   "token_franchise": "8vI6TQBmDXs",
   *   "status_customer": "accepted",
   *   "status_franchise": "sold",
   *   "status_shipping": "pending",
   *   "status_ppb": "pending",
   *   "status_customer_updated_at": "2023-06-14T16:23:41.004+09:00",
   *   "status_franchise_updated_at": "2023-06-14T16:25:09.350+09:00",
   *   "status_ppb_updated_at": null,
   *   "status_shipping_updated_at": null,
   *   "status_shipping_return": "pending",
   *   "status_shipping_return_updated_at": null,
   *   "status_shipping_re": "pending",
   *   "status_shipping_re_updated_at": null,
   *
   *   "status_logs": {
   *     "status_customer": [
   *       {
   *         "status": "accepted",
   *         "updated_at": "2023-06-14T07:23:41.004+00:00"
   *       }
   *     ],
   *     "status_okpos": [
   *       {
   *         "status": "create",
   *         "updated_at": "2023-06-14T07:23:42.690+00:00"
   *       },
   *       {
   *         "status": "receipt",
   *         "updated_at": "2023-06-14T07:23:51.225+00:00"
   *       },
   *       {
   *         "status": "pickup",
   *         "updated_at": "2023-06-14T07:25:04.365+00:00"
   *       },
   *       {
   *         "status": "completed",
   *         "updated_at": "2023-06-14T07:25:09.713+00:00"
   *       }
   *     ],
   *     "status_franchise": [
   *       {
   *         "status": "accepted",
   *         "updated_at": "2023-06-14T07:23:50.855+00:00"
   *       },
   *       {
   *         "status": "sold",
   *         "updated_at": "2023-06-14T07:25:09.350+00:00"
   *       }
   *     ]
   *   },
   *
   *   "ppb_reviews": [],
   *   "delivered_at": null,
   *   "customer_phone": "010-3114-4569",
   *   "customer_name": " 홍",
   *   "accepted_by": "okpos",
   *   "shipping_carrier": null,
   *   "shipping_carrier_re": null,
   *   "tracking_number": "",
   *   "tracking_number_re": "",
   *   "tracking_url": null,
   *   "tracking_url_re": null,
   *   "status": "픽업 완료",
   *   "status_re": "해당사항 없음",
   *   "ppb_coupon_id": null,
   *   "order_discount_price": "0.0",
   *   "deep_link": "https://winc.page.link/gbMfyaEaErvQRtPRA",
   *   "due_date": null,
   *   "gift_products": [],
   *   "gift_products_ex": [],
   *   "noshow_reason": null,
   *   "noshowed_at": null,
   *   "currency": "krw",
   *   "fxrate": "1.0",
   *   "order_type": "stock-pickup",
   *   "customer_country": null,
   *   "customer_state": null,
   *   "customer_address1": null,
   *   "customer_address2": null,
   *   "customer_zip": null,
   *   "customer_city": null,
   *   "status_hapaus": "Paid",
   *   "status_stock_pickup": "픽업 완료",
   *   "review_point": null,
   *   "review_comment": null,
   *   "review_updated_at": null,
   *
   *   "line_items": [
   *     {
   *       "ppb_brand_id": 34,
   *       "ppb_product_id": 9342,
   *       "ppb_coupon_id": null,
   *       "variant_id": 934223,
   *       "quantity": 1,
   *       "pack_count": 1,
   *       "price": "8500.0",
   *       "name": "크리스틴 클리어 - clear / -7.50 ",
   *       "sku": "H68485J1S24C",
   *       "title": "크리스틴 클리어",
   *       "discounted_price": 0,
   *       "total_discount": 0,
   *       "variant_title": "clear / -7.50 ",
   *       "vendor": "Interojo",
   *       "handle": "h68485j1",
   *       "bogo_type": null,
   *       "left_right": null,
   *       "order_discount_fraction": 0,
   *       "franchise_price": 6800,
   *       "package_image": "https://cdn-dev.winc.app/uploads/ppb/image/src/11340/ppb_image_file-44a3fd.jpg",
   *       "url": "https://shop.winc.app/products/h68485j1"
   *     },
   *     {
   *       "ppb_brand_id": 34,
   *       "ppb_product_id": 9237,
   *       "ppb_coupon_id": null,
   *       "variant_id": 923717,
   *       "quantity": 1,
   *       "pack_count": 1,
   *       "price": "9500.0",
   *       "name": "원앤온리 크리스틴 원데이 그레이 - gray / -4.75 ",
   *       "sku": "H71895J1S18C",
   *       "title": "원앤온리 크리스틴 원데이 그레이",
   *       "discounted_price": 0,
   *       "total_discount": 0,
   *       "variant_title": "gray / -4.75 ",
   *       "vendor": "VisionScience",
   *       "handle": "h71893j1",
   *       "bogo_type": null,
   *       "left_right": null,
   *       "order_discount_fraction": 0,
   *       "franchise_price": 7600,
   *       "package_image": "https://cdn-dev.winc.app/uploads/ppb/image/src/10177/ppb_image_file-3c9e53.jpg",
   *       "url": "https://shop.winc.app/products/h71893j1"
   *     }
   *   ],
   *
   *   "returned_line_items": [],
   *
   *   "ppb_franchise": {
   *     "id": 7949,
   *     "user_id": 320241,
   *     "brn": "12345608",
   *     "files": [],
   *     "store_name": "윙크 테스트매장(픽업불가입니다)",
   *     "full_address": "서울 강남구 선릉로 428, 14층",
   *     "full_address_lot": null,
   *     "zip": "04779",
   *     "owner_name": "박수인",
   *     "phone1": "0100000000",
   *     "phone2": "01048604542",
   *     "province": "서울특별시",
   *     "city": "서울",
   *     "district": "강남구",
   *     "tags": [
   *       "테스트"
   *     ],
   *     "lat": "37.5032951",
   *     "lng": "127.0476383",
   *     "google_url": "https://goo.gl/maps/x8M2yoKp5oqYFXmX9",
   *     "images": [],
   *     "deleted_at": null,
   *     "created_at": "2023-03-07T15:11:07.362+09:00",
   *     "updated_at": "2023-06-14T16:19:20.545+09:00",
   *     "approved": true,
   *     "approved_at": null,
   *     "denied_at": null,
   *     "franchise_kind": "ppb-test",
   *     "is_postpaid": true,
   *     "auto_accept": false,
   *     "auto_accept_updated_at": null,
   *     "send_alimtalk": false,
   *     "has_change_request": false,
   *     "change_requested_at": null,
   *     "exposed": true,
   *     "favorite_count": 54,
   *     "is_unable": false,
   *     "unavailable_reason": null,
   *     "business_name": null,
   *     "type_of_business": null,
   *     "items_of_business": null,
   *     "tax_email": null,
   *     "phone3": null,
   *     "tax_invoice_requested": true,
   *     "tax_invoice_requested_at": null,
   *     "shipping_carrier": "etc",
   *     "shipping_notice": null,
   *     "store_hour_mon": "06:00 ~ 06:10",
   *     "store_hour_tue": "픽업불가",
   *     "store_hour_wed": "픽업불가",
   *     "store_hour_thu": "픽업불가",
   *     "store_hour_fri": "픽업불가",
   *     "store_hour_sat": "픽업불가",
   *     "store_hour_sun": "픽업불가",
   *     "store_regular_off": null,
   *     "store_holiday_off": null,
   *     "store_holidays_off": null,
   *     "store_payment_methods": [],
   *     "store_local_payments": [],
   *     "store_parking_available": false,
   *     "store_parking_notice": null,
   *     "store_notice": null,
   *     "store_info_updated_at": null,
   *     "store_info_updated_by": null,
   *     "store_free_optometry": false,
   *     "no_shipping_0": true,
   *     "no_shipping_1": false,
   *     "no_shipping_2": false,
   *     "no_shipping_3": false,
   *     "no_shipping_4": false,
   *     "no_shipping_5": false,
   *     "no_shipping_6": true,
   *     "notice": null,
   *     "store_todays_pickup": false,
   *     "brand_ids": [],
   *     "available_stock": true,
   *     "available_pickup": true,
   *     "okpos_store_code": "7949",
   *     "okpos_is_open": true,
   *     "okpos_brand_code": "WNK-WINC",
   *     "okpos_exposed": true
   *   }
   * }
   */

  constructor(json:any) {
    this.json = json;
  }

  get id():number {
    return this.json.id;
  }

  get app_key():string {
    return this.json.app_key;
  }

  get channel_id() {
    return this.json.channel_id;
  }

  get store_id() {
    return this.json.store_id;
  }

  get created_at() {
    return this.json.created_at;
  }

  get updated_at() {
    return this.json.updated_at;
  }

  get shopify_name() {
    return this.json.shopify_name;
  }

  get ppb_name() {
    return this.json.ppb_name;
  }

  get ppb_price_total_krw() {
    return this.json.ppb_price_total_krw;
  }

  get ppb_price_cancel_refund_krw() {
    return this.json.ppb_price_cancel_refund_krw;
  }

  get ppb_price_discounts_krw() {
    return this.json.ppb_price_discounts_krw;
  }

  get ppb_price_sales_krw() {
    return this.json.ppb_price_sales_krw;
  }

  get ppb_price_vat_krw() {
    return this.json.ppb_price_vat_krw;
  }

  get ppb_price_net_sales_krw() {
    return this.json.ppb_price_net_sales_krw;
  }

  get ppb_price_total() {
    return this.json.ppb_price_total;
  }

  get ppb_price_cancel_refund() {
    return this.json.ppb_price_cancel_refund;
  }

  get ppb_price_discounts() {
    return this.json.ppb_price_discounts;
  }

  get ppb_price_sales() {
    return this.json.ppb_price_sales;
  }

  get ppb_price_vat() {
    return this.json.ppb_price_vat;
  }

  get ppb_price_net_sales() {
    return this.json.ppb_price_net_sales;
  }

  get total_tax() {
    return this.json.total_tax;
  }

  get taxes_included() {
    return this.json.taxes_included;
  }

  get ppb_franchise_id() {
    return this.json.ppb_franchise_id;
  }

  get token_customer() {
    return this.json.token_customer;
  }

  get token_franchise() {
    return this.json.token_franchise;
  }

  get status_customer() {
    return this.json.status_customer;
  }

  get status_franchise() {
    return this.json.status_franchise;
  }

  get status_shipping() {
    return this.json.status_shipping;
  }

  get status_ppb() {
    return this.json.status_ppb;
  }

  get status_customer_updated_at() {
    return this.json.status_customer_updated_at;
  }

  get status_franchise_updated_at() {
    return this.json.status_franchise_updated_at;
  }

  get status_ppb_updated_at() {
    return this.json.status_ppb_updated_at;
  }

  get status_shipping_updated_at() {
    return this.json.status_shipping_updated_at;
  }

  get status_shipping_return() {
    return this.json.status_shipping_return;
  }

  get status_shipping_return_updated_at() {
    return this.json.status_shipping_return_updated_at;
  }

  get status_shipping_re() {
    return this.json.status_shipping_re;
  }

  get status_shipping_re_updated_at() {
    return this.json.status_shipping_re_updated_at;
  }

  get status_logs() {
    return this.json.status_logs;
  }

  get ppb_reviews() {
    return this.json.ppb_reviews;
  }

  get delivered_at() {
    return this.json.delivered_at;
  }

  get customer_phone() {
    return this.json.customer_phone;
  }

  get icustomer_named() {
    return this.json.customer_name;
  }

  get accepted_by() {
    return this.json.accepted_by;
  }

  get shipping_carrier() {
    return this.json.shipping_carrier;
  }

  get shipping_carrier_re() {
    return this.json.shipping_carrier_re;
  }

  get tracking_number() {
    return this.json.tracking_number;
  }

  get tracking_number_re() {
    return this.json.tracking_number_re;
  }

  get tracking_url() {
    return this.json.tracking_url;
  }

  get tracking_url_re() {
    return this.json.tracking_url_re;
  }

  get status() {
    return this.json.status;
  }

  get status_re() {
    return this.json.status_re;
  }

  get ppb_coupon_id() {
    return this.json.ppb_coupon_id;
  }

  get order_discount_price() {
    return this.json.order_discount_price;
  }

  get deep_link() {
    return this.json.deep_link;
  }

  get due_date() {
    return this.json.due_date;
  }

  get gift_products() {
    return this.json.gift_products;
  }

  get gift_products_ex() {
    return this.json.gift_products_ex;
  }

  get noshow_reason() {
    return this.json.noshow_reason;
  }

  get noshowed_at() {
    return this.json.noshowed_at;
  }

  get currency() {
    return this.json.currency;
  }

  get fxrate() {
    return this.json.fxrate;
  }

  get order_type() {
    return this.json.order_type;
  }

  get customer_country() {
    return this.json.customer_country;
  }

  get customer_state() {
    return this.json.customer_state;
  }

  get customer_address1() {
    return this.json.customer_address1;
  }

  get customer_address2() {
    return this.json.customer_address2;
  }

  get customer_zip() {
    return this.json.customer_zip;
  }

  get customer_city() {
    return this.json.customer_city;
  }

  get status_hapaus() {
    return this.json.status_hapaus;
  }

  get status_stock_pickup() {
    return this.json.status_stock_pickup;
  }

  get review_point() {
    return this.json.review_point;
  }

  get review_comment() {
    return this.json.review_comment;
  }

  get review_updated_at() {
    return this.json.review_updated_at;
  }

  get line_items() {
    return this.json.line_items;
  }

  get returned_line_items() {
    return this.json.returned_line_items;
  }

  get ppb_franchise() {
    return this.json.ppb_franchise;
  }

}

export class Orders {
  private json: any;

  /**
   * @param json
   * 2
   *
   * {
   *   "id": 547226,
   *   "app_key": "winc",
   *   "channel_id": 82,
   *   "store_id": null,
   *   "created_at": "2023-06-09T10:18:36.977+09:00",
   *   "updated_at": "2023-06-09T10:20:31.430+09:00",
   *   "shopify_name": null,
   *   "ppb_name": "WD09947051",
   *   "ppb_price_total_krw": "15000.0",
   *   "ppb_price_cancel_refund_krw": "15000.0",
   *   "ppb_price_discounts_krw": "0.0",
   *   "ppb_price_sales_krw": "0.0",
   *   "ppb_price_vat_krw": "0.0",
   *   "ppb_price_net_sales_krw": "0.0",
   *   "ppb_price_total": "15000.0",
   *   "ppb_price_cancel_refund": "15000.0",
   *   "ppb_price_discounts": "0.0",
   *   "ppb_price_sales": "0.0",
   *   "ppb_price_vat": "0.0",
   *   "ppb_price_net_sales": "0.0",
   *   "total_tax": "0.0",
   *   "taxes_included": true,
   *   "ppb_franchise_id": 7949,
   *   "token_customer": "Tm3ET9Ja8a0",
   *   "token_franchise": "kPGdud5AnNs",
   *   "status_customer": "accepted",
   *   "status_franchise": "denied",
   *   "status_shipping": "pending",
   *   "status_ppb": "pending",
   *   "status_customer_updated_at": "2023-06-09T10:18:36.977+09:00",
   *   "status_franchise_updated_at": "2023-06-09T10:20:30.598+09:00",
   *   "status_ppb_updated_at": null,
   *   "status_shipping_updated_at": null,
   *   "status_shipping_return": "pending",
   *   "status_shipping_return_updated_at": null,
   *   "status_shipping_re": "pending",
   *   "status_shipping_re_updated_at": null,
   *
   *   "status_logs": {
   *     "status_customer": [
   *       {
   *         "status": "accepted",
   *         "updated_at": "2023-06-09T01:18:36.977+00:00"
   *       }
   *     ],
   *     "status_okpos": [
   *       {
   *         "status": "create",
   *         "updated_at": "2023-06-09T01:18:39.466+00:00"
   *       },
   *       {
   *         "status": "receipt",
   *         "updated_at": "2023-06-09T01:19:12.195+00:00"
   *       },
   *       {
   *         "status": "completed",
   *         "updated_at": "2023-06-09T01:19:33.194+00:00"
   *       },
   *       {
   *         "status": "pickup",
   *         "updated_at": "2023-06-09T01:20:04.445+00:00"
   *       },
   *       {
   *         "status": "cancel",
   *         "updated_at": "2023-06-09T01:20:31.429+00:00"
   *       }
   *     ],
   *     "status_franchise": [
   *       {
   *         "status": "accepted",
   *         "updated_at": "2023-06-09T01:19:11.239+00:00"
   *       },
   *       {
   *         "status": "sold",
   *         "updated_at": "2023-06-09T01:19:32.453+00:00"
   *       },
   *       {
   *         "status": "denied",
   *         "updated_at": "2023-06-09T01:20:30.598+00:00"
   *       }
   *     ]
   *   },
   *   "ppb_reviews": [],
   *   "delivered_at": null,
   *   "customer_phone": "010-2549-8640",
   *   "customer_name": "한*련",
   *   "accepted_by": "okpos",
   *   "shipping_carrier": null,
   *   "shipping_carrier_re": null,
   *   "tracking_number": "",
   *   "tracking_number_re": "",
   *   "tracking_url": null,
   *   "tracking_url_re": null,
   *   "status": "예약 불가",
   *   "status_re": "해당사항 없음",
   *   "ppb_coupon_id": null,
   *   "order_discount_price": "0.0",
   *   "deep_link": "https://winc.page.link/YWs16KpVLNYXe1RF8",
   *   "due_date": null,
   *   "gift_products": [],
   *   "gift_products_ex": [],
   *   "noshow_reason": null,
   *   "noshowed_at": null,
   *   "currency": "krw",
   *   "fxrate": "1.0",
   *   "order_type": "stock-pickup",
   *   "customer_country": null,
   *   "customer_state": null,
   *   "customer_address1": null,
   *   "customer_address2": null,
   *   "customer_zip": null,
   *   "customer_city": null,
   *   "status_hapaus": "Refunded",
   *   "status_stock_pickup": "취소 완료",
   *   "review_point": null,
   *   "review_comment": null,
   *   "review_updated_at": null,
   *   "line_items": [
   *     {
   *       "ppb_brand_id": 34,
   *       "ppb_product_id": 9440,
   *       "ppb_coupon_id": null,
   *       "variant_id": 944011,
   *       "quantity": 1,
   *       "pack_count": 1,
   *       "price": "15000.0",
   *       "name": "듀이 크리스틴 - brown / -3.25 ",
   *       "sku": "H71754J1S12C",
   *       "title": "듀이 크리스틴",
   *       "discounted_price": 0,
   *       "total_discount": 0,
   *       "variant_title": "brown / -3.25 ",
   *       "vendor": "Medios",
   *       "handle": "h71754j1",
   *       "bogo_type": null,
   *       "left_right": null,
   *       "order_discount_fraction": 0,
   *       "franchise_price": 12000,
   *       "package_image": "https://cdn-dev.winc.app/uploads/ppb/image/src/11622/ppb_image_file-644d1e.jpg",
   *       "url": "https://shop.winc.app/products/h71754j1"
   *     }
   *   ],
   *   "returned_line_items": [],
   *   "ppb_franchise": {
   *     "id": 7949,
   *     "user_id": 320241,
   *     "brn": "12345608",
   *     "files": [],
   *     "store_name": "윙크 테스트매장(픽업불가입니다)",
   *     "full_address": "서울 강남구 선릉로 428, 14층",
   *     "full_address_lot": null,
   *     "zip": "04779",
   *     "owner_name": "박수인",
   *     "phone1": "0100000000",
   *     "phone2": "01048604542",
   *     "province": "서울특별시",
   *     "city": "서울",
   *     "district": "강남구",
   *     "tags": [
   *       "테스트"
   *     ],
   *     "lat": "37.5032951",
   *     "lng": "127.0476383",
   *     "google_url": "https://goo.gl/maps/x8M2yoKp5oqYFXmX9",
   *     "images": [],
   *     "deleted_at": null,
   *     "created_at": "2023-03-07T15:11:07.362+09:00",
   *     "updated_at": "2023-06-14T16:19:20.545+09:00",
   *     "approved": true,
   *     "approved_at": null,
   *     "denied_at": null,
   *     "franchise_kind": "ppb-test",
   *     "is_postpaid": true,
   *     "auto_accept": false,
   *     "auto_accept_updated_at": null,
   *     "send_alimtalk": false,
   *     "has_change_request": false,
   *     "change_requested_at": null,
   *     "exposed": true,
   *     "favorite_count": 54,
   *     "is_unable": false,
   *     "unavailable_reason": null,
   *     "business_name": null,
   *     "type_of_business": null,
   *     "items_of_business": null,
   *     "tax_email": null,
   *     "phone3": null,
   *     "tax_invoice_requested": true,
   *     "tax_invoice_requested_at": null,
   *     "shipping_carrier": "etc",
   *     "shipping_notice": null,
   *     "store_hour_mon": "06:00 ~ 06:10",
   *     "store_hour_tue": "픽업불가",
   *     "store_hour_wed": "픽업불가",
   *     "store_hour_thu": "픽업불가",
   *     "store_hour_fri": "픽업불가",
   *     "store_hour_sat": "픽업불가",
   *     "store_hour_sun": "픽업불가",
   *     "store_regular_off": null,
   *     "store_holiday_off": null,
   *     "store_holidays_off": null,
   *     "store_payment_methods": [],
   *     "store_local_payments": [],
   *     "store_parking_available": false,
   *     "store_parking_notice": null,
   *     "store_notice": null,
   *     "store_info_updated_at": null,
   *     "store_info_updated_by": null,
   *     "store_free_optometry": false,
   *     "no_shipping_0": true,
   *     "no_shipping_1": false,
   *     "no_shipping_2": false,
   *     "no_shipping_3": false,
   *     "no_shipping_4": false,
   *     "no_shipping_5": false,
   *     "no_shipping_6": true,
   *     "notice": null,
   *     "store_todays_pickup": false,
   *     "brand_ids": [],
   *     "available_stock": true,
   *     "available_pickup": true,
   *     "okpos_store_code": "7949",
   *     "okpos_is_open": true,
   *     "okpos_brand_code": "WNK-WINC",
   *     "okpos_exposed": true
   *   }
   * }
   */

  constructor(json:any) {
    this.json = json;
  }

  get id() {
    return this.json.id;
  }

  get app_key() {
    return this.json.app_key;
  }

  get channel_id() {
    return this.json.channel_id;
  }

  get store_id() {
    return this.json.store_id;
  }

  get created_at() {
    return this.json.created_at;
  }

  get updated_at() {
    return this.json.updated_at;
  }

  get shopify_name() {
    return this.json.shopify_name;
  }

  get ppb_name() {
    return this.json.ppb_name;
  }

  get ppb_price_total_krw() {
    return this.json.ppb_price_total_krw;
  }

  get ppb_price_cancel_refund_krw() {
    return this.json.ppb_price_cancel_refund_krw;
  }

  get ppb_price_discounts_krw() {
    return this.json.ppb_price_discounts_krw;
  }

  get ppb_price_sales_krw() {
    return this.json.ppb_price_sales_krw;
  }

  get ppb_price_vat_krw() {
    return this.json.ppb_price_vat_krw;
  }

  get ppb_price_net_sales_krw() {
    return this.json.ppb_price_net_sales_krw;
  }

  get ppb_price_total() {
    return this.json.ppb_price_total;
  }

  get ppb_price_cancel_refund() {
    return this.json.ppb_price_cancel_refund;
  }

  get ppb_price_discounts() {
    return this.json.ppb_price_discounts;
  }

  get ppb_price_sales() {
    return this.json.ppb_price_sales;
  }

  get ppb_price_vat() {
    return this.json.ppb_price_vat;
  }

  get ppb_price_net_sales() {
    return this.json.ppb_price_net_sales;
  }

  get total_tax() {
    return this.json.total_tax;
  }

  get taxes_included() {
    return this.json.taxes_included;
  }

  get ppb_franchise_id() {
    return this.json.ppb_franchise_id;
  }

  get token_customer() {
    return this.json.token_customer;
  }

  get token_franchise() {
    return this.json.token_franchise;
  }

  get status_customer() {
    return this.json.status_customer;
  }

  get status_franchise() {
    return this.json.status_franchise;
  }

  get status_shipping() {
    return this.json.status_shipping;
  }

  get status_ppb() {
    return this.json.status_ppb;
  }

  get status_customer_updated_at() {
    return this.json.status_customer_updated_at;
  }

  get status_franchise_updated_at() {
    return this.json.status_franchise_updated_at;
  }

  get status_ppb_updated_at() {
    return this.json.status_ppb_updated_at;
  }

  get status_shipping_updated_at() {
    return this.json.status_shipping_updated_at;
  }

  get status_shipping_return() {
    return this.json.status_shipping_return;
  }

  get status_shipping_return_updated_at() {
    return this.json.status_shipping_return_updated_at;
  }

  get status_shipping_re() {
    return this.json.status_shipping_re;
  }

  get status_shipping_re_updated_at() {
    return this.json.status_shipping_re_updated_at;
  }

  get status_logs() {
    return this.json.status_logs;
  }

  get ppb_reviews() {
    return this.json.ppb_reviews;
  }

  get delivered_at() {
    return this.json.delivered_at;
  }

  get customer_phone() {
    return this.json.customer_phone;
  }

  get customer_name() {
    return this.json.customer_name;
  }

  get accepted_by() {
    return this.json.accepted_by;
  }

  get shipping_carrier() {
    return this.json.shipping_carrier;
  }

  get shipping_carrier_re() {
    return this.json.shipping_carrier_re;
  }

  get tracking_number() {
    return this.json.tracking_number;
  }

  get tracking_number_re() {
    return this.json.tracking_number_re;
  }

  get tracking_url() {
    return this.json.tracking_url;
  }

  get tracking_url_re() {
    return this.json.tracking_url_re;
  }

  get status() {
    return this.json.status;
  }

  get status_re() {
    return this.json.status_re;
  }

  get ppb_coupon_id() {
    return this.json.ppb_coupon_id;
  }

  get order_discount_price() {
    return this.json.order_discount_price;
  }

  get deep_link() {
    return this.json.deep_link;
  }

  get due_date() {
    return this.json.due_date;
  }

  get gift_products() {
    return this.json.gift_products;
  }

  get gift_products_ex() {
    return this.json.gift_products_ex;
  }

  get noshow_reason() {
    return this.json.noshow_reason;
  }

  get noshowed_at() {
    return this.json.noshowed_at;
  }

  get currency() {
    return this.json.currency;
  }

  get fxrate() {
    return this.json.fxrate;
  }

  get order_type() {
    return this.json.order_type;
  }

  get customer_country() {
    return this.json.customer_country;
  }

  get customer_state() {
    return this.json.customer_state;
  }

  get customer_address1() {
    return this.json.customer_address1;
  }

  get customer_address2() {
    return this.json.customer_address2;
  }

  get customer_zip() {
    return this.json.customer_zip;
  }

  get customer_city() {
    return this.json.customer_city;
  }

  get status_hapaus() {
    return this.json.status_hapaus;
  }

  get status_stock_pickup() {
    return this.json.status_stock_pickup;
  }

  get review_point() {
    return this.json.review_point;
  }

  get review_comment() {
    return this.json.review_comment;
  }

  get review_updated_at() {
    return this.json.review_updated_at;
  }

  get line_items() {
    return this.json.line_items;
  }

  get returned_line_items() {
    return this.json.returned_line_items;
  }

  get ppb_franchise() {
    return this.json.ppb_franchise;
  }

}