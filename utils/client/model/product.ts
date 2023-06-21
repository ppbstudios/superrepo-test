import { typeProduct } from '~/utils/client/types/product';
import _ from 'lodash';
import api from '~/utils/client/api';
import { JsonProduct } from '~/utils/client/types/product';

export class Product {
  constructor(private json: JsonProduct) {
    this.json = json;
  }

  get isFavorite(): boolean {
    // GlobalData.isFavoriteProduct(this.json['id'])  일단 주석
    return true;
  }
  get id(): number {
    return this.json.id;
  }
  // int get price => variants?.items?.first?.price ?? 420 * 1000;
  // get priceGroup => parsePrice(myPriceGroup.byId(id)) ?? price;
  // int get compareAtPrice => variants.items.first.compareAtPrice;
  get handle(): string {
    return this.json.handle;
  }

  get diaInner() {
    return this.json['dia_inner'] || 0.0;
  }
  get diaOuter() {
    return this.json['dia_outer'] || 0.0;
  }
  get water() {
    return this.json['water'];
  }

  get baseCurve() {
    return this.json['base_curve'];
  }
  //
  get material() {
    return this.json['material'];
  }
  //
  get lensCount() {
    return this.json['lens_count'];
  }

  get variants(){
  //   return new Variants(
  //       product: this,
  //       jsonArray: this.json['variants']
  // );
    return ;
  }

  //   Options get options => Options(json['options']);
  //
  //   get options1 => json['variants'].map((v) => v['option1']).toList(); // ETC 상품. 렌즈상품의 powers 대신에 사용
  //
  //   get powers => json['variants'].map((v) => v['option2']).toList();
  //
  get images() {
    return this.json['images'] ?? [];
  }
  //
  get imagesSrc() {
    return this.json['images'].map((v) => v['src']);
  }
  //
  get ppbBrandId() {
    return this.json['ppb_brand_id'];
  }
  //
  get image() {
    return this.json['image'];
  }
  //
  get imageSrc() {
    return this.json['image']['src'];
  }
  //
  get thumbnail() {
    if (this.json['image']) {
      const image = this.json['image'];
      if (image['size256']) {
        return image['size256'];
      }
      if (image['src']) {
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
      this.images.forEach((image) => {
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
  get thumbnailVideo() {
    return this.json['thumbnail_video'] ?? '';
  }

  get detailVideo() {
    return this.json['detail_video'] ?? '';
  }
  //
  get detailImagesSrc() {
    return this.json['detail_images']
      .map((v) => {
        if (v['src'] ?? false) return v['src'];
        return '';
      })
      .filter((v) => v !== null && v !== '');
    // .where((src) => src != null && src != '') // 빈 값이거나 null 일 경우 이미지 보여주지 않음
  }

  //
  get title() {
    return this.json['title'];
  }
  //

  //
  get status() {
    return this.json['status'];
  }
  //
  get storeId() {
    return this.json['store_id'];
  }
  //
  // String get brandName => myBrands.byStoreId(storeId)?.brandName ?? '';
  //
  get lensPatternImage() {
    return this.json['lens_pattern_image'];
  }
  //
  get color() {
    return this.json['color'];
  }
  //
  get favoriteCount() {
    return this.json['favorite_count'];
  }
  //
  get productType() {
    return this.json['product_type'];
  }
  //
  get reviewNumber() {
    return this.json['product_type'];
  }
  //
  get reviewPoint() {
    return parseFloat(this.json['review_point']);
  }
  //
  get reviewCount() {
    return this.json['review_count'];
  }
  //
  get extra() {
    return this.json['extra'];
  }
  //
  get tags() {
    return this.json['tags'];
  }
  //
  get collectionIds() {
    return this.json['collection_ids'].slice();
  }
  //
  get orderCount() {
    return this.json['order_count'];
  }
  //
  get url() {
    return this.json['url'] ?? '';
  }

  // isDiscount() {
  //   return compareAtPrice > priceGroup;
  // }
  //
  // Future<void> refresh() async {
  //   var res = await client.getProductById(id);
  //   if (res != null) {
  //     json = res.data;
  //   }
  // }
  //
  toString() {
    return this.json.toString();
  }
  //
  // String getPriceDiscountPercent() => _getDiscountPercent(
  //     originPrice: compareAtPrice,
  //     discountPrice: price,
  // );
  //
  // String getPriceGroupDiscountPercent() => _getDiscountPercent(
  //     originPrice: compareAtPrice,
  //     discountPrice: priceGroup,
  // );
  //
  // String _getDiscountPercent({
  //   @required originPrice,
  //   @required discountPrice,
  // }) {
  //   var discountPercent = (originPrice - discountPrice) / originPrice;
  //   discountPercent = discountPercent * 100;
  //   return discountPercent.toStringAsFixed(0);
  // }
  //
  // /// default: 9876543210원
  // String getPriceWithUnit() => formatPrice(price);
  //
  // /// default: 9876543210원 (same as price)
  // String getPriceGroupWithUnit() => formatPrice(priceGroup);
  //
  // String getImageEye() {
  //   if (imagesSrc != null && imagesSrc.length >= 2) {
  //     return imagesSrc[1];
  //   } else {
  //     return imageSrc;
  //   }
  // }
  //
  isActive() {
    return this.status === 'active';
  }
  //
  isOutOfStock() {
    return this.status === 'out_of_stock';
  }
  isDraft() {
    return this.status === 'draft';
  }
  //
  isLens() {
    this.productType == '1 month' || this.json['product_type'] == '1 day';
  }
  //
  isEtc() {
    return this.productType == 'ETC';
  }
  //
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
  //
  getColorKr() {
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

interface ProductsHash {
  [key: string]: Product;
}
export class Products {
  private json: JsonProduct[];
  private products: Product[];
  private _productsById: ProductsHash;
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

  // getter 함수의 경우 파라미터를 받을 수 없음. (캐싱때문인거같음)
  byId(id: number) {
    const product = this._productsById[id];

    if (product) {
      return product;
    } else {
      const newProduct = api.products.byId(id);
      return newProduct;
    }
  }
  set setProduct(product: Product) {
    this._productsById[product.id] = product;
  }

  byHandle(handle: string) {
    _.find(this.products, (p) => {
      return p.handle === handle;
    });
    return '';
  }
}
