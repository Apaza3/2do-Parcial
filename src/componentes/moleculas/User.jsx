import react from "react";
import '';
function User({username, color}){
    return(
        <span classname="user-tag" style={{backgroundColor: color}}>
            {username}
        </span>
    );
}

export default User;