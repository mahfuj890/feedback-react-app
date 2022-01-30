import PropTypes from "prop-types";
// import React, { useContext } from "react";
// import FeedbackContext from "../Context/FeedbackContext";
// import { useEffect } from "react";
function Button({ children, type, version, isdisable }) {
  // const { feedbackEdit } = useContext(FeedbackContext);
  // console.log(feedbackEdit, "button");
  // useEffect(() => {
  //   if (feedbackEdit.editMood === true) {

  //   }
  // }, [feedbackEdit]);
  return (
    <>
      <button
        type={type}
        disabled={isdisable}
        className={`btn btn-${version} `}
      >
      {children}
      </button>
    </>
  );
}

Button.defaultProps = {
  type: "button",
  version: "primary",
  isdisable: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isdisable: PropTypes.bool,
};

export default Button;
