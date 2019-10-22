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
function $(el){
    return document.getElementById(el);
}






























/*
 FEATURES 
*/


















































var interval = null;

function darkMode(){
    document.body.style.backgroundColor = "black"
}

function rainbowMode(){
    colors = ["red" , "blue" , "green", "black", "white", "yellow"];

    if(interval == null){
        interval = setInterval(function (){
            var color = colors.pop();
            document.body.style.backgroundColor = color;
            colors.unshift(color);
        }, 1000);
    }else{
        clearInterval(interval);
        interval = null;
    }
}