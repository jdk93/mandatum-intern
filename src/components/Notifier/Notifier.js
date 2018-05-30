import React, { Component } from "react";
import PropTypes from "prop-types";
import Notifications from "react-notification-system-redux";
import "../../constants";

const style = {
  Containers: {
    DefaultStyle: {
      width: 1200,
      margin: "75px auto auto -600px"
    }
  },
  NotificationItem: {
    DefaultStyle: {
      padding: "30px 60px",
      fontFamily: "Executive Medium 16",
      textAlign: "left",
      border: "none",
      borderRadius: 10,
      color: "#fff",
      willChange: "transform",
      opacity: 0.9
    },
    success: {
      backgroundColor: "#3DB762",
      color: "#fff!important"
    },
    info: {
      backgroundColor: "#0bdc60",
      color: "#fff"
    },
    error: {
      backgroundColor: "#ff0000"
    }
  },
  Title: {
    DefaultStyle: {
      color: "#fff"
    }
  },
  Dismiss: {
    DefaultStyle: {
      width: 35,
      height: 35,
      paddingTop: 10,
      cursor: "pointer",
      fontSize: 35,
      textAlign: "center",
      marginTop: 20,
      marginRight: 20,
      fontWeight: 100
    },
    success: {
      backgroundColor: "#fff",
      color: "#3DB762"
    },
    info: {
      backgroundColor: "#1a5b8b"
    },
    error: {
      backgroundColor: "#fff",
      color: "#ff0000"
    }
  },
  Action: {
    DefaultStyle: {
      fontFamily: "'Lato', helvetica, arial, sans-serif",
      cursor: "pointer"
    }
  }
};

class Notifier extends Component {
  render() {
    const { notifier } = this.props;
    return <Notifications notifications={notifier} style={style} />;
  }
}

Notifier.defaultProps = {
  notifier: []
};

Notifier.contextTypes = {
  store: PropTypes.object
};

Notifier.propTypes = {
  notifier: PropTypes.arrayOf(PropTypes.any)
};

export default Notifier;
