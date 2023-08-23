function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const resultElement = document.getElementById("result");

    let convertedTemp;
    let unitTo;

    if (unitFrom === "celsius") {
        convertedTemp = (inputTemp * 9/5) + 32;
        unitTo = "Fahrenheit";
    } else {
        convertedTemp = (inputTemp - 32) * 5/9;
        unitTo = "Celsius";
    }

    resultElement.innerText = `${inputTemp} ${unitFrom} is equal to ${convertedTemp.toFixed(2)} ${unitTo}.`;
}
