import React, {useState} from "react";
import Comment from "./Comment"

function CommentList({data}){
    const [hide, setHide] = useState(false)
    function handleHide(){
        setHide(!hide)
    }
    return(
        <>
            <button onClick={handleHide}>{hide ? "Show" : "Hide"} Comments</button>
            <div style={ hide ? {display: "none"} : null }>
            <h1>{data.length} Comments</h1>
                {
                    data.map((comment)=>{
                        return <Comment 
                                user={comment.user} 
                                comment={comment.comment} 
                                />
                    })
                }
            </div>
        </>
    )
}
export default CommentList