const titulo = document.getElementById("#title");

function digitacao(texto, contador) {
if(contador < texto.length) {
    setTimeout(() => {
title.textContent += texto.charAt(contador);
contador++;
digitacao(texto, contador);
    }, 90)
}
}
digitacao("Oasis pastelaria e caldo de cana!", 0)