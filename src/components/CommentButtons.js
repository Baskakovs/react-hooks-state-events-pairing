import React from "react";
import {useState} from "react"

function CommentButtons ({upvoteIn, downvoteIn, handleUpVote, handleDownvotes}){
    function onUpvote(){
        const newCount = upvoteIn.upvotes + 1
        handleUpVote(newCount)
    }
    function onDownvote(){
        const newCount = downvoteIn.downvotes - 1
        handleDownvotes(newCount)
    }
    return(
        <div>
            <button onClick={onUpvote}>{upvoteIn.upvotes} 👍</button>
            <button onClick={onDownvote}>{downvoteIn.downvotes} 👎</button>
        </div>
    )
}

export default CommentButtons