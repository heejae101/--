import React,{ useState } from "react";
import ConfirmButton from "./ConfirmButton";

function NewConfirmButton(props){
    const [isNewConfirmed, setisNewConfirmed] = useState(false);

    const handleConfirm = () => {
        setisNewConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isNewConfirmed}>
            {isNewConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default NewConfirmButton;