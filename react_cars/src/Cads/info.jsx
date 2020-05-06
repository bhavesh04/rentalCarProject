import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';


class info extends Component{
    render() {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                    <h4 className=""><span>
                        The Hyundai Elite i20 has 1 Petrol Engine on offer. 
                The Petrol engine is 1197 cc. It is available with the Manual and Automatic transmission.
                 Depending upon the variant and fuel type the Elite i20 has a mileage of 17.4 to 18.6 kmpl.
                  The Elite i20 is a 5 seater Hatchback and has a length of 3985mm, width of 1734mm and a wheelbase of 2570mm.</span></h4>

                    </div>
                      
                    <div className="col-md-4">
                    <h5 className="card-title"><span>
                        The Hyundai Verna has 1 Diesel Engine and 2 Petrol Engine on offer.
                 The Diesel engine is 1493 cc while the Petrol engine is 1497 cc and 998 cc. 
                 It is available with the Manual and Automatic transmission. 
                 The Verna is a 5 seater Sedan and has a length of 4440mm, width of 1729mm and a wheelbase of 2600mm.</span></h5> 
                    </div>
                    <div className="col-md-4">
                    <h6 className="card-title"><span>
                        The Toyota Innova Crysta has 1 Diesel Engine and 1 Petrol Engine on offer. 
                The Diesel engine is 2393 cc while the Petrol engine is 2694 cc. 
                It is available with the Manual and Automatic transmission.
                 Depending upon the variant and fuel type the Innova Crysta has a mileage of 10.75 to 13.68 kmpl. 
                 The Innova Crysta is a 7 seater MPV and has a length of 4735mm, width of 1830mm and a wheelbase of 2750mm.</span></h6>

                    </div>
                </div>
            </div>

        );
    }
}

export default info;