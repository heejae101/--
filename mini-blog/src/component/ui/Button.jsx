import React from "react";
import styled from "styled-components";

// styled-components 자바스크립트 파일 내에서 css스타일을 적용
const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;


// 함수형 컴포넌트 title과 onClick이라는 두개의 prop을 받습니다.
// title은 버튼에 표시될 텍스트 이며, onClick은 prop 버튼이 클릭되었을 때 실행될 함수입니다.
function Button(props){
    const {title, onClick} = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;