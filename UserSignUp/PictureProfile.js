/**
* @Author: Rafael Bribiesca
* @Date:   2016-09-28T21:12:51-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-29T23:02:32-05:00
*/

import React, { Component } from 'react';
import ReactDom from "react-dom";
import AvatarCropper from "react-avatar-cropper";
import FileUpload from './FileUpload';

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
  }

  handleRequestHide(){
    this.setState({
      cropperOpen: false
    });
  }

  handleCrop(dataURI){
    this.savePictureProfile(dataURI)
    this.setState({
      cropperOpen: false,
      img: null,
      croppedImg: dataURI
    });
  }

  handleFileChange (dataURI) {
    this.setState({
      img: dataURI,
      croppedImg: this.state.croppedImg,
      cropperOpen: true
    })
  }

  savePictureProfile(dataURI){
    console.log("saving... please wait");
    console.log(dataURI);
    
  }

  render() {
    return (
      <div>
          <div className="avatar-photo">
            <FileUpload handleFileChange={this.handleFileChange} />
            <div className="avatar-edit">
              <span>Click to Pick Avatar</span>
              <i className="fa fa-camera"></i>
             </div>
            <img src={this.state.croppedImg} />
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
