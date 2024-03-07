import React from "react";
import styled from "styled-components";

//props로 전달 받은 hight가 있을 경우 해당 값을 높이로 설정합니다.
const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

// 함수형 컴포넌트를 받고 height, value, 이벤트를 받습니다. 
function TextInput(props){
    const {height,value,onChange} = props;

    return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;