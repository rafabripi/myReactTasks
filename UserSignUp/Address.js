/**
* @Author: Rafael Bribiesca
* @Date:   2016-08-25T20:08:55-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-11T14:56:56-05:00
*/



import React, {Component} from 'react';
import FieldGroup from '../AppSignUp/FieldGroup';

const Address = (props) => {
  return(
    <FieldGroup
      id = "address"
      type = "text"
      label = "Address : "
      placeholder = "Enter your address"
      {...props}
    />
  )
}
export default Address;
