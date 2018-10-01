import React from 'react';

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={props.className}
        style={{  display: "block", width:"49px", height:"21px", background: "url('/images/back.png')" }}
        onClick={onClick}
      >
      </div>
    );
  }

  export default SamplePrevArrow;