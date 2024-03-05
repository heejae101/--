import React, {useState, useEffect} from "react";

function UserStatus(props){
    const [isOline,setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status){
            setIsOnline(status.isOline);
        }

        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    return(
        <li style={{ color : isOline ? 'green' : 'black'}}>
            {props.user.name}
        </li>
    );
}

function UserStatus(props) {
    const isOline = useUserStatus(props.user.id);

    if(isOline === null){
        return '대기중 ...';
    }

    return isOline ? '온라인' : '오프라인';
}

function UserListItem(props){
    const isOline = useUserStatus(props.user.id);

    return (
        <li style={{ color : isOline ? 'green' : 'black'}}>
            {props.user.name}
        </li>
    );
}