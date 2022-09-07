import React from "react";

function Comment({user, comment}){
    return(
        <div>
            <h1>{user}</h1>
            <p>{comment}</p>
        </div> 
    )
}

export default Comment