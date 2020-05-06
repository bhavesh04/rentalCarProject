import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <ul>
            <li>
                <Link to="/Cards"></Link>
                <Link to="/info"></Link>
            </li>
        </ul>
            
    )
}

export default NavBar;