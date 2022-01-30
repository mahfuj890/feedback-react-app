import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "./Context/FeedbackContext";

function FeedbackList() {
  const {feedback}= useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <h3>No Feedback Add Yet</h3>;
  }



  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={item.id}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                 
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>

  );
}



export default FeedbackList;
