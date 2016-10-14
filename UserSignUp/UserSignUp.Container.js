/**
* @Author: Rafael Bribiesca
* @Date:   2016-08-21T11:24:13-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-10-13T22:34:37-05:00
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
      errors:{},
      ChangeIco: "btn-lg btn-block btn-success glyphicon glyphicon-plus",
      btnTitleNetSocial: "Social Network"
    }

    this.handleModel = this.handleModel.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.showBilling = this.showBilling.bind(this);
    this.NetSocial = this.NetSocial.bind(this);
    this.getNetSocialURL = this.getNetSocialURL.bind(this);
    this.addNetSocial = this.addNetSocial.bind(this);
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

    let tempConstraints = JSON.parse(JSON.stringify(constraints))
    if(!this.state.open)
      delete tempConstraints.billingName

    const dataNoValid = _validate(this.state, tempConstraints)

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

  showBilling(){
    const minus = "btn-lg btn-block btn-success glyphicon glyphicon-minus";
    const plus = "btn-lg btn-block btn-success glyphicon glyphicon-plus";

    this.setState({ open: !this.state.open })
    if (this.state.ChangeIco === plus)
      this.setState({ChangeIco: minus})

    else if (this.state.ChangeIco === minus)
      this.setState({ChangeIco: plus})
  }

  NetSocial(event, eventKey){
    this.setState(
      {btnTitleNetSocial: event}
    );
  }

  getNetSocialURL(event){
   this.setState({netSocialURL: event.target.value})
  }

  addNetSocial(){
    let res = "this.state.openSocial".concat(this.state.btnTitleNetSocial);
    console.log(res);

    this.setState({
      openSocialFacebook : !this.state.openSocialFacebook
    })


  }

  render(){
    return(
      <UserSignUp
        showBilling = {this.showBilling}
        open = {this.state.open}
        ChangeIco = {this.state.ChangeIco}
        submit={this.submitForm}
        errorsFound={this.state.errors}
        handleModel={this.handleModel}
        NetSocial={this.NetSocial}
        btnTitleNetSocial={this.state.btnTitleNetSocial}
        getNetSocialURL={this.getNetSocialURL}
        addNetSocial={this.addNetSocial}
        openSocialFacebook = {this.state.openSocialFacebook}
      />
    )
  }
}

export default UserSignUpContainer;
