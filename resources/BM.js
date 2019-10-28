var active;
var currentContent;

window.onload = function () {
    this.active = $('home');
    this.currentContent = $('homeContent');
    this.currentContent.style.visibility = 'visible';
    $('button1').onclick = button1Action;
    $('button2').onclick = button2Action;
    $('button3').onclick = button3Action;
    $('button4').onclick = button4Action;
    $('button0').onclick = button0Action;   
    $('button5').onclick = button5Action;
    $('button6').onclick = button6Action;
    $('button7').onclick = button7Action;
    $('button8').onclick = button8Action;
    $('button9').onclick = button9Action;
    $('buttonAdd').onclick = buttonAddAction;
    $('buttonSub').onclick = buttonSubAction;
    $('buttonMult').onclick = buttonMultAction;
    $('buttonDiv').onclick = buttonDivAction;
    $('buttonClear').onclick = buttonClearAction;
    $('buttonDot').onclick = buttonDotAction;
    $('buttonEquals').onclick = buttonEqualsAction;
    $('productButton').onclick = addProductsAction;
    $('sumPriceButton').onclick = sumPriceAction;
    $('specialButton').onclick = specialAction;
}

function $(x) {
    return document.getElementById(x);
}

function navClick(id) {
    var clicked = $(id);

    active.classList.remove('active');

    clicked.classList.add("active")
    currentContent.style.visibility = 'hidden';
    switch (clicked.id) {
        case 'home':
            currentContent = $('homeContent');
            active = $('home');
            break;
        case 'products':
            currentContent = $('productsContent');
            active = $('products');
            break;
        case 'calculator':
            currentContent = $('calculatorContent');
            active = $('calculator');
    }

    currentContent.style.visibility = 'visible';
}