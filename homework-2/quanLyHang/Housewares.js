import { Goods } from './Goods.js';

export class Housewares extends Goods {
    discount = 10;
    constructor(id, name, price, manu, dateMod, reliability) {
        super(id, name, price, manu, dateMod);
        this.reliability = reliability;
    }
}