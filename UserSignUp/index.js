/**
* @Author: Rafael Bribiesca <rafabripi>
* @Date:   2016-08-18T21:58:44-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-08-23T21:33:47-05:00
*/



import {FormControl, FormGroup, ControlLabel, Button, Glyphicon, PageHeader, Grid, Col, Row} from 'react-bootstrap';
import React from 'react';
import UserName from './UserName';
import ValidatorBase from "../Validator";

const UserNameVal = ValidatorBase(UserName);

const UserSignUp = (props) => {
  return(
    <Grid>
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={6} ><PageHeader>Wellcome</PageHeader></Col>
          <Col xs={12} md={4}></Col>
      </Row>

      <form onSubmit={props.submit}>

        <UserName />

        <Row>
          <Col xs={12} md={2}><ControlLabel>Name : </ControlLabel></Col>
          <Col xs={12} md={6}><FormControl
            type="text"
            placeholder="Enter your name"
            /></Col>
          <Col xs={12} md={4}></Col>
        </Row>

        <Row>
          <Col xs={12} md={2}><ControlLabel>Nick name : </ControlLabel></Col>
          <Col xs={12} md={6}><FormControl
            type="text"
            placeholder="Enter your nick name"
          /></Col>
          <Col xs={12} md={4}></Col>
        </Row>

        <div className="row">
          <div className="col-md-2"><ControlLabel>Date of birth : </ControlLabel></div>
          <div className="col-md-6"><FormControl
            type="text"
            placeholder="Enter your date of birth"
          /></div>
          <div className="col-md-4"></div>
        </div>

        <div className="row">
          <div className="col-md-2"><ControlLabel>Address : </ControlLabel></div>
          <div className="col-md-6"><FormControl
            type="text"
            placeholder="Enter your home address"
          /></div>
          <div className="col-md-4"></div>
        </div>

        <div className="row">
          <div className="col-xs-2"><ControlLabel>Email : </ControlLabel></div>
          <div className="col-xs-6"><FormControl
            type="text"
            placeholder="Enter your email address"
          /></div>
          <div className="col-xs-4"></div>
        </div>

        <div className="row">
          <Button type="submit" bsStyle="primary"><Glyphicon glyph="send" /> Send</Button>
        </div>
      </form>
    </Grid>
  )
}

export default UserSignUp;
module.exports.UserSignUp = UserName;
