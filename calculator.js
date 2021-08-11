"use strict";

var bill = document.getElementById('bill');
var nPeople = document.getElementById("nPeople");

var customTip = document.getElementById("customTip")

var tipAmount = document.getElementById("tipAmount");
var total = document.getElementById("total");

bill.addEventListener('change', check);
nPeople.addEventListener('change', check);
customTip.addEventListener('change', tipSelector);
tipAmount.addEventListener('change', check);
total.addEventListener('change', check);

function tipSelector(tip){
    if (typeof(tip) == "object") {
        selectTip = parseInt(customTip.value);
    }else{
        customTip.value = null;
        selectTip = tip;
    }
    console.log(selectTip);
}

function check() {
    console.log(selectTip);
}