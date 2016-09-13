/**
* @Author: Rafael Bribiesca
* @Date:   2016-09-11T15:20:56-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-11T15:27:33-05:00
*/



import React,{Component} from 'react';
import FieldGroup from '../AppSignUp/FieldGroup';

const BillingExtNum = (props) => {
  return(
    <FieldGroup
      id = "billingExtNum"
      type = "text"
      label = "External number"
      placeholder = "Enter external number of billing address"
      {...props}
    />
  )
}

export default BillingExtNum;
