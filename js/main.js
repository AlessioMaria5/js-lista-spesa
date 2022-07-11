let spesa = ["Uova", "Fiori", "Detersivo", "Pesce", "Candele Profumate", "Pentola"];

let listaSpesa = document.getElementById('lista-spesa');

let x = 0;

while ( x < spesa.length) {

    listaSpesa.innerHTML += `<li>${spesa[x]}</li>`
    x++
}



