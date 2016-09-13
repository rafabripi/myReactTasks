/**
* @Author: Rafael Bribiesca
* @Date:   2016-09-11T20:08:25-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-11T20:12:00-05:00
*/



import React,{Component} from 'react';
import FieldGroup from '../AppSignUp/FieldGroup';

const BillingCity = (props) => {
  return(
    <FieldGroup
      id = "billingCity"
      type = "text"
      label = "City"
      placeholder = "Enter city of billing address"
      {...props}
    />
  )
}

export default BillingCity;
