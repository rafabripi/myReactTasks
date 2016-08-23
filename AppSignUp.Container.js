/**
* @Author: Rafael Bribiesca
* @Date:   2016-08-14T22:39:53-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-08-22T22:28:43-05:00
*/



import React,{Component} from "react";
import HttpFactory from "../../httpCalls/myIdentity.httpCalls";
import $consts from "../../common/myIdentity.constants";
import AppSignUp from "../UserSignUp/index";
import $validate from "validate.js";
import constraints from "../../constraints/appSignUp.constraints";
import nestedProperty from "nested-property";

class AppSignUpContainer extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      appName : "",
	      contactEmail : "",
	      termsUrl : "",
	      privacyUrl : "",
	      redirectUris : "",
	      clientSecret : "",
	      errors:{}
	    };

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
	      this.setState(_newState);
	  }

	  async submitForm(e){
	    e.preventDefault();
	    const notValid = $validate(this.state, constraints);

	    if(notValid)
	      this.setState({errors:notValid})
	    else{
		    	const superAgentClient = HttpFactory.createSuperAgentClient();
		      const dbClient = HttpFactory.create(superAgentClient);
			let appInfo = Object.assign({}, this.state);
			delete appInfo.errors;
			try{
					let res = await dbClient.saveApplicacion(appInfo);
					console.log(res.body);
					console.log(res);
					console.log(this.state);
			}catch(err){
				console.log(err);
			}
		}
	}

	  render(){
	  	return(
	  		<AppSignUp submit={this.submitForm} errorsFound={this.state.errors}  handleModel={this.handleModel} />
	  	)
	  }
}

export default AppSignUpContainer;
