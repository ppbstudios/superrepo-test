import _ from 'lodash';
import api from '~/utils/client/api';
import { JsonProduct, Image, Color } from '~/utils/client/types/product';
import { Variants } from './variant';

export class Product {
  private json: JsonProduct;
  constructor(json: JsonProduct) {
    this.json = json;
  }

  get isFavorite() {
    // GlobalData.isFavoriteProduct(this.json['id'])  일단 주석
    return true;
  }
  get id(): number {
    return this.json.id;
  }

  get price(): number {
    return this.variants?.items[0]?.price ?? 420 * 1000;
  }

  // get priceGroup(){
  //myPriceGroup 찾아서 적용해야함.
  // return parsePrice(myPriceGroup.byId(id)) ?? price;
  // }

  get compareAtPrice(): number {
    return this.variants.items[0]?.compareAtPrice;
  }

  get handle(): string {
    return this.json.handle;
  }

  get diaInner(): number {
    return this.json['dia_inner'] || 0.0;
  }
  get diaOuter(): number {
    return this.json['dia_outer'] || 0.0;
  }
  get water(): number {
    return this.json['water'];
  }

  get baseCurve(): number {
    return this.json['base_curve'];
  }
  //
  get material(): string {
    return this.json['material'];
  }
  //
  get lensCount(): number {
    return this.json['lens_count'];
  }

  get variants(): Variants {
    return Variants.getVariantsInstance(this, this.json['variants']);
    // return new Variants(this, this.json['variants']);
  }

  // Options get options => Options(json['options']);
  //
  get options1(): string[] {
    return this.json['variants'].map((v) => v['option1']); // ETC 상품. 렌즈상품의 powers 대신에 사용
  }
  get powers(): string[] {
    return this.json['variants'].map((v) => v['option2']);
  }
  get images(): Image[] {
    return this.json['images'] ?? [];
  }
  //
  get imagesSrc(): string[] {
    return this.json['images'].map((v) => v['src']);
  }
  //
  get ppbBrandId(): number {
    return this.json['ppb_brand_id'];
  }
  //
  get image(): Image {
    return this.json['image'];
  }
  //
  get imageSrc(): string {
    return this.json['image']['src'];
  }
  //
  get thumbnail(): string {
    if (this.json.hasOwnProperty('image')) {
      const image = this.json['image'];
      if (image.hasOwnProperty('size256')) {
        return image['size256'];
      }
      if (image.hasOwnProperty('src')) {
        return image['src'];
      }
    }
    return '';
  }
  //
  get thumbnailsWithOverlays() {
    const detailThumbnails = [];

    if (!_.isEmpty(this.thumbnailVideo)) {
      detailThumbnails.push({ src: this.thumbnailVideo });
    }

    if (!_.isEmpty(this.images)) {
      _.each(this.images, (image) => {
        detailThumbnails.push({
          src: image['src'],
          overlays: image['overlays'] ?? [],
        });
      });
    }
    return detailThumbnails;
  }
  //
  //   // 영상 링크 테스트
  //   // get thumbnailVideo => 'https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4';
  //   // 짧은 영상
  //
  //   // get detailVideo => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  //   // 긴 영상
  //
  //   // get detailVideo => 'https://cdn-dev.winc.app/uploads/ppb/file/file/109/video_example_MP4_1920_18MG_30s-d7a3de.mp4';
  //   // cdn 영문 파일 명 18MB 1920x1080 30s MP4
  //
  //   // get detailVideo => 'https://cdn-dev.winc.app/uploads/ppb/file/file/110/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF_video_example_MP4_1920_18MG_30s-d7a3de.mp4';
  //   // cdn 한글 파일 명 18MB 1920x1080 30s MP4
  //
  get thumbnailVideo(): string {
    return this.json['thumbnail_video'] ?? '';
  }

  get detailVideo(): string {
    return this.json['detail_video'] ?? '';
  }
  //
  get detailImagesSrc(): string[] {
    return this.json['detail_images']
      .map((v) => {
        if (v['src'] ?? false) return v['src'];
        return '';
      })
      .filter((v) => v !== null && v !== '');
  }

  //
  get title(): string {
    return this.json['title'];
  }
  //

  //
  get status(): string {
    return this.json['status'];
  }
  //
  get storeId(): string {
    return this.json['store_id'];
  }
  //
  // 마이브랜드 없음
  // String get brandName => myBrands.byStoreId(storeId)?.brandName ?? '';
  //
  get lensPatternImage(): string {
    return this.json['lens_pattern_image'];
  }
  //
  get color(): Color {
    return this.json['color'];
  }
  //
  get favoriteCount(): number {
    return this.json['favorite_count'];
  }
  //
  get productType(): string {
    return this.json['product_type'];
  }
  //
  get reviewNumber(): string {
    return this.json['product_type'];
  }
  //
  get reviewPoint(): number {
    return parseFloat(this.json['review_point']);
  }
  //
  get reviewCount(): number {
    return this.json['review_count'];
  }
  //
  get extra() {
    return this.json['extra'];
  }
  //
  get tags(): string[] {
    return this.json['tags'];
  }
  //
  get collectionIds(): number[] {
    return this.json['collection_ids'].slice();
  }
  //
  get orderCount(): number {
    return this.json['order_count'];
  }
  //
  get url(): string {
    return this.json['url'] ?? '';
  }

