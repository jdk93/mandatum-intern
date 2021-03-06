import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const initStore = () => createStore(rootReducer, composeWithDevTools());

export default initStore;
