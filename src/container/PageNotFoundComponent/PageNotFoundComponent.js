import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFoundComponent = () => (
    <div className="section blue lighten-5 center">
        <div className="container">
        
            <p className="header-level-2-title red-text darken-4">404 Page Not Found</p>
            <h2 className="header">We lost you!</h2>
            <p>We weren?t able to find the page you are looking for.</p>
            <h4>What might have happened?</h4>
            <ul className="pagenot-found">
                <li className="pagenot-found__list-item">The link you followed might be old or have a typo in it.</li>
                <li className="pagenot-found__list-item">The page might have been moved to another place on the site.</li>
                <li className="pagenot-found__list-item">You may have mistyped the URL into your browser's address bar.</li>
            </ul>
            <h4>What you can do:</h4>
            <ul className="pagenot-found">
                <li className="pagenot-found__list-item">Go to the <Link to='/'>Home Page</Link></li>
                <li className="pagenot-found__list-item"><Link to="/contact-us">Contact us</Link> to give us feedback on the website</li>
            </ul>
        </div>
    </div>

)

export default PageNotFoundComponent;