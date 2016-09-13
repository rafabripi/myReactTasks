/**
* @Author: Rafael Bribiesca
* @Date:   2016-08-14T22:39:53-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-12T21:57:13-05:00
*/



import React from "react";
import {FormGroup,ControlLabel,FormControl,HelpBlock} from "react-bootstrap";

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default FieldGroup;
