import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import SampleNextArrow from '../SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../SamplePrevArrow/SamplePrevArrow';
import { connect } from 'react-redux';

const settings = {
    className: "slider variable-width rampup-slider",
    centerMode: true,
    swipe: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />
  };



class RampupComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
            rampupImageGallary: ['IMG_20190320_000920053-min.jpg', 'IMG_20190320_001119873-min.jpg', 'IMG_20190320_001125570-min.jpg', 'IMG_20190320_001155025-min.jpg', 'IMG_20190320_001204745-min.jpg', 'IMG_20190320_001212140-min.jpg', 'IMG_20190320_001218265-min.jpg', 'IMG_20190320_001223827-min.jpg', 'IMG_20190320_001246251-min.jpg', 'IMG_20190320_001253721-min.jpg', 'IMG_20190320_002441546-min.jpg', 'IMG_20190320_002445345-min.jpg', 'IMG_20190320_002500765-min.jpg', 'IMG_20190320_002536223-min.jpg', 'IMG_20190320_002555729-min.jpg', 'IMG_20190320_002619935-min.jpg', 'IMG_20190320_002625359-min.jpg', 'IMG_20190320_002645749-min.jpg']
          }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
      }
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    
    componentDidMount(){
        this.openModal()
    }

    render(){
        return  (
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    >
            <div class="center">Products Images and Quick lookup</div>  
            
            <Slider {...settings}>
                { this.state.rampupImageGallary.map( imagesrc => {
                    return this.state.rampupImageGallary ?  (<SlideImage imagesrc={imagesrc} />) : '';
                } )}
            </Slider>   
                
               
                </Modal>
        )
    }
}

const SlideImage = (props) => (
    <div className="rampup-image">
        <img class="materialboxed" src={`images/rampup/${[props.imagesrc]}`} alt={ props.imagesrc}  />
    </div>
)

    
const mapStateToProps = ((state) => {
    return {
        reampup: state.rampupReducer
    }
})

export default connect(mapStateToProps(RampupComponent));