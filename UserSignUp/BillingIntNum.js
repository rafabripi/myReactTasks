/**
* @Author: Rafael Bribiesca
* @Date:   2016-09-11T15:59:23-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-11T16:02:08-05:00
*/



import React,{Component} from 'react';
import FieldGroup from '../AppSignUp/FieldGroup';

const BillingIntNum = (props) => {
  return(
    <FieldGroup
      id = "billingIntNum"
      type = "text"
      label = "Internal number"
      placeholder = "Enter internal number of billing address"
      {...props}
    />
  )
}

export default BillingIntNum;
