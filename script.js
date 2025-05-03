function converterTemperatura() {
    const celsius = document.getElementById('celsiusInput').value;

    if (celsius === "") {
        alert("Digite uma temperatura!");
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = parseFloat(celsius) + 273.15;

    const resultado = `
      <p><strong>${celsius}°C</strong> equivalem a:</p>
      <p>${fahrenheit.toFixed(2)}°F (Fahrenheit)</p>
      <p>${kelvin.toFixed(2)}K (Kelvin)</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}