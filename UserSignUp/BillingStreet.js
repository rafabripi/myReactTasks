/**
* @Author: Rafael Bribiesca
* @Date:   2016-09-11T14:40:22-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-11T15:04:25-05:00
*/



import React,{Component} from 'react';
import FieldGroup from '../AppSignUp/FieldGroup';

const BillingStreet = (props) => {
  return(
    <FieldGroup
      id = "billingStreet"
      type = "text"
      label = "Street"
      placeholder = "Enter billing street"
      {...props}
    />
  )
}

export default BillingStreet;
