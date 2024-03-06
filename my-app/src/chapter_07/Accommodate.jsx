import React, {useState, useEffect} from "react";
import useCount from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props){
    // isFull이라는 상태와 상태변경할 수 있는 함수 초기값 false 
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCount(0);

    // 랜더링이 끝나고 나서 해야하는 작업들
    useEffect(() => {
        console.log("=======================");
        console.log("useEffect() is called.");
        console.log(`isFull : ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value : ${count}`);
    },[count]);

    return(
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{color: "red"}}>정원이 가능찼습니다.</p>}
        </div>
    );
}

export default Accommodate;