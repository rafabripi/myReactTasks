/**
* @Author: Rafael Bribiesca
* @Date:   2016-09-06T22:08:29-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-06T22:54:33-05:00
*/



import React,{Component} from 'react';
import FieldGroup from "../AppSignUp/FieldGroup";

const BillingName = (props) => {
  return(
    <FieldGroup
      id = "billingName"
      type = "text"
      label = "Billing contact"
      placeholder = "Name of your billing contact"
      {...props}
    />
  )
}

export default BillingName;
