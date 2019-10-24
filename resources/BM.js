var active;
var currentContent;

function load() {
    this.active = $('home');
    this.currentContent = $('homeContent');
    this.currentContent.style.visibility = 'visible';
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