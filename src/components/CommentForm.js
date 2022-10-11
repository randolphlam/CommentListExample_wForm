import React, {useState} from "react";

const CommentForm = ({onCommentSubmit}) => {

    const [author,setAuthor] = useState("");
    const [text,setText] = useState("");

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleFormSubmit = (event) => {

        // submit event prevent default post action
        event.preventDefault();

        // trim input field 
        const authorToSubmit = author.trim();
        const textToSubmit = text.trim();

        // check whether the input field is empty
        if (!authorToSubmit || !textToSubmit) {
            return
        }

        //Callback function with arguments as value
        onCommentSubmit({
            author: authorToSubmit,
            text: textToSubmit
        })

        //reset the form with initial values
        setAuthor("");
        setText("");
    }

    return (
        <>
        <form className="commment-form" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Your name" value={author} onChange={handleAuthorChange}/>
            <input type="text" placeholder="Say something..." value={text} onChange={handleTextChange}/><input type="submit" value="Post" />
            
        </form>
        </>
    )

}

export default CommentForm;