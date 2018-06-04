var lettersEn = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersEnCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersFi = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"];
var lettersFiCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Å", "Ä", "Ö"];
var lettersDe = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ä", "ö", "ü", "ß"];
var lettersDeCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Ä", "Ö", "Ü", "ß"];
var currencys = ["¤","؋","a","r","₿","฿","b","/",".","b","r","b","s",".","b","s",".","f",".","g","h","₵","¢","c","c","h",".","₡","c","$","d","ð","д","е","н","د","ج",".","د",".","ب","د",".","ع","j","d","د",".","ك","ل",".","د","д","и","н","د",".","ت","د",".","م",".","د",".","إ","d","b","$","₫","e","s","c","€","ƒ","f","t","f","b","u","f","c","f","a","c","f","a","f","r","f","r","w","g","g","r","₲","h","₴","₭","k","č","k","r","k","n","m","k","z","k","k","z","k","l","l","e","л","в",".","e","l","p","m","k","m","m","t","₥","n","f","k","₦","n","u",".","u","m","t","$","m","o","p","$","₱","p","t","£","l","l","l","s","p","q","q","r","r","$","ر",".","ع",".","ر",".","ق","ر",".","س","ر",".","ي","៛","r","m","p","₽","r","f",".","₹","₨","s","r","e","r","p","₪","t","s","h","k","s","h","s","h",".","s","o",".","u","s","h","s","/","s","d","r","с","о","м","৳","w","s","$","₮","v","t","₩","¥","z","ł"];
var lettersEnAll = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersFiAll = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Å", "Ä", "Ö"];
var lettersDeAll = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ä", "ö", "ü", "ß", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Ä", "Ö", "Ü", "ß"];














makeArray("", true, false)

function makeArray(text, isArray, toUpper) {
    text = text.split(", ").join("")
    text = text.split(" ").join("");

    if (toUpper === true) {
        text = text.toUpperCase(text)
    } else {
        text = text.toLowerCase(text)
    }

    if (isArray === true) {
        finalText = `["${text.split("").join('","')}"]`
    } else {
        finalText = `"${text.split("").join('","')}"`
    }
    console.log(finalText)
}




/* Script for taking data from wikipedia tables
document.getElementById('footer-info-lastmod').innerHTML = "";
for (i=0; i <= document.getElementsByClassName('wikitable sortable jquery-tablesorter')["0"].children[1].children.length -1; i++ ){
console.log(document.getElementsByClassName('wikitable sortable jquery-tablesorter')["0"].children[1].children[i].children["0"].innerText)
var finalResult = document.getElementsByClassName('wikitable sortable jquery-tablesorter')["0"].children[1].children[i].children["0"].innerText + "    "
document.getElementById('footer-info-lastmod').innerHTML += finalResult;
}
*/
