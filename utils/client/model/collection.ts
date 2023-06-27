export class Collection {
  private json: any;
  constructor(json: any) {
    this.json = json;
  }

  get id(): number {
    return this.json.number;
  }
  get title(): string {
    return this.json.title;
  }
  get handle(): string {
    return this.json.handle;
  }
  get storeId(): string {
    return this.json.store_id;
  }
  get tags(): [] {
    return this.json.tags ?? [];
  }
  get images(): [] {
    return this.json.images ?? [];
  }
  get collects(): [] {
    return this.json.collects ?? [];
  }
}

export class Collections {
  private json: any;
  private _collections: any = [];
  private _collectionsById: any = {};

  constructor(json: any) {
    this.json = json;
    for (const collection of this.json) {
      const c = new Collection(collection);
      this._collections.push(c);
      this._collectionsById[collection.id] = c;
    }
  }

  byId(id: number) {
    return this._collectionsById.id;
  }

  byStoreIdHandle(storeId: string, handle: string) {
    return this._collections.find((e: any) => {
      return e.storeId === storeId && e.handle === handle;
    });
  }

  getCollectsByStoreIdHandle(storeId: string, handle: string) {
    return this.byStoreIdHandle(storeId, handle)?.collects ?? [];
    //체이닝 연산자 때문에 버그 날 경우 아래코드 적용
    // const result = this.byStoreIdHandle(storeId, handle);
    // if(result.hansOwnProperty('collects')){
    //   return result
    // } else {
    //   return []
    // }
  }

  get items(): Collection[] {
    return this._collections;
  }
}
