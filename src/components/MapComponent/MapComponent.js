import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const Keys = require('./../../config/keys');

export class MapComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const style = {
            height: "500px"
        }
        return (
            <section className="section map-container js-scale-sticky">
                <div className="container location--wrap">
                    <div className="location--box">
                        <h2 className="text-heading location--heading">LOCATION</h2>
                        <div className="text-normal location--message text-bold">Holding No. 675A, Ward No. 16, Mohalla, Argaghat Road, Giridih</div>
                     </div>
               </div>
                <Map 
                    google={this.props.google}
                    zoom={17}
                    style={style}
                    initialCenter={{
                        lat: 24.18950701,
                        lng: 86.31013231
                        }}
                    >
                    <Marker onClick={this.onMarkerClick}
                            name={'BN & Rana Almirahs P Ltd.'}
                            position={{lat: 24.18950701, lng: 86.31013231}} 
                             />
                    
                </Map>
            </section>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: Keys.gMapAPIKey
  })(MapComponent)

