import React,{Component} from "react";
import FieldGroup from "./FieldGroup";


const AppName = (props) => {
	return(
		<FieldGroup
                        id="appName"
                        type="text"
                        label="Display name"
                        placeholder="Your app name"
                        {...props}
                      />
	)
}
export default AppName;
