import React,{Component} from "react";
import FieldGroup from "./FieldGroup";


const ContactEmail  = (props) => {	
	return(
		<FieldGroup
                id="contactEmail"                
                type="text"
                label="Email"
                placeholder="Contact email"
                {...props}
              />
	)
}

export default ContactEmail;

