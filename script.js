/*
 CALCULADORA
*/

/*
_____________________________
|  _________________         |
| | JO           0. |        |
| |_________________|        |
|  ___ ___ ___   ___   ___   |
| | 7 | 8 | 9 | |add| |sub|  |
| |___|___|___| |___| |___|  |
| | 4 | 5 | 6 | |mult| |div| |
| |___|___|___| |___ | |___| |
| | 1 | 2 | 3 | |  clear   | |
| |___|___|___| |_________|  |
| |0  |dot|     | equals |   |
| |___|___|     |________|   |
|____________________________|
*/

function button0Action(){
    $('result').value += '0';
}

function button1Action(){
    $('result').value += '1';
}

function button2Action(){
    $('result').value += '2';
}

function button3Action(){
    $('result').value += '3'
}

function button4Action(){
    $('result').value += '4';
}

function button5Action(){
    $('result').value += '5';
}

function button6Action(){
    $('result').value += '6';
}

function button7Action(){
    $('result').value += '7';
}

function button8Action(){
    $('result').value += '8';
}

function button9Action(){
    $('result').value += '9';
}

function buttonAddAction(){
    $('result').value += " + ";
}

function buttonSubAction(){
    $('result').value += " - ";
}

function buttonMultAction(){
    $('result').value += " * ";
}

function buttonDivAction(){
    $('result').value += " /     ";
}

function buttonDotAction(){
    $('result').value += '.';
}

function buttonClearAction(){
    $('result').value = "";
}

function buttonEqualsAction(){
    try{
        $('result').value = eval($('result').value);
    }catch( e ){
        if(e instanceof SyntaxError){
            alert("Invalid Input!");
            $('result').value = "";
        }
    }
}






















/*
Products
*/

//Sol 1
function addProductsAction(){
    var row = $('productTable').insertRow();
    var productName = row.insertCell();
    var productPrice = row.insertCell();
    productName.innerHTML = $('productName').value;
    productPrice.innerHTML = $('productPrice').value + '€';
}






















//Sol 2

class Product{
    constructor(productName, productPrice){
        this.productName = productName;
        this.productPrice = productPrice;
    }
}

function addProductsAction(){
    product = new Product($('productName').value, $('productPrice').value);
    var row = $('productTable').insertRow();
    var productName = row.insertCell();
    var productPrice = row.insertCell();
    productName.innerHTML = product.productName;
    productPrice.innerHTML = product.productPrice + "€";
}

















//Sum Price

var products = [];

function addProductsAction(){
    if(isNaN($('productPrice').value))
        alert("Invalid Price!");
    else if($('productName').value == "")
        alert("Invalid name");
    else{
        product = new Product($('productName').value, $('productPrice').value);
        products.push(product);
        var row = $('productTable').insertRow();
        var productName = row.insertCell();
        var productPrice = row.insertCell();
        productName.innerHTML = product.productName;
        productPrice.innerHTML = product.productPrice + "€";
    }
}

function sumPriceAction(){
    var count = 0;
    for(var i = 0; i < products.length; i++)
        count += parseInt(products[i].productPrice);
    alert("Sum of Prices is " + count + "€");
}












/*
 FEATURES 
*/


















































var interval = null;

function darkMode(){
    if(document.body.style.backgroundColor == "black"){
        document.body.style.backgroundColor = "#e6fff7";
        document.body.style.color = "black";
    }else{
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white";
    }
}

function rainbowMode(){
    colors = ["red" , "blue" , "green", "black", "white", "yellow"];

    if(interval == null){
        interval = setInterval(function (){
            var color = colors.pop();
            document.body.style.backgroundColor = color;
            colors.unshift(color);
        }, 100);
    }else{
        clearInterval(interval);
        interval = null;
    }
}