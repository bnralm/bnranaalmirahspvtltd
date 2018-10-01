import React from 'react';

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={props.className}
        style={{  display: "block", width:"49px", height:"21px", background: "url('/images/next.png')" }}
        onClick={onClick}
      />
    );
  }

  export default SampleNextArrow;