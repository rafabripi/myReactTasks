/**
* @Author: Rafael Bribiesca
* @Date:   2016-09-28T21:12:51-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-10-09T22:35:33-05:00
*/
import {Image} from 'react-bootstrap';
import React, { Component } from 'react';
import ReactDom from "react-dom";
import AvatarCropper from "react-avatar-cropper";
import FileUpload from './FileUpload';
import HttpFactory from "../../httpCalls/myIdentity.httpCalls";
import "./pictureProfile.css";

class PictureProfile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cropperOpen: false,
      img: null,
      croppedImg: "https://avatars0.githubusercontent.com/u/3184718?v=3&s=400"
		}
    this.handleRequestHide = this.handleRequestHide.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleCrop = this.handleCrop.bind(this);
    this.savePictureProfile = this.savePictureProfile.bind(this);
  }

  handleRequestHide(){
    this.setState({
      cropperOpen: false
    });
  }

  async handleCrop(dataURI){
     await this.savePictureProfile(dataURI)
    if (this.state.error === "hasError"){
      this.setState({
        cropperOpen: false,
      });
    }
    else {
      this.setState({
        cropperOpen: false,
        img: null,
        croppedImg: dataURI
      });
    }
  }

  handleFileChange (dataURI) {
    this.setState({
      img: dataURI,
      croppedImg: this.state.croppedImg,
      cropperOpen: true
    })
  }

  async savePictureProfile(dataURI){
    const superAgentClient = HttpFactory.createSuperAgentClient();
    const dbClient = HttpFactory.create(superAgentClient);

    try {
      await dbClient.savePictureProfile(dataURI);
      console.log("Saved!");
    } catch (e) {
      console.log(e);
       alert("Oh! Sorry something it's going wrong, please retry later");
       this.setState({
         error: "hasError"
       });
    } finally {
      //console.log(dataURI);
    }
  }

  render() {
    return (
      <div>
          <div className="avatar-photo">
            <FileUpload handleFileChange={this.handleFileChange} />
            <div className="avatar-edit">
              <p className="glyphicon glyphicon-camera"></p>
              <span className="glyphicon">Select profile picture</span>
              <i className="glyphicon"></i>
             </div>
            <Image src={this.state.croppedImg} responsive/>
          </div>

          {this.state.cropperOpen &&
          <AvatarCropper
            onRequestHide={this.handleRequestHide}
            cropperOpen={this.state.cropperOpen}
            onCrop={this.handleCrop}
            image={this.state.img}
            width={200}
            height={200}
          />}
      </div>
    );
  }
}


export default PictureProfile;
