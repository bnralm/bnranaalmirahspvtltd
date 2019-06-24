import React from 'react';

export default class BacktoTopComponent extends React.Component {
    constructor(props){
        super(props);
        this.windowScrollHandler = this.windowScrollHandler.bind(this);
        this.activeBackToTop = this.activeBackToTop.bind(this);
        this.scrolltoTopHandler = this.scrolltoTopHandler.bind(this);
        this.state = {
            scrollTop: undefined
        }
        
    }
    componentDidMount(){
        this.windowScrollHandler();
    }

    windowScrollHandler(){
        window.addEventListener('scroll', this.activeBackToTop, false) 
    }
    
    activeBackToTop(){
        let currentPosition = window.scrollY;
        this.setState( () => ({scrollTop: currentPosition}) );
    }
    scrolltoTopHandler(){
        window.scrollTo(0, 0);
    }
    render(){
        const winH = window.screen.availHeight;
        const checkActiveState = 'backtotop ' + (this.state.scrollTop > (winH/3) ? 'isActive' : 'false');  
            return (
                <div className={checkActiveState}>
                    <a className="backtotop--link" onClick={this.scrolltoTopHandler}>
                        <i className="material-icons">keyboard_arrow_up</i>
                    </a>
                </div>
            )
        }
    }
