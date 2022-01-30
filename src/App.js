import "./App.css";
import Header from "./Component/Header";
import FeedbackList from "./Component/FeedbackList";
import FeedbackStatus from "./Component/FeedbackStatus";
import FeedbackForm from "./Component/FeedbackForm";
import { FeedbackProvider } from "./Component/Context/FeedbackContext";

function App() {
  return (
    <>
      <FeedbackProvider>
        <Header />
        <div className="container">
          <FeedbackForm   />
          <FeedbackStatus />
          <FeedbackList />
        </div>
      </FeedbackProvider>
    </>
  );
}

export default App;
