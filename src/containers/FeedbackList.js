import { connect } from "react-redux";
import FeedbackList from "../components/FeedbackList";

const stateToProps = state => ({
  feedbacks: state.feedbacks
});

export default connect(stateToProps)(FeedbackList);
