import { connect } from "react-redux";
import Notifier from "../components/Notifier/Notifier";
import Notifications, { success } from "../actions/notifier";

const stateToProps = state => ({
  notifier: state.notifier
});

export default connect(stateToProps, { success })(Notifier);
