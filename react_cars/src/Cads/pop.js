import React, { Component } from 'react';  
import './style.css';  

class pop extends Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1>{this.props.text}</h1>  
<button onClick={this.props.closePopup}>Booking Sucessfull</button>  
</div>  
</div>  
);  
}  
}  

export default pop;