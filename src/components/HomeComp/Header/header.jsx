import React from "react";
import "./header.css";
import { Button } from "react-bootstrap";

const header = ({ formSubmit, value, handleSearchKey }) => {
  return (
    <header className="home-header">
      <h2>Inc. This Morning</h2>
      <h1>
        <span>“</span> Blog <span>”</span>
      </h1>
      <p>
        awesome place to make oneself <br /> productive and entertained through
        daily updates.
      </p>

      <div onClick={formSubmit}>
        <Button variant="primary" value={value} onClick={handleSearchKey}>
          Web Development
        </Button>{" "}
        <Button variant="primary" value={value} onClick={handleSearchKey}>
          AI/ML
        </Button>{" "}
        <Button variant="primary" value={value} onClick={handleSearchKey}>
          Data Science{" "}
        </Button>{" "}
        <Button variant="primary" value={value} onClick={handleSearchKey}>
          Cyber Security
        </Button>{" "}
      </div>
    </header>
  );
};

export default header;
