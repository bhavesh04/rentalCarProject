import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';



class home extends Component{

  
  render() {
    return (
      <Form className="home-form">
          <h1>
            <span className="font-weight-bold">Booking </span>Details
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
            Book Car
          </Button>
      </Form>
  );
}
}

export default home;