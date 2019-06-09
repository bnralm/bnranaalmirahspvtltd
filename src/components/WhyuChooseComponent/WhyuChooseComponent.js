import React from 'react';

const WhyuChooseComponent = (props) => {
    const {whyChooseImage, whyChooseHead, whyChoosePara } = props.whyuchoose;
    if(whyChooseImage) {
        return (
            <div className="col m4 s12">
                <div className="card card-rounded">
                    <div className="picture">
                        <img src={whyChooseImage}/>
                    </div>
                    <h4 className="level-4">{whyChooseHead}</h4>
                    <div className="line-seperator"></div>
                    <p className="">{whyChoosePara}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="text-center">Loading...</div>
        )
    }
    
    }
    
export default WhyuChooseComponent;