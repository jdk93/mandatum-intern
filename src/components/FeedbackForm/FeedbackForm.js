import React from "react";
import PropTypes from "prop-types";
import Notifications, { success } from "../../actions/notifier";

// const notificationOpts = {
//   // uid: 'once-please', // you can specify your own uid if required
//   title: "Hey, it's good to see you!",
//   message: "Now you can see how easy it is to use notifications in React!",
//   position: "tr",
//   autoDismiss: 0,
//   action: {
//     label: "Click me!!",
//     callback: () => alert("clicked!")
//   }
// };

class FeedbackForm extends React.Component {
  state = {
    name: "",
    email: "",
    comment: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    this.props.setFeedback(this.state);
    this.context.store.dispatch(success());
    this.setState({
      name: "",
      email: "",
      comment: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col-md-9 go-right" onSubmit={this.handleSubmit}>
            <h2>Feedback Form</h2>
            <p>
              We welcome for your feedback and we will try to implement it into
              our website.
            </p>

            <div className="form-group">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email Address"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="comment"
                className="form-control"
                style={{ height: 150 }}
                placeholder="Type your text here"
                required
                value={this.state.comment}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

FeedbackForm.contextTypes = {
  store: PropTypes.object
};

export default FeedbackForm;
