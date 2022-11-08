let name_input = document.getElementById("name_input");
let surname_input = document.getElementById("surname_input");
let email_input = document.getElementById("email_input");
let tickets_amount = document.getElementById("tickets_amount");
let discount_select = document.getElementById("discount_select");
let total_pay = document.getElementById("total_pay");

let total;
let error = 0;
let disc;

function discount(d,error){
    if (d === "student"){
        disc = 0.2;
    }
    else if (d === "trainee"){
        disc = 0.5;
    }
    else if (d === "junior"){
        disc = 0.85;
    }
    else if (d === "none"){
        disc = 1;
    }
    else {
        error = "No se ha ingresado categoría";
    }
}

function totalPay(amount){
    total = 200 * disc * amount;
    total_pay.innerHTML = `Total a pagar: $${total}`;
}

function summaryBtn() {
    let ticketsAmount = tickets_amount.value;
    let discountSelect = discount_select.value;
    discount(discountSelect,error);
    totalPay(ticketsAmount);
}

function deleteBtn(){
    name_input.value = "";
    surname_input.value = "";
    email_input.value = "";
    tickets_amount.value = "";
    discount_select.value = "";
    total_pay.innerHTML = `Total a pagar: $`;
}