
import PropTypes from 'prop-types';

function FeedbackStatus({feedback}) {
    //Calculating the average rating
    let average = feedback.reduce((acc,cur)=>{
        return acc + cur.rating

    },0) / feedback.length;

  return <div className="feedback-stats">
      <h4>{feedback.length} Review </h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average } </h4>

  </div>;
}

FeedbackStatus.propTypes={
    feedback:PropTypes.array.isRequired
}


export default FeedbackStatus;
