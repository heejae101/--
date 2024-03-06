import { useState } from "react";

function Calculator(props){
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = ((temperature) => {
        setTemperature(temperature);
        setScale('c');
    })

    const handleFahenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요:</legend>
            <input
                value={temperature}
                onChange={handleChange} />
            <BoilingVerdict 
                celsius={parseFloat(temperature)} />
        </fieldset>
    )
}