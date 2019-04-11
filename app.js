let convertFahrenheits = (fahren) => {
    let celsius = (fahren - 32) * 5 / 9
    let kelvin = (fahren + 459.67) * 5 / 9

    return {
        fahrenheitValue: fahren,
        celsiusValue: celsius,
        kelvinValue: kelvin, 
    }
}

console.log(convertFahrenheits(50))