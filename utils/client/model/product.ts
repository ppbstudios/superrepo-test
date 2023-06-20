import typeProduct from "~/utils/client/types/product";
import _ from "lodash";
import api from "~/utils/client/api";

export class Product {
  private json:typeProduct;

  constructor(json: typeProduct) {
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
  // private json:any[];
  // private products:Product[];

  constructor(json:Product[]) {
    // this.json = json;
    // _.each(this.json, (item) => {
    //   this.products.push(new Product(item));
    // });
  }

  // get byId (id:number)  {
  //   const product = _.find(this.products, (p) => {
  //     return p.id === id;
  //   });
  //
  //   if (product) {
  //     return product;
  //   } else {
  //     const newProduct = api.products.byId(id);
  //     return newProduct;
  //   }
  // }
  //
  // get byHandle(handle:string)  {
  //    _.find(this.products, (p) => {
  //     return p.handle === handle;
  //   });
  // }
}
