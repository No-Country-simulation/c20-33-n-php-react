import React from "react";
import { Button } from "react-bootstrap";
import "../../assets/css/tabButton.css";

export const TabsButtons = ({ label, ...props }) => {
  return (
    <li className="nav-item">
      <Button className="tab-button" {...props}>{label}</Button>
    </li>
  );
};
