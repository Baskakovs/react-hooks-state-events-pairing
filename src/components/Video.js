import React from "react";

function Video({source}){
    console.log(source)
    return(
        <div className="App">
        <iframe
            width="919"
            height="525"
            src={source}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
        />
        </div>
    )
}

export default Video