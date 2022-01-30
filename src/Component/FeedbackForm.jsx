import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./Shared/Button";
import Card from "./Shared/Card";
import FeedbackContext from "./Context/FeedbackContext";
import React, { useContext } from "react";


function FeedbackForm( ) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisable, setBtnDisable] = useState(false);
    const [message, setMessage] = useState('');
    const {addFeedback}= useContext(FeedbackContext)
    const handleChangeText = (e)=>{
        if(text===""){
            setBtnDisable(false);
            setMessage(null)
        }
        else if(text !=="" && text.trim().length<=10 ){
            setBtnDisable(true);
            setMessage("Text must be at least 10 characters")
        }
        else{
            setBtnDisable(false);
            setMessage(null)
        }
        setText(e.target.value);

    }

    const handleSubmit = (e)=>{

        e.preventDefault();
         if( text.trim().length > 10 ){
            const newFeedback = {
                text,
                rating
            }
            addFeedback(newFeedback);
            setText("")
        }
    }

  return <Card>
      <form  onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect select={(rating)=>setRating(rating)} />
          <div className="input-group">
              <input type="text" placeholder="Write a review" onChange={handleChangeText} value={text} />

              <Button type="submit" isdisable={btnDisable}  > Send </Button>
          </div>
      </form>
      {message && <div className="message">{message}</div> }
  </Card> ;
}

export default FeedbackForm;
