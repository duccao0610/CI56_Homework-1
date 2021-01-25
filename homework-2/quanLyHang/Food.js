import { Goods } from './Goods.js';

export class Food extends Goods {
    discount = 2;
    constructor(id, name, price, manu, dateMod, flavor) {
        super(id, name, price, manu, dateMod);
        this.flavor = flavor;
    }
    static discountPer() {
        return this.discount;
    }
}