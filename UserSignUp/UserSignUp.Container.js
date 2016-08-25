/**
* @Author: Rafael Bribiesca
* @Date:   2016-08-21T11:24:13-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-08-24T22:57:40-05:00
*/



import React,{Component} from 'react';
import UserSignUp from './index';
import nestedProperty from 'nested-property';
import constraints from '../../constraints/userSignUp.constraints';
import _validate from 'validate.js';

class UserSignUpContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName : "",
      errors:{}
    }

    this.handleModel = this.handleModel.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleModel(data){
    const key = data.target.id;
    const value = data.target.value;
    let _newState = {};
  //Allow create objects with the dot notations.
  //example "keys.public" => {keys:{public:"theValue"}}
    nestedProperty.set(_newState, key, value);
    console.log(_newState);
    this.setState(_newState);
  }

  async submitForm(event){
    event.preventDefault();
    const dataNoValid = _validate(this.state, constraints)

    if (dataNoValid)
      this.setState({errors: dataNoValid})
    else{
      console.log("sending form");
    }


  }

  render(){
    return(
      <UserSignUp
      submit={this.submitForm}
      errorsFound={this.state.errors}
      handleModel={this.handleModel}/>
    )
  }
}

export default UserSignUpContainer;
