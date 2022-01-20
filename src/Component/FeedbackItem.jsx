import Card from "./Shared/Card";
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa';



function FeedbackItem({ item,handleDelete  }) {

  return (
    <>

    <Card  >
      <div className="num-display">{item.rating} </div>
      <button className="close" onClick={()=>{
        handleDelete(item.id)
      }}>
        <FaTimes color="purple" />
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
