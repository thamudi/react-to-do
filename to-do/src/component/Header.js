import React from "react";
import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <div className="header"> 
      <h1>{title}</h1>
      <Button/>
    </div>
  );

};

Header.defaultProps = {
  title: "To Do List",
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
