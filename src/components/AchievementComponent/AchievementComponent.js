import React from 'react';

const AchievementComponent = (props) => {
    const {marketAchivementNum, marketPercent, marketAchivementText} = props.achievement;
    return (
        <div className="col s12 m4 achievement-wrap">
            <div className="large-num achievement-title blue-text accent-1">
                {marketAchivementNum}
                {marketPercent}</div>
            <div className="achievement-label">
                {marketAchivementText}
            </div>
        </div>
    )
}

export default AchievementComponent;