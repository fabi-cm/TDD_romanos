function conversor(numero) {
    const valoresDecimales = [5, 4, 1];
    const valoresRomanos = ["V", "IV", "I"];

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