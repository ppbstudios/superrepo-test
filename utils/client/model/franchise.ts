
class Franchise {
  private json:any;

  /**
   * @param json
   * example
   * {
   *     id: 5272,
   *     user_id: 191602,
   *     brn: '3031405653',
   *     files: [],
   *     store_name: '창원점(안경)',
   *     full_address: '경상남도 창원시 의창구 창원대로 111 홈플러스',
   *     full_address_lot: '경상남도 창원시 의창구 팔용동 11',
   *     zip: '51393',
   *     owner_name: '홍길동',
   *     phone1: '0552700000',
   *     phone2: '01096550000',
   *     province: '경상남도',
   *     city: '창원시',
   *     district: '창원',
   *     tags: [
   *       '팔용동',
   *       ' 창원 팔용동',
   *       ' 창원시 팔용동',
   *       ' 팔용',
   *       ' 창원 팔용',
   *       ' 홈플러스 창원점',
   *       ' 신창원역',
   *       ' 창원공업고등학교',
   *       ' 창원파티마병원',
   *       ' 창원종합버스터미널'
   *     ],
   *     lat: '35.23406',
   *     lng: '128.64363',
   *     google_url: 'https://goo.gl/maps/qsAHY2esaRCb43HD9',
   *     images: [],
   *     deleted_at: null,
   *     created_at: '2022-09-01T14:39:54.826+09:00',
   *     updated_at: '2023-06-21T17:11:08.764+09:00',
   *     approved: null,
   *     approved_at: null,
   *     denied_at: null,
   *     franchise_kind: 'ppb-franchise',
   *     is_postpaid: false,
   *     auto_accept: true,
   *     auto_accept_updated_at: '2022-09-13T01:27:15.736+00:00',
   *     send_alimtalk: true,
   *     has_change_request: false,
   *     change_requested_at: null,
   *     exposed: true,
   *     favorite_count: 22,
   *     is_unable: false,
   *     unavailable_reason: null,
   *     business_name: ' 렌즈맨 안경',
   *     type_of_business: '소매업',
   *     items_of_business: '안경',
   *     tax_email: 'example@nate.com',
   *     phone3: null,
   *     tax_invoice_requested: true,
   *     tax_invoice_requested_at: '2022-09-13T10:27:27.060+09:00',
   *     shipping_carrier: 'kr.epost',
   *     shipping_notice: null,
   *     store_hour_mon: '10:00-21:00',
   *     store_hour_tue: '10:00-21:00',
   *     store_hour_wed: '10:00-21:00',
   *     store_hour_thu: '10:00-21:00',
   *     store_hour_fri: '10:00-21:00',
   *     store_hour_sat: '10:00-21:00',
   *     store_hour_sun: '10:00-21:00',
   *     store_regular_off: '2, 4번째 일요일',
   *     store_holiday_off: '없음',
   *     store_holidays_off: '없음',
   *     store_payment_methods: [ 'kakao', 'samsung', 'zero' ],
   *     store_local_payments: [ '창원사랑상품권' ],
   *     store_parking_available: true,
   *     store_parking_notice: '마트 내 전 주차 지역 사용 가능. (5개층 사용) 안경원 2시간 무료.',
   *     store_notice: null,
   *     store_info_updated_at: null,
   *     store_info_updated_by: null,
   *     store_free_optometry: false,
   *     no_shipping_0: true,
   *     no_shipping_1: false,
   *     no_shipping_2: false,
   *     no_shipping_3: false,
   *     no_shipping_4: false,
   *     no_shipping_5: false,
   *     no_shipping_6: true,
   *     notice: null,
   *     store_todays_pickup: false,
   *     brand_ids: [],
   *     available_stock: false,
   *     available_pickup: true,
   *     okpos_store_code: null,
   *     okpos_is_open: null,
   *     okpos_brand_code: null,
   *     okpos_exposed: false
   *   },
   */
  constructor(json:any) {
    this.json = json;
  }

  get id() {
    return this.json.id;
  }

  get user_id() {
    return this.json.user_id;
  }

  get brn() {
    return this.json.brn;
  }

  get files() {
    return this.json.files;
  }

  get store_name() {
    return this.json.store_name;
  }

  get full_address() {
    return this.json.full_address;
  }

  get full_address_lot() {
    return this.json.full_address_lot;
  }

  get zip() {
    return this.json.zip;
  }

  get owner_name() {
    return this.json.owner_name;
  }

  get phone1() {
    return this.json.phone1;
  }

  get phone2() {
    return this.json.phone2;
  }

  get province() {
    return this.json.province;
  }

  get city() {
    return this.json.city;
  }

  get district() {
    return this.json.district;
  }

  get tags() {
    return this.json.tags;
  }

  get lat() {
    return this.json.lat;
  }

  get lng() {
    return this.json.lng;
  }

  get google_url() {
    return this.json.google_url;
  }

  get images() {
    return this.json.images;
  }

  get deleted_at() {
    return this.json.deleted_at;
  }

  get created_at() {
    return this.json.created_at;
  }

  get updated_at() {
    return this.json.updated_at;
  }

  get approved() {
    return this.json.approved;
  }

  get approved_at() {
    return this.json.approved_at;
  }

  get denied_at() {
    return this.json.denied_at;
  }

  get franchise_kind() {
    return this.json.franchise_kind;
  }

  get is_postpaid() {
    return this.json.is_postpaid;
  }

  get auto_accept() {
    return this.json.auto_accept;
  }

  get auto_accept_updated_at() {
    return this.json.auto_accept_updated_at;
  }

  get send_alimtalk() {
    return this.json.send_alimtalk;
  }

  get has_change_request() {
    return this.json.has_change_request;
  }

  get change_requested_at() {
    return this.json.change_requested_at;
  }

  get exposed() {
    return this.json.exposed;
  }

  get favorite_count() {
    return this.json.favorite_count;
  }
}

class Franchises {}