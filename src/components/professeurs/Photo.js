import React from 'react';
import "./Photo.css"

function Photo (props){
    const classes = `photo ` + props.className;
  return (
    <div className={classes} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Photo;
