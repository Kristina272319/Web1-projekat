// Kreiranje dugmeta za uklanjanje stavke sa liste i njegovo dodavanje u element stavke iz liste
var mojaLista = document.getElementsByTagName("li");
var i;

for (i = 0; i < mojaLista.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);
    mojaLista[i].appendChild(span)
}

/* Uklanjenje odabrane stavke sa liste nakon klika na istu */
var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var li = this.parentElement;
        li.style.display = "none";
    }
}


/* Dodavanje kukice kada se klikne na element iz liste */
var lista = document.querySelector("ul");

lista.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

/* Kreiranje novog elementa u listi */
function dodajStavku() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("Mora postojati tekst u polju za unos!")
    } else {
        document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt)
    li.appendChild(span)

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}