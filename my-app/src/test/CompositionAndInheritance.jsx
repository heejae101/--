import { useState } from "react";

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

function SignUpDialog(props){
    const [nickname, setNickname] = useState('');

    const handleChange = (event) => {
        setNickname(event.target.value);
    }

    const handleSignUp = () => {
        alert(`어서오세요, ${nickname}님!`);
    }

    
    return (
        <Dialog
            // Specialization
            title = "화상 탐사 프로그램"
            message = "닉네임을 입력해 주세요.">

            // containment ---> props.children 에보냄
            <input
                value={nickname}
                onChange={handleChange} />
            <button onClick={handleSignUp}>
                가입하기
            </button>
        </Dialog>
    );
}