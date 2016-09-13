/**
* @Author: Rafael Bribiesca
* @Date:   2016-08-25T20:04:06-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-08-25T22:32:26-05:00
*/

import React, {Component} from 'react';
import FieldGroup from '../AppSignUp/FieldGroup';

const DateBirth = (props) => {
  return(
    <FieldGroup
      id = "dateBirth"
      type = "text"
      label = "Date of birth : "
      placeholder = "e.g. 16/02/1988"
      {...props}
    />
  )
}
export default DateBirth;
