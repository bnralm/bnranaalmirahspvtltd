import React from 'react';
import {logoutUser} from './../../actions/login'

const NavUserComponent = ({props}) => {
    const signOut = () => {
        props.dispatch(logoutUser({token:""}))
    }

    return (
        <span>
            <li>{props.userLastName}</li>
            <li><a href={signOut}>Sign Out</a></li>
        </span>
        )
}

export default NavUserComponent;