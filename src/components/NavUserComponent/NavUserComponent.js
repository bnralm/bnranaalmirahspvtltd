import React from 'react';
import {logoutUser} from '../../actions/action.login';
import {connect} from 'react-redux';
const {getMoboDevice} = require('./../../commonModule/commonModule');
import './styles/style.scss';

class NavUserComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showSubmenu: false
        }
        this.signOut = this.signOut.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    signOut(){
        this.props.dispatch(logoutUser());
        localStorage.clear();
    }
    onClickHandler(){
        this.setState( prevProps => {
           return {
                showSubmenu: !prevProps.showSubmenu
           } 
        })
    }

    render(){
        return (
            <React.Fragment>
               {
                ! getMoboDevice() ? (<li className={this.state.showSubmenu === false ? null : 'active'}>
                        <a className="show-dropdown" onClick={
                           () => this.onClickHandler.bind(this)
                        }>
                            <img src={this.props.props.imageUrl} className="avtar-image" />
                        </a>
                        <div className="sub-menu">
                            <ul>
                                <li><a onClick={this.signOut}>Sign Out</a></li>
                            </ul>
                        </div>
                    </li>) : ''
                }
            </React.Fragment>
            )
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(NavUserComponent);