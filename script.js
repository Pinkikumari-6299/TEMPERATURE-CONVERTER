function convertTemp() {
    const tempInput = document.getElementById("inputTemp").value;
    const unit = document.getElementById("inputUnit").value;
    const result = document.getElementById("result");

    // Validation
    if (tempInput === "" || isNaN(tempInput)) {
        result.innerHTML = "⚠️ Please enter a valid temperature value";
        return;
    }

    const temp = parseFloat(tempInput);
    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {
        celsius = temp;
        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;
    }
    else if (unit === "fahrenheit") {
        celsius = (temp - 32) * 5 / 9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
    }
    else if (unit === "kelvin") {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    result.innerHTML = `
        🌡️ Celsius: ${celsius.toFixed(2)} °C <br>
        🔥 Fahrenheit: ${fahrenheit.toFixed(2)} °F <br>
        ❄️ Kelvin: ${kelvin.toFixed(2)} K
    `;
}
