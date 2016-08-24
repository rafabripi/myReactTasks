/**
* @Author: Rafael Bribiesca
* @Date:   2016-08-21T22:47:46-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-08-23T20:13:00-05:00
*/



import React,{Component} from 'react';
import FieldGroup from "../AppSignUp/FieldGroup";

const UserName = (props) => {
  return(
    <FieldGroup
      id="userName"
      type="text"
      label="Name :"
      placeholder="Enter your name here"
      {...props}
    />
  )
}

export default UserName;
