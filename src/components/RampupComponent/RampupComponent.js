import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import SampleNextArrow from '../SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../SamplePrevArrow/SamplePrevArrow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeRampupGallary, requestRampupGallary } from './../../actions/action.rampup';
import './styles/style.scss';


const customStyles = {
    content : {
      top                   : '0%',
      left                  : '0%',
      right                 : '0%',
      bottom                : '0%',
      background : 'rgba(110,110,110,0.9)',
    }
  };

const settings = {
    className: "slider variable-width rampup-slider",
    centerMode: true,
    swipe: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: false,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />
  };

class RampupComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rampupImageGallary: ['IMG_20190320_002441546.jpg',
            'IMG_20190320_002445345.jpg',
            'IMG_20190320_002536223.jpg',
            'IMG_20190320_002555729.jpg',
            'IMG_20190320_002619935.jpg',
            'IMG_20190320_002625359.jpg',
            'IMG_20190320_002625359_I.jpg',
            'IMG_20190320_002638017.jpg',
            'IMG_20190320_002645749.jpg',
            'IMG_20190320_002659613.jpg',
            'IMG_20181017_085858850.jpg',
            'IMG_20181017_090139410.jpg',
            'IMG_20181017_090156909.jpg',
            'IMG_20181017_090509732.jpg',
            'IMG_20181017_090543240.jpg',
            'IMG_20181017_090547543.jpg',
            'IMG_20181017_090652986.jpg',
            'IMG_20181017_090706773.jpg',
            'IMG_20190320_00261993s.jpg'
            ]
          }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }
    openModal() {
        this.props.dispatch(requestRampupGallary())
      }
    closeModal() {
        this.props.dispatch(closeRampupGallary())
      }

    componentDidMount(){
        if(! this.props.rampup.isRamupClosed){
          let that = this;
          window.setTimeout( () => {
            that.props.dispatch(requestRampupGallary());
          }, 5000)
        }
    }
    render() {
        return (<Modal
                    isOpen={this.props.rampup.isRamupOpen}
                    onRequestClose={() => this.closeModal() }
                    style={customStyles}
                    >
                        <div className="close-rampup" onClick={() => this.closeModal()}>&times;</div>
                        <div className="text-white margin-bottom-20">Products Images and Quick lookup</div>  
                        <Slider {...settings}>
                            { this.state.rampupImageGallary.map( (imagesrc, ind) => {
                                return this.state.rampupImageGallary ?  (<SlideImage key={'ind'+ind} imagesrc={imagesrc} />) : '';
                            } )}
                        </Slider>   
                </Modal>
        )
    }
}

const SlideImage = (props) => (
    <div className="rampup-image">
        <img className="materialboxed" src={`images/rampup/${[props.imagesrc]}`} alt={ props.imagesrc}  />
    </div>
)

const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators ({
        closeRampupGallary: () => closeRampupGallary(),
        requestRampupGallary: () => requestRampupGallary()
    })
    return {...actions, dispatch}
}    

const mapStateToProps = (state) => ({rampup: state.rampupReducer});

export default connect(mapStateToProps, mapDispatchToProps)(RampupComponent);