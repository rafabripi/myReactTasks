import React,{Component} from "react";
import FieldGroup from "./FieldGroup";


const TermsUrl = (props) => {	
	return(
		<FieldGroup
                id="termsUrl"
                type="text"
                label="Terms of Service URL"
                placeholder="Terms of service URL ex. http(s):\\yourCompany\terms"
                {...props}
           	/>
	)	
}

export default TermsUrl;

