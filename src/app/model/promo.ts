import {Image} from "./image";

export class Promo {

  constructor(public product: String, public shop: String, public newPrice: number,
              public oldPrice: number, public currency: String,
              public endDate: String, public images?: Image[], public id?: number){

  }

}