  // 프라이스그룹 없음
  // isDiscount() {
  //   return compareAtPrice > priceGroup;
  // }

  /// api 로직인거같음
  // async refresh() {
  //   const res = await client.getProductById(this.id);
  //   if (res != null) {
  //     this.json = res.data;
  //   }
  // }

  toString(): string {
    return this.json.toString();
  }
  //

  get getPriceDiscountPercent(): string {
    return this._getDiscountPercent(this.compareAtPrice, this.price);
  }

  // getPriceGroupDiscountPercent(){
  //
  // }
  //
  // String  => _getDiscountPercent(
  //     originPrice: compareAtPrice,
  //     discountPrice: priceGroup,
  // );
  //
  _getDiscountPercent(originPrice: number, discountPrice: number): string {
    var discountPercent = (originPrice - discountPrice) / originPrice;
    discountPercent = discountPercent * 100;

    return discountPercent.toFixed(0);
  }
  //
  // /// default: 9876543210원
  // String getPriceWithUnit() => formatPrice(price);
  //
  // /// default: 9876543210원 (same as price)
  // String getPriceGroupWithUnit() => formatPrice(priceGroup);
  //
  get getImageEye(): string {
    if (this.imagesSrc != null && this.imagesSrc.length >= 2) {
      return this.imagesSrc[1];
    } else {
      return this.imageSrc;
    }
  }
  //
  isActive(): boolean {
    return this.status === 'active';
  }
  //
  isOutOfStock(): boolean {
    return this.status === 'out_of_stock';
  }
  isDraft(): boolean {
    return this.status === 'draft';
  }
  isLens(): boolean {
    return (
      this.productType === '1 month' || this.json['product_type'] === '1 day'
    );
  }
  isEtc(): boolean {
    return this.productType == 'ETC';
  }
  getLensType() {
    switch (this.productType) {
      case '1 month':
        return '한달용';
      case '1 day':
        return '하루용';
      case 'ETC':
        return '액세서리';
      default:
        return '';
    }
  }
  getColorKr(): string {
    const _allColors = {
      black: '블랙',
      clear: '투명',
      brown: '브라운',
      green: '그린',
      blue: '블루',
      gray: '그레이',
      purple: '퍼플',
      pink: '핑크',
      twotone: '투톤',
      solid: '기타',
    };

    return _allColors[this.color] ?? '컬러';
  }
  //
  // /// 동일 컬러 상품 리스트 반환 (순서 랜덤)
  // getColorProducts() {
  //   List<Product> colorProductList = [];
  //
  //   if (color != null) {
  //     myProducts.items.forEach((Product product) {
  //       if (product.isActive() && product.color == color) {
  //         colorProductList.add(product);
  //       }
  //     });
  //   }
  //
  //   return colorProductList..shuffle();
  // }
  //
  // /// 동일 도수 상품 리스트 반환 (순서 랜덤)
  // getDiaInnerProducts() {
  //   List<Product> diaInnerProductList = [];
  //
  //   if (diaInner != null) {
  //     myProducts.items.forEach((Product product) {
  //       if (product.isActive() && product.diaInner == diaInner) {
  //         diaInnerProductList.add(product);
  //       }
  //     });
  //   }
  //
  //   return diaInnerProductList..shuffle();
  // }
  //
  // /// 동일 브랜드 상품 리스트 판매순 정렬 반환
  // getBrandProductsOrderByOrderCount({@required storeId}) {
  //   List<Product> products = [];
  //
  //   for (var collectionItem in myCollections.getCollectsByStoreIdHandle(storeId, 'all')) {
  //     products.add(myProducts.byId(collectionItem['product_id']));
  //
  //     products.sort((a, b) => b.orderCount.compareTo(a.orderCount));
  //   }
  //
  //   return products;
  // }
  //
  // /// 악세사리 상품 리스트 반환
  // getAccProducts() {
  //   List<Product> products = [];
  //   final collections = myCollections.byStoreIdHandle('winc', 'acc');
  //
  //   for (var collectionItem in collections.collects) {
  //     products.add(myProducts.byId(collectionItem['product_id']));
  //   }
  //
  //   return products;
  // }
}

export class Products {
  private json: JsonProduct[];
  private products: Product[];
  private _productsById: Hash<Product>;
  constructor(json: JsonProduct[]) {
    this.json = json;
    this.products = [];
    this._productsById = {};
    _.each(this.json, (item) => {
      const p = new Product(item);
      this.products.push(p);
      this._productsById[p.id] = p;
    });
  }

  byId(id: number) {
    return this._productsById[id];
  }
  set setProduct(product: Product) {
    this._productsById[product.id] = product;
  }

  // byHandle(handle: string) {
  //   _.find(this.products, (p) => {
  //     return p.handle === handle;
  //   });
  //   return '';
  // }
}
