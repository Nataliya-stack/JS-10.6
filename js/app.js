const INPUT = document.getElementById('input');
const RESULTADO = document.getElementById('resultado');

function result() {
    const originalString = INPUT.value;
    let revesString = "";

    for (let i = originalString.length - 1; i >= 0; i--) {
        revesString += originalString[i];
    }

    RESULTADO.textContent = revesString;

    INPUT.value = "";
    INPUT.focus();
}
