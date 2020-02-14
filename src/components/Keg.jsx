import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <div>
    <style jsx>{`
      div {
        background-color: lavender;
      }
      `}</style>
      <h3>{props.day} - {props.location}</h3>
      <p><em>{props.hours}</em></p>
      <p><em>{props.booth}</em></p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.integer.isRequired,
  alcoholContent: PropTypes.integer.isRequired
};

export default Keg;
