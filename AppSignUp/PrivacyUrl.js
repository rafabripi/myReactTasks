import React,{Component} from "react";
import FieldGroup from "./FieldGroup";


const PrivacyUrl = (props) =>{
	
	return(
		<FieldGroup
                id="privacyUrl"
                type="text"
                label="Privacy Policy URL"
                placeholder="Privacy policy URL ex. http(s):\\yourCompany\privacy"
                {...props}
           	/>
	)
	
}

export default PrivacyUrl;
              