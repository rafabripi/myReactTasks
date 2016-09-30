/**
* @Author: Hosarsiph Valle Hernández <hosar>
* @Date:   2016-08-14T20:55:11-05:00
* @Email:  hosarsiph.valle@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-29T23:26:06-05:00
* @License: copyright be-p technology
*/



"use strict";
import $superagent from 'superagent';
import $consts from "../common/myIdentity.constants";

class HttpCalls{

	constructor(apiClient){
		console.log("------------apiClient------------");
		console.log(apiClient);
		this.httpApi = apiClient;
	}

	saveApplicacion(appInfo){
		console.log($consts.saveApplication);
		return this.httpApi.post($consts.saveApplication, appInfo);
	}

	saveUserProfile(appInfo){
		console.log($consts.saveUserProfile);
		console.log(appInfo);
		return this.httpApi.post($consts.saveUserProfile, appInfo);
	}

	savePictureProfile(dataURI){
		return this.httpApi.post($consts.savePictureProfile, dataURI);
	}

	getUsrProfile(){
		return this.httpApi.get($consts.apiMe).withCredentials();
	}

	facebookLogin(){
		console.log($consts.facebookLogin);
		return this.httpApi.get($consts.facebookLogin);
	}
}

class HttpFactory{
	static create(apiClient) {
  		return new HttpCalls(apiClient);
	}
	static createSuperAgentClient() {
		const httpApi =  $superagent;
	  	return httpApi;
	}
}



export default HttpFactory;
