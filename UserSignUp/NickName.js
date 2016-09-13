/**
* @Author: Rafael Bribiesca
* @Date:   2016-08-25T19:57:53-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-08-25T20:03:26-05:00
*/



import React,{Component} from 'react';
import FieldGroup from '../AppSignUp/FieldGroup';

const NickName = (props) => {
  return(
    <FieldGroup
      id = "nickName"
      type = "text"
      label = "Nick Name : "
      placeholder = "Enter your nick name"
      {...props}
     />
  )
}
export default NickName;
