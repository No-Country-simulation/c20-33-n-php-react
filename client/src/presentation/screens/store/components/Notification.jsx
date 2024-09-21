import PropTypes from "prop-types";
import React from "react";

export const Notification = ({ className, notification = "notification-02.svg" }) => {
  return <img className={`absolute w-6 h-6 top-0 left-0 ${className}`} alt="Notification" src={notification} />;
};

Notification.propTypes = {
  notification: PropTypes.string,
};