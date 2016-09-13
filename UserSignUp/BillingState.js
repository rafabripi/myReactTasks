/**
* @Author: Rafael Bribiesca
* @Date:   2016-09-11T20:01:39-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-11T20:07:29-05:00
*/



import React,{Component} from 'react';
import FieldGroup from '../AppSignUp/FieldGroup';

const BillingState = (props) => {
  return(
    <FieldGroup
      id = "billingState"
      type = "text"
      label = "State"
      placeholder = "Enter state of billing address"
      {...props}
    />
  )
}

export default BillingState;
