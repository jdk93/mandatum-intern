import { combineReducers } from "redux";
import { feedbacks } from "./feedbacks";
//import { reducer as notifier } from "react-notification-system-redux";
import { Notifications as notifier } from "./notifier";

const rootReducer = combineReducers({
  feedbacks,
  notifier
});

export default rootReducer;
