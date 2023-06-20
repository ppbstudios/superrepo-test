import typeProduct from '~/utils/client/types/product';
import _ from 'lodash';
import api from '~/utils/client/api';

export class Product {
  constructor(private json: typeProduct) {
    this.json = json;
  }

  get id(): number {
    return this.json.id;
  }

  get handle(): string {
    return this.json.handle;
  }

  get diaInner(): number {
    return this.json['dia_inner'] || 0.0;
  }
}

export class Products {
  private json: any[];
  private products: Product[];

  constructor(json: typeProduct[]) {
    this.json = json;
    this.products = [];
    _.each(this.json, (item) => {
      this.products.push(new Product(item));
    });
  }

  // getter 함수의 경우 파라미터를 받을 수 없음. (캐싱때문인거같음)
  byId(id: number) {
    const product = _.find(this.products, (p) => {
      return p.id === id;
    });

    if (product) {
      return product;
    } else {
      const newProduct = api.products.byId(id);
      return newProduct;
    }
  }

  byHandle(handle: string) {
    _.find(this.products, (p) => {
      return p.handle === handle;
    });
    return '';
  }
}
