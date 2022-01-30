import Card from "./Shared/Card";
import PropTypes from 'prop-types';
import {FaTimes,FaEdit} from 'react-icons/fa';
import React, { useContext } from "react";
import FeedbackContext from "./Context/FeedbackContext";


function FeedbackItem({ item,   }) {
  const {deleteFeedback,editFeedback}= useContext(FeedbackContext)
  return (
    <>

    <Card  >
      <div   className="num-display">{item.rating} </div>
      <button className="close" onClick={()=>{
        deleteFeedback(item.id)
      }}>
        <FaTimes color="purple" />
      </button>
      <button className="edit">
        <FaEdit color="purple" onClick={()=>editFeedback(item)} />
      </button>
      <p className="text-display">{item.text} </p>
    </Card>

    </>
  );
}

FeedbackItem.propTypes={
  item:PropTypes.object.isRequired

}

export default FeedbackItem;
