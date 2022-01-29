import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Component/Header';
import FeedbackData from './Data/FeedbackData';
import { useState } from 'react';
import FeedbackList from './Component/FeedbackList';
import FeedbackStatus from './Component/FeedbackStatus';
import FeedbackForm from './Component/FeedbackForm';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  // Add Feedback
  const addFeedback = (newFeedback)=>{

    newFeedback.id = uuidv4();
    setFeedback([newFeedback,...feedback])
 

  }

  // Delete Feedback
  const deleteFeedback  = (id)=>{
    if(window.confirm("Are you sure you want to delete?")){
      setFeedback(feedback.filter((item)=> item.id !==id ))
    }

  }

  return (
    <>
<Header   />
    <div className="container">
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStatus  feedback={feedback} />
       <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
    </>
  );
}

export default App;
