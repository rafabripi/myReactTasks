/**
* @Author: Rafael Bribiesca
* @Date:   2016-10-13T20:40:24-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-10-13T20:46:23-05:00
*/



import React, {Component} from 'react';
import FieldGroup from '../AppSignUp/FieldGroup';

const SocialFacebook = (props) => {
  return(
    <FieldGroup
      id = "socialFacebook"
      type = "text"
      label = "Facebook"
      placeholder = "Facebook URL"
      {...props}
    />
  )
}

export default SocialFacebook;
