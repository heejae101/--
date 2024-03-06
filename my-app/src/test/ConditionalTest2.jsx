import { useState } from "react";

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>안녕하세요!</h1>
            // Inline Conditions
            // 주의 사항 false라고 해도 <h2></h2>에 있는것은 출력됨 출력안되는게 아님
            {unreadMessages.length > 0 &&
                <h2>
                    현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
                </h2>
            }
        </div>
    );
}

// inline If-Else
function UserStatus(props) {
    return(
        <div>
            이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다.
        </div>
    )
}

// element 를 사용하는 방식
function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }
    
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn
                ? <LogoutButton onClick={handleLogoutClick} />
                : <LoginButton onClick={handleLoginClick} />
            }
        </div>
    )
}

// 랜더링을 하고 싶지 않을 때 
function MainPage(props) {
    const [showWarning, setShowWarning] = useState(false);

    const handelToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return (
        <div>
            <WarningBanner warning={showWarning} />
            <button onClick={handelToggleClick}>
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    )
}
