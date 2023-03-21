function conversor(numero) {
    const valoresDecimales = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const valoresRomanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let romano = "";

    for (let i = 0; i < valoresDecimales.length; i++) {
        while (numero >= valoresDecimales[i]) {
            romano += valoresRomanos[i];
            numero -= valoresDecimales[i];
        }
    }

    return romano;
}

export default conversor;