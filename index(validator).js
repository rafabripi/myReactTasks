/**
* @Author: Rafael Bribiesca
* @Date:   2016-08-14T22:39:53-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-12T22:46:59-05:00
*/



import React,{Component} from "react";
import ReactDOM from 'react-dom';
import {Grid,Row,Col,OverlayTrigger,Overlay, Tooltip} from "react-bootstrap";
import "./validator.css";

import R from "ramda";
const ValidatorBase = (Cmp) => class extends Component{
	constructor(props){
		super(props);
	}
	hasErrors(){
		return this.props.errors[this.state.validatorName] ? true : false;
	}
	getError(){
		return this.props.errors[this.state.validatorName];
	}
	componentWillMount(){
		const validatorName = this.getComponentId();
		this.setState({validatorName:validatorName});
	}
	getComponentId(){
		return Cmp().props.id;
	}
	getValidatorName(){
		const name = Cmp.name;
		const fstLetter = R.head(name).toLowerCase();
		const nameTail =R.tail(name);
		return R.concat(fstLetter,nameTail);

	}
	render(){
		return (
			<Row>
						<Col xs={6} md={2}></Col>
			      <Col xs={12} md={8} >
			      	<Cmp onChange={this.props.onChange}/>
			      </Col>
			      <Col xs={6} md={2} className="errorlbl">
			      	<p className={this.hasErrors() ? "showErr" : "noErr"}>{this.getError()}</p>
			      </Col>
			</Row>
		)
	}
}

export default ValidatorBase;
