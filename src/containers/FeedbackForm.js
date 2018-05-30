import { connect } from "react-redux";
import FeedbackForm from "../components/FeedbackForm";
import { setFeedback } from "../actions/feedbacks";

const stateToProps = state => ({
  feedbacks: state.feedbacks
});

export default connect(stateToProps, { setFeedback })(FeedbackForm);
