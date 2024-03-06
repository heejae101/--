import React, { useState } from "react";

function useCount(initialValue){
    // count라는 상태와 setCount라는 상태를 변경할 수 있는 함수 
    // 초기 값으로 initialValue를 받는다.
    const [count, setCount] = useState(initialValue);

    // increaseCount 는 1을 추가 
    const increaseCount = () => setCount((count) => count + 1);
    // decresaseCount 는 -1을 빼고 Math.max로 큰값을 반환
    const decreaseCount = () => setCount((count) => Math.max(count -1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCount;