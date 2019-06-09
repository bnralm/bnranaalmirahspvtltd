import React from 'react';
import AchievementComponent from './../AchievementComponent/AchievementComponent';
const achievementsService = require('./AchievementsService/AchievementsService').achievements;


const AchievementsComponents = () => {
    const marketAchivements = achievementsService.marketAchivements
    return(
        <section className="section container center js-scale-sticky achivement-wrap">
            <h2 className="header">{achievementsService.title}</h2>
            <div className="row">
            {
             marketAchivements.map( (achievement, ind) => <AchievementComponent  key={'ind'+ind}  achievement={achievement} /> )
            }
            </div>
        </section>
    )
}

export default AchievementsComponents;