import { Goods } from './Goods.js';
import { Housewares } from './Housewares.js';
import { Clothes } from './Clothes.js';
import { Food } from './Food.js';
import { Manager } from './Manager.js';

let manager = new Manager("hung");

$("#goodsType").change(function () {
    $(".addition").attr("type", "hidden");
    $(".submitting").removeAttr("disabled");
    $(".submitting").val("");

    if ($("#goodsType").val() == "Housewares") {
        $(".housewares").attr("type", "text");
        $("#discount").val(10).prop("disabled", true);
    }
    else if ($("#goodsType").val() == "Clothes") {
        $(".clothes").attr("type", "text");
        $("#discount").val(5).prop("disabled", true);
    }
    else if ($("#goodsType").val() == "Food") {
        $(".food").attr("type", "text");
        $("#discount").val(2).prop("disabled", true);
    }
})

$("#submitBtn").click(function () {
    let newItem;
    if ($("#goodsType").val() == "Goods") {
        newItem = new Goods($("#id").val(), $("#name").val(), $("#price").val(), $("#manu").val(), $("#discount").val(), $("#dateMod").val());
    }
    if ($("#goodsType").val() == "Housewares") {
        newItem = new Housewares($("#id").val(), $("#name").val(), $("#price").val(), $("#manu").val(), $("#dateMod").val(), $("#reliability").val());
    }
    if ($("#goodsType").val() == "Clothes") {
        newItem = new Clothes($("#id").val(), $("#name").val(), $("#price").val(), $("#manu").val(), $("#dateMod").val(), $("#origin").val(), $("#material").val());
    }
    if ($("#goodsType").val() == "Food") {
        newItem = new Food($("#id").val(), $("#name").val(), $("#price").val(), $("#manu").val(), $("#dateMod").val(), $("#flavor").val());
    }
    manager.allItems.push(newItem);
    $(".submitting:not(#discount)").val("");
    console.log(manager.allItems);
})

$("#sellBtn").click(function () {
    manager.sell($("#sellId").val());
    $("#rev").html(`Doanh thu: ${manager.rev()}`);
})