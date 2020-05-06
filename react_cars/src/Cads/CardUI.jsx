import React from "react";
import "./card-style.css";
import {Route, Link} from 'react-router-dom';

const Card = props =>{
    return(
        <div className='card text-center'>
            background
            <div className='overflow'>
                <img src={props.imgsrc} alt='Image 1' className='card-img-top'/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-dark">Rs. 500/-day</p>
                <a href="#"className="btn btn-outline-success"> Book Now </a>
                <a href="#"className="btn btn-outline-success"> <ul>
              <li>
              <Link to="/info">Details</Link>
              </li>

                     </ul></a>
            </div>
        </div>
        
    );

}



export default Card;