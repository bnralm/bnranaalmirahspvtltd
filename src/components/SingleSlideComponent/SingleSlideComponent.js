import React from 'react';

const SingleSlideComponent = (props) => {
    return (<div className="gallary-item">
            <img src={props.image} alt="Product detail gallary images" />
        </div>)
    }

export default SingleSlideComponent;