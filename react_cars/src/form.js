import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';
import browserHistory from "react-router";
import {Route, Link} from 'react-router-dom';
import imgi from './assets/bg image.jpg';



class form extends Component{

  
  render() {
    return (
      <Form className="home-form">
          <h1>
            <span className="font-weight-bold">Booking Details </span> 

          </h1>
          <h2 className="text-center">Welcome</h2>
          <FormGroup>
            <Label>Name </Label>
            <Input type="Name" placeholder="name"/>
          </FormGroup>
          <FormGroup>
            <Label>Contact Number </Label>
            <Input type="number" placeholder="+91"/>
          </FormGroup>
          <FormGroup>
            <Label>Issue Date </Label>
            <Input type="date" placeholder="DD/MM/YYYY"/>
          </FormGroup>
          <FormGroup>
            <Label>Return Date </Label>
            <Input type="Date" placeholder="DD/MM/YYYY"/>
          </FormGroup>
          <Button className="btn-lg btn-dark btn-block">
                        <ul>
              <li>
              <Link to="/Cards">Book now</Link>
              </li>

                     </ul>
          </Button>
      </Form>
  );
}
}

export default form;