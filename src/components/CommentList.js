import React from "react";
import Comment from "./Comment";

const CommentList = ({comments}) => {

    const CommentNodes = comments.map((comment)=> {

        return (
            <Comment author = {comment.author} key={comment.id}>{comment.text}</Comment>
        )

    })


    return (
        <>
        I'm a CommentList!
        <ul>
        {/* Teaching Step 1 */}
        {/* <Comment author = {comments[0].author}>{comments[0].text}</Comment>
        <Comment author = {comments[1].author}>{comments[1].text}</Comment> */}

        {CommentNodes}
        </ul>
        
        </>
    );
}

export default CommentList;