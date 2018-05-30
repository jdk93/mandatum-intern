export const SET_FEEDBACK = "SET_FEEDBACK";

/* Reusable Selectors */
export const getFeedbackState = state => state.feedback;

const initialState = [];

// const initialState = () => {
//   const feedbacks = localStorage.getItem("feedbacks");
//   return feedbacks ? JSON.parse(feedbacks) : [];
// };

export const feedbacks = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FEEDBACK:
      console.log("payload", payload);
      const newState = [...state, payload];
      //localStorage.setItem("feedbacks", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};
