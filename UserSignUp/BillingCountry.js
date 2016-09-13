/**
* @Author: Rafael Bribiesca
* @Date:   2016-09-11T11:17:39-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-11T15:00:45-05:00
*/



import React,{Component} from 'react';
import FieldGroup from '../AppSignUp/FieldGroup';

const BillingCountry = (props) => {
  return(
    <FieldGroup
      id = "billingCountry"
      type = "text"
      label = "Country : "
      placeholder = "Enter billing country"
      {...props}
    />
  )
}

export default BillingCountry;
