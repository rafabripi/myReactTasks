/**
* @Author: Rafael Bribiesca
* @Date:   2016-08-14T22:39:53-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-08-23T21:32:25-05:00
*/



import {PageHeader,Grid,Row,Col,FormGroup,ControlLabel,FormControl,HelpBlock, Button} from "react-bootstrap";
import React from "react";
import AppName from "./AppName";
import ContactEmail from "./ContactEmail";
import TermsUrl from "./TermsUrl";
import PrivacyUrl from "./PrivacyUrl";
import RedirectUris from "./RedirectUris";
import PublicKey from "./PublicKey";
import ValidatorBase from "../Validator";


//The client at least at the moment should alway login with FB, gmail o myIndentity
//so the client should be authenticated in order to be able to create an Application.

const AppNameVal = ValidatorBase(AppName);
const ContactEmailVal =  ValidatorBase(ContactEmail);
const TermsUrlVal = ValidatorBase(TermsUrl);
const PrivacyUrlVal = ValidatorBase(PrivacyUrl);
const RedirectUrisVal = ValidatorBase(RedirectUris);
const PublicKeyVal = ValidatorBase(PublicKey);

const AppSignUp = (props) => {
    return(
        <Grid>
        <PageHeader>Client info:<small>show client name</small></PageHeader>
           <form onSubmit={props.submit}>
               <AppNameVal errors={props.errorsFound} onChange={props.handleModel}/>
               <ContactEmailVal errors={props.errorsFound} onChange={props.handleModel} />
               <TermsUrlVal errors={props.errorsFound} onChange={props.handleModel} />
               <PrivacyUrlVal errors={props.errorsFound} onChange={props.handleModel} />
               <RedirectUrisVal errors={props.errorsFound} onChange={props.handleModel} />
               <PublicKeyVal errors={props.errorsFound} onChange={props.handleModel} />

               <Row>
                    <Col xs={12} md={8}>
                      <Button type="submit" bsStyle="primary" bsSize="large" block>Submit</Button>
                    </Col>
                    <Col xs={6} md={4}>
                    </Col>
                </Row>
           </form>
        </Grid>
    )
}


export default AppSignUp;
module.exports.AppNameVal = AppNameVal;
