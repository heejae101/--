import { useState } from "react";

function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let button;

    // element variables 
    if(isLoggedIn){
        button = <LogoutButton onClick={handleLogoutClick} />;
    }else{
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
}