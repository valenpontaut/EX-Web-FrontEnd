let total_pay = document.getElementById("total_pay");
let tickets_amount = document.getElementById("tickets_amount");
let discount_select = document.getElementById("discount_select");

let total = 0
let error = 0
let disc

function discount(d,error){
    if (d === "student"){
        disc = 0.2;
        console.log(disc)
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
    console.log(disc)
    total = 200 * disc * amount;
    total_pay.innerHTML= `Total: $${total}`;
}

function summaryBtn() {
    let ticketsAmount = tickets_amount.value;
    let discountSelect = discount_select.value;
    console.log("lala")
    discount(discountSelect,error);
    totalPay(ticketsAmount);
}

function deleteBtn(){
    

}