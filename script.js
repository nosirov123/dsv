const input = document.getElementById("input");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const darkColor = document.getElementById("darkColor");
const lightColor = document.getElementById("lightColor");

let qr;

function generateQR() {
    if (input.value.trim() === '') {
        alert("Iltimos manzil kiriting");
        return;
    }

    result.innerHTML = '';
    qr = new QRCode(result, {
        text: input.value,
        width: 300,
        height: 300,
        colorDark: darkColor.value,
        colorLight: lightColor.value,
    });
}

btn.addEventListener("click", generateQR);


[darkColor, lightColor].forEach(colorInput => {
    colorInput.addEventListener("input", () => {
        if (!qr) return;
        generateQR();
    });
});
