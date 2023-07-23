var totalInputs = document.querySelectorAll(".input").length;

function isEmpty(value){
    if (value===""){
        document.querySelector(".celsius").value = "";
        document.querySelector(".kelvin").value = "";
    }
}

function farenhite(value){
    isEmpty(value);
    value = +value;
    console.log("Temperature in Farenhite is : " + value);

    var temperatureCelsius = (value-32) * 5/9;
    document.querySelector(".celsius").value = temperatureCelsius;
    console.log("Temperature in Degree Celsius is : " + temperatureCelsius);

    var temperatureKelvin = (value-32) * 5/9 + 273.15;
    document.querySelector(".kelvin").value = temperatureKelvin;
    console.log("Temperature in Kelvin is : " + temperatureKelvin);
}

function celsius(value){
    value = +value;
    console.log("Temperature in Degree Celsius is : " + value);

    var temperatureFarenhite = (value * 9/5) + 32;
    document.querySelector(".farenhite").value = temperatureFarenhite;
    console.log("Temperature in Farenhite is : " + temperatureFarenhite);

    var temperatureKelvin = value + 273.15;
    document.querySelector(".kelvin").value = temperatureKelvin;
    console.log("Temperature in Kelvin is : " + temperatureKelvin);
}

function kelvin(value){
    value = +value;
    console.log("Temperature in Kelvin is : " + value);

    var temperatureFarenhite = (value - 273.15) * 9/5 + 32;
    document.querySelector(".farenhite").value = temperatureFarenhite;
    console.log("Temperature in Farenhite is : " + temperatureFarenhite);

    var temperatureCelsius = value - 273.15;
    document.querySelector(".celsius").value = temperatureCelsius;
    console.log("Temperature in Degree Celsius is : " + temperatureCelsius);    
}

for(var i=0; i<totalInputs; i++){
    document.querySelectorAll(".input")[i].addEventListener("input",function(){
        var temperatureUnit = this.classList[0];
        
        if (temperatureUnit === "farenhite"){
            var value = this.value;
            farenhite(value);
        }
        else if(temperatureUnit === "celsius"){
            var value = this.value;
            celsius(value);
        }
        else{
            var value = this.value;
            kelvin(value);
            
        }
    });
}
