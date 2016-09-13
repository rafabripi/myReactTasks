/**
* @Author: Rafael Bribiesca
* @Date:   2016-09-11T16:20:01-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-11T16:24:22-05:00
*/



import React,{Component} from 'react';
import FieldGroup from '../AppSignUp/FieldGroup';

const BillingZip = (props) => {
  return(
    <FieldGroup
      id = "billingZip"
      type = "text"
      label = "ZIP code"
      placeholder = "Enter ZIP code of billing address"
      {...props}
    />
  )
}

export default BillingZip;
