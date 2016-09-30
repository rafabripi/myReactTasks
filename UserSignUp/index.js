/**
* @Author: Rafael Bribiesca <rafabripi>
* @Date:   2016-08-18T21:58:44-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-28T22:27:06-05:00
*/

import {Button, Glyphicon, PageHeader, Grid, Navbar, Thumbnail, Media, Collapse, Well, FormControl, FoldingCube} from 'react-bootstrap';
import React from 'react';
import PictureProfile from './PictureProfile';

import UserName from './UserName';
import NickName from './NickName';
import Email from './Email';
import DateBirth from './DateBirth';
import Address from './Address';

import BillingName from './BillingName';
import BillingCountry from './BillingCountry';
import BillingStreet from './BillingStreet';
import BillingExtNum from './BillingExtNum';
import BillingIntNum from './BillingIntNum';
import BillingZip from './BillingZip';
import BillingState from './BillingState';
import BillingCity from './BillingCity'
import ValidatorBase from "../Validator";

const UserNameVal = ValidatorBase(UserName);
const NickNameVal = ValidatorBase(NickName);
const EmailVal = ValidatorBase(Email);
const DateBirthVal = ValidatorBase(DateBirth);
const AddressVal = ValidatorBase(Address);

const BillingNameVal = ValidatorBase(BillingName);
const BillingCountryVal = ValidatorBase(BillingCountry);
const BillingStreetVal = ValidatorBase(BillingStreet);
const BillingExtNumVal = ValidatorBase(BillingExtNum);
const BillingIntNumVal = ValidatorBase(BillingIntNum);
const BillingZipVal = ValidatorBase(BillingZip);
const BillingStateVal = ValidatorBase(BillingState);
const BillingCityVal = ValidatorBase(BillingCity);

const UserSignUp = (props) => {
  return(
    <Grid>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">

            <Media.Body>
            <PageHeader>
              Join Us
            </PageHeader>
            </Media.Body>
            <Media.Right align="middle">
              <PictureProfile />
            </Media.Right>


        </div>
        <div className="col-md-2"></div>
      </div>

      <form onSubmit={props.submit}>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="col-md-2"></div>
          <div className="btn-group col-xs-12 col-md-8" role="group" aria-label="...">
            <button type="submit" className="btn btn-md btn-primary glyphicon glyphicon-floppy-save navbar-btn"> Save</button>
          </div>
          <div className="col-md-2"></div>
        </nav>

        <EmailVal errors={props.errorsFound} onChange={props.handleModel}/>
        <UserNameVal  errors={props.errorsFound} onChange={props.handleModel}/>
        <NickNameVal errors={props.errorsFound} onChange={props.handleModel}/>
        <DateBirthVal errors={props.errorsFound} onChange={props.handleModel}/>
        <AddressVal errors={props.errorsFound} onChange={props.handleModel}/>

        <div className="row">
          <div className="col-md-2"></div>
          <div className= "col-xs-12s col-md-8">
            <Button btn-block type="button" onClick={props.showBilling} className={props.ChangeIco} > Billing information
            </Button>
          </div>
          <div className="col-md-2"></div>
        </div>

        <Collapse in={props.open}>
            <Well>
              <BillingNameVal errors={props.errorsFound} onChange={props.handleModel}/>
              <BillingCountryVal errors={props.errorsFound} onChange={props.handleModel}/>
              <BillingStreetVal errors={props.errorsFound} onChange={props.handleModel}/>
              <BillingExtNumVal errors={props.errorsFound} onChange={props.handleModel}/>
              <BillingIntNumVal errors={props.errorsFound} onChange={props.handleModel}/>
              <BillingZipVal errors={props.errorsFound} onChange={props.handleModel}/>
              <BillingStateVal errors={props.errorsFound} onChange={props.handleModel}/>
              <BillingCityVal errors={props.errorsFound} onChange={props.handleModel}/>
            </Well>
        </Collapse>
      </form>

      <footer>
        <p>&reg; 2016 myIndentity, Inc.</p>
      </footer>

    </Grid>
  )
}


export default UserSignUp;
module.exports.UserSignUp = UserName;
