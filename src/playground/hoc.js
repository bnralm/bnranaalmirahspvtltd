import React from 'react';
import ReactDOM from 'react-dom';

const MyApp = (props) => (
    <p>Hello World {props.warning}</p>
)

const withAdminWarning = (WrappedComponent) => {
   return (props) => (
        <div >
            {props.auth && <p>This is a private message</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const AdminInfo = withAdminWarning(MyApp)

ReactDOM.render(<AdminInfo auth={true} warning=" my app is working" />, document.querySelector('#playground'))