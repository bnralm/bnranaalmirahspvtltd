import React from 'react';
import HeroShotComponent from './../../components/HeroShotComponent/HeroShotComponent';
import ProductsComponents from './../../components/ProductsComponents/ProductsComponents';
import WhyuChooseComponents from './../../components/WhyuChooseComponents/WhyuChooseComponents';
import AchievementsComponents from './../../components/AchievementsComponents/AchievementsComponents';
import ContactUsComponent from './../ContactUsComponent/ContactUsComponent';
import RampupComponent from './../../components/RampupComponent';
import MapComponent from './../../components/MapComponent/MapComponent';
import { closeRampupGallary, requestRampupGallary } from './../../actions/action.rampup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// import StickyScaleComponent from './../StickyScaleComponent/StickyScaleComponent';

// import FeebacksComponent from './..//FeebacksComponent';

const {getMoboDevice} = require('./../../commonModule/commonModule');

const HighOrderComponent = () => {
    let count = 0;

//    if(! getMoboDevice() && count < 1 ){
//        count = 1;
//        return (<StickyScaleComponent />);
//    }
}

class HomeComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let that = this;
        window.setTimeout( () => {
            that.props.dispatch(requestRampupGallary());
        }, 5000)
    }
  render() {

    return (<React.Fragment>
                <HeroShotComponent />
                <ProductsComponents />
                <WhyuChooseComponents />
                <AchievementsComponents />
                <MapComponent />
                <ContactUsComponent />
                {this.props.rampup.isRamupOpen ? <RampupComponent /> : null}
            </React.Fragment>  )    
    }
}


        
const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators ({
        requestRampupGallary: () => requestRampupGallary()
        
    })
    return {...actions, dispatch}
}    

const mapStateToProps = (state) => ({rampup: state.rampupReducer});


export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);    
