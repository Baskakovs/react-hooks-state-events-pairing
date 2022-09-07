import React from "react";

function Header({data}){
    return(
        <>
            <h1>{data.title}</h1>
            <div>
                <span>{data.views} Views | Uploaded {data.createdAt}</span>
            </div>
        </>
    )
}

export default Header