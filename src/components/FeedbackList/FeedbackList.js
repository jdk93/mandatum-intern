import React from "react";
import PropTypes from "prop-types";
import "./FeedbackList.css";

class FeedbackList extends React.Component {
  render() {
    return (
      <div>
        {this.props.feedbacks.map((feedback, key) => (
          <div className="Feedback" key={key}>
            <p className="Feedback-comment">{feedback.comment}</p>
            <p className="Feedback-user-info">
              {feedback.name} {feedback.email}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

const { array } = PropTypes;

FeedbackList.propTypes = {
  feedbacks: array.isRequired
};

export default FeedbackList;
