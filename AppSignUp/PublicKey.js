import React,{Component} from "react";
import {FormGroup,ControlLabel,FormControl,HelpBlock} from "react-bootstrap";


const PublicKey = (props) => {
	return(
		<FormGroup id="keys.public">
                <ControlLabel>Public Key:</ControlLabel>
                <FormControl id="keys.public" componentClass="textarea" placeholder="Your public key RSA 256"
                  {...props}
                />
            </FormGroup>
	)
}

export default PublicKey;
