import "./UploadPhoto.css";

import {Component} from 'react';

import storage from "../../../firebase";

class UploadPhoto extends Component {
    constructor(props) {
      super(props);

      this.state = {
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        url: "",
        progress: 0
      };
  
    }



    handleUpload = () => {
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            // progress function ...
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({ progress });
          },
          error => {
            // Error function ...
            console.log(error);
          },
          () => {
            // complete function ...
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                this.setState({ url });
              });
          }
        );
      };
    
  
    onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        
        this.setState({
          image: URL.createObjectURL(img)
        });
      }
    };
  

    render() {
      return (

            <div className="upP-profile">
              <img src={this.state.image} />
              <h1>Choose Your Avatar</h1>
              <input type="file" name="myImage" onChange={this.onImageChange}/>
              <button onClick={this.handleUpload}> Select from storage</button>
            </div>
      );
    }
  }

  export default UploadPhoto;