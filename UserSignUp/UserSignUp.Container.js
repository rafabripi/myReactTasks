/**
* @Author: Rafael Bribiesca
* @Date:   2016-08-21T11:24:13-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-08-23T19:32:06-05:00
*/



import React,{Component} from 'react';
import UserSignUp from './index';

class UserSignUpContainer extends Component{
  constructor(props){
    super(props);

  }

  async submitForm(event){
    event.preventDefault();
    console.log("sending form");
  }

  render(){
    return(
      <UserSignUp submit={this.submitForm} />
    )
  }
}

export default UserSignUpContainer;
