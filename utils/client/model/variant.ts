import _ from 'lodash';
import api from '~/utils/client/api';
import { typeVariant } from '~/utils/client/types/variant';
import { Product } from '~/utils/client/model/product';
//

export class Variant {
  constructor() {}
}

// class Variant extends BaseModel {
//   Variant({
//             @required jsonObject,
//             @required this.product,
//           }) {
//     json = jsonObject;
//   }
//
//   final Product product;
//   int get id => json['id'];
//   String get title => json['title'] ?? '';
//   int get price => price1; // 1팩 가격
//   int get price1 => parsePrice(json['price1_krw'] ?? 9876543210); // 1팩 가격
//   int get price2 => parsePrice(json['price2_krw'] ?? 9876543210); // 2팩 가격
//   int get price3 => parsePrice(json['price3_krw'] ?? 9876543210); // 3팩 가격
//   int get price4 => parsePrice(json['price4_krw'] ?? 9876543210); // 4팩 가격
//   int get price5 => parsePrice(json['price5_krw'] ?? 9876543210); // 5팩 가격
//   String get sku => json['sku'] ?? '';
//   int get position => json['position'];
//   int get compareAtPrice => parsePrice(json['compare_at_price_krw'] ?? 9876543210);
//
//   String get option => product.isLens() ? json['option2'] : json['option1'];
//   String get option1 => json['option1'] ?? '';
//   String get option2 => json['option2'] ?? '';
//   String get option3 => json['option3'] ?? '';
//   String get option4 => json['option4'] ?? '';
//
//   int get barcode => json['barcode'] ?? '';
//   int get inventoryQuantity => json['inventory_quantity'] ?? -1;
// }

export class Variants {
  private product: Product;
  constructor(product: Product, jsonArray: any) {
    this.product = product;
  }
}
// class Variants extends BaseModel {
//   final Product product;
//   List<Variant> _variants = [];
//   Map<int, Variant> _variantsById = {};
//
//   Variants({
//              @required this.product,
//              jsonArray,
//            }) {
//     if (jsonArray is Variants) {
//       // logger.d("already product type");
//       json = jsonArray.json;
//     } else if (jsonArray != null) {
//       json = jsonArray;
//     }
//   }
//
//   set json(jsonArray) {
//     super.json = jsonArray;
//     json.forEach((variantJson) {
//       Variant variant = Variant(
//           product: product,
//           jsonObject: variantJson,
//     );
//       _variants.add(variant);
//       _variantsById[variant.id] = variant;
//     });
//   }
//
//   List<Variant> get items => _variants;
//
//   List<int> get ids => _variantsById.keys.toList();
//
//   Variant byId(variantsId) => _variantsById[variantsId];
//
//   void add(Variant variant) {
//   _variants.add(variant);
//   _variantsById[variant.id] = variant;
// }
//
// void addAll(List<Variant> variants) {
//   _variants.addAll(variants);
//   variants.forEach((element) {
//     _variantsById[element.id] = element;
//   });
// }
//
// /// 옵션값(option1~4)을 매칭해서 일치하는 variant list 를 반환
// ///
// /// [option1] : lens: color 색상, etc: option 옵션
// ///
// /// [option2] : sph 근시도수
// ///
// /// [option3] : cyl 난시도수
// ///
// /// [option4] : axis 축
// Variants getVariantsByOptions({option1, option2, option3, option4}) {
//   List<Variant> filtered = [];
//
//   for (var v in items) {
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
//     filtered.add(v);
//   }
//   final res = Variants(product: product);
//   res.addAll(filtered);
//   return res;
// }
