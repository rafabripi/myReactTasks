/**
* @Author: Rafael Bribiesca
* @Date:   2016-09-28T22:10:29-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-28T22:24:53-05:00
*/



import React,{Component} from 'react';
import ReactDom from "react-dom";

class FileUpload extends Component {
  constructor(props){
    super(props);
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    var reader = new FileReader();
    var file = e.target.files[0];

    if (!file) return;

    reader.onload = function(img) {
      ReactDom.findDOMNode(this.refs.in).value = '';
      this.props.handleFileChange(img.target.result);
    }.bind(this);
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
    );
  }
}

export default FileUpload;
