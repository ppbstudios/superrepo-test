export class Collection {
  private json: any;
  constructor(json:any) {
    this.json = json;
  }

  get title(): string {
    return this.json.title;
  }
}

export class Collections {
  private json: any;
  private _collections: any;

  constructor(json:any) {
    this.json = json;
    this._collections = this.json.map((item: any) => new Collection(item));
  }

  get items(): Collection[] {
    return this._collections;
  }
}