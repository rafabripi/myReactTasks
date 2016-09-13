/**
* @Author: Rafael Bribiesca
* @Date:   2016-08-21T11:24:13-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-12T22:49:30-05:00
*/

import React,{Component} from 'react';
import UserSignUp from './index';
import nestedProperty from 'nested-property';
import constraints from '../../constraints/userSignUp.constraints';
import _validate from 'validate.js';
import HttpFactory from "../../httpCalls/myIdentity.httpCalls";

class UserSignUpContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName : "",
      nickName: "",
      dateBirth: "",
      address: "",
      email: "",
      errors:{},
      btnStyle: "btn-lg btn-block btn-success glyphicon glyphicon-plus",
      inputShowhide: "hide"
    }

    this.handleModel = this.handleModel.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.showHideFields = this.showHideFields.bind(this);
  }

  handleModel(data){
    const key = data.target.id;
    const value = data.target.value;
    let _newState = {};
  //Allow create objects with the dot notations.
  //example "keys.public" => {keys:{public:"theValue"}}
    nestedProperty.set(_newState, key, value);
    this.setState(_newState);
  }

  async submitForm(event){
    event.preventDefault();
    const dataNoValid = _validate(this.state, constraints)

    if (dataNoValid)
      this.setState({errors: dataNoValid})
    else{
      const superAgentClient = HttpFactory.createSuperAgentClient();
      const dbClient = HttpFactory.create(superAgentClient);
      let appInfo = Object.assign({}, this.state);
			delete appInfo.errors;

      try{
				await dbClient.saveUserProfile(appInfo);
			}catch(err){
				console.log(err);
			}

      console.log("sending form");
    }
  }

  showHideFields() {
    const minus = "btn-lg btn-block btn-success glyphicon glyphicon-minus";
    const plus = "btn-lg btn-block btn-success glyphicon glyphicon-plus";

    if (this.state.btnStyle === plus){
      this.setState({btnStyle: minus})
      this.setState({inputShowhide: "show well well-sm"})
    }
    else if (this.state.btnStyle === minus){
      this.setState({btnStyle: plus})
      this.setState({inputShowhide: "hide"})
    }
  }

  render(){
    return(
      <UserSignUp
        PropShow = {this.state.inputShowhide}
        popHide = {this.state.btnStyle}
        showHideFields={this.showHideFields}
        submit={this.submitForm}
        errorsFound={this.state.errors}
        handleModel={this.handleModel}/>
    )
  }
}

export default UserSignUpContainer;
