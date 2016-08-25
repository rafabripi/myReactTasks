import React,{Component} from "react";
import FieldGroup from "./FieldGroup";


const RedirectUris = (props) => {
	
	return(
		<FieldGroup
                        id="redirectUris"
                        type="text"
                        label="Redirect URL"
                        placeholder="Redirect URL ex. [http(s):\\yourCompany,http:\\....]"
                        {...props}
                   	/>
	)
	
}

export default RedirectUris;
              
