function convertTemperature(){

let temp = document.getElementById("temperature").value;
let unit = document.getElementById("unit").value;
let result = document.getElementById("result");

if(temp === "" || isNaN(temp)){
    result.innerHTML = "Please enter a valid number";
    return;
}

temp = parseFloat(temp);

let converted1;
let converted2;

if(unit === "celsius"){

    converted1 = (temp * 9/5) + 32;
    converted2 = temp + 273.15;

    result.innerHTML =
    temp + " °C = " +
    converted1.toFixed(2) + " °F <br> " +
    converted2.toFixed(2) + " K";

}

else if(unit === "fahrenheit"){

    converted1 = (temp - 32) * 5/9;
    converted2 = (temp - 32) * 5/9 + 273.15;

    result.innerHTML =
    temp + " °F = " +
    converted1.toFixed(2) + " °C <br> " +
    converted2.toFixed(2) + " K";

}

else if(unit === "kelvin"){

    converted1 = temp - 273.15;
    converted2 = (temp - 273.15) * 9/5 + 32;

    result.innerHTML =
    temp + " K = " +
    converted1.toFixed(2) + " °C <br> " +
    converted2.toFixed(2) + " °F";

}

}
