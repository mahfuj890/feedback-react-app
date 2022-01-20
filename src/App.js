import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import FeedbackData from './Data/FeedbackData';
import { useState } from 'react';
import FeedbackList from './Component/FeedbackList';
import FeedbackStatus from './Component/FeedbackStatus';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

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
      <FeedbackStatus  feedback={feedback} />
       <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
    </>
  );
}

export default App;
