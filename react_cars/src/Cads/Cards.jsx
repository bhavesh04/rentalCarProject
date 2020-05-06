import React,{Component} from "react"
import Card from"./CardUI";

import img from"../assets/Hyundai_Verna_Sedan_Gallery_PC_1120x600_6.jpg";
import imga from"../assets/i20.jpg";
import imgb from"../assets/Inova4.jpg";

 class Cards extends Component {
     render(){
         return(
             <div className="container-fluid d-flex justify-content-center">
                
                <div className="row">
                  <div className="col-md-4">
                     <Card imgsrc={img}title="Hyundai Verna"/>

                  </div>
                  <div className="col-md-4">
                     <Card imgsrc={imga}title="i20 Kappa"/>
                  </div>
                  <div className="col-md-4">
                     <Card imgsrc={imgb}title="Toyota Innova"/>
                  </div>
                </div>
             </div>
         );
     }
 }

 export default Cards;