import React, {useState} from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

const CommentBox = () => {

    const addComment = (submittedComment) => {
        //access the id of the last elememt and add 1 for the next id
        submittedComment.id=comments[comments.length-1].id+1;
        //desturcture of array, add submitted Comment as the last element of new array
        const currentComments = [...comments,submittedComment];
        setComments(currentComments);
    }

    const [comments, setComments] = useState(
        [
            {
                id:1,
                author: "Ricky Henry",
                text: "React is such a great framework!"
            },
            {
                id:2,
                author: "Valerie Gibson",
                text: "I'm dreaming in React..."
            }
        ]
    )

    return (
        <>
        <h1>Comments</h1>
        <CommentList comments={comments}/>
        <CommentForm onCommentSubmit={(commentFromForm)=>{addComment(commentFromForm)}} />
        </>
    );

}

export default CommentBox;