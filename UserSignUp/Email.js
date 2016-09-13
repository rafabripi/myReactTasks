/**
* @Author: Rafael Bribiesca
* @Date:   2016-08-25T20:12:35-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-12T21:53:47-05:00
*/



import React, {Component} from 'react';
import FieldGroup from '../AppSignUp/FieldGroup';

const Email = (props) => {
  return(
    <FieldGroup
      id = "email"
      type = "text"
      label = "Email : "
      placeholder = "Enter yor email address"
      {...props}
    />
  )
}
export default Email;
