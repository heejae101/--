
// 온도 단위에 대한 정보를 가지는 객체를 선언합니다. 
const scaleNames = {
    c:"섭씨",
    f:"화씨",
};

// 사용자로 부터 입력받은 온도를 상위 컴포넌트에 전달하는 역할을 합니다.
function TemperatureInput(props) {

    // 온도 입력이 변경될 때 실행
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };
    
    // 랜더링 하는 부분 
    return (
        <fieldset>
            <legend>
                온도를 입력해 주세요(단위: {scaleNames[props.scale]});
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

// 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
export default TemperatureInput;