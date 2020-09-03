import React from 'react'
import './Image.css'


const ImgUpload =({
    onChange,
    src,
  })=>{
    return(
      <label for="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload" >
          <img for="photo-upload" src={src}/>
        </div>
        <input id="photo-upload" type="file" onChange={onChange}/> 
      </label>
    );
  }

export class Image extends React.Component{
    constructor(props){
        super(props);
        this.state = {file:"",imagePreviewUrl:""};
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleImageChange(e) {

        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        if (file) {
            reader.onloadend = () => {
                this.setState({
                file: file,
                imagePreviewUrl: reader.result
                });
            }
            reader.readAsDataURL(file);
        }

    }

    render(){
        const {imagePreviewUrl} = this.state;
     
        return(
            //<Input 
            //autoComplete
            //autoFocus
            //type="file"
            //onChange= {(e)=>this.handleImageChange(e)}>
            <ImgUpload onChange={(e)=>this.handleImageChange(e)} src={imagePreviewUrl}/>
            //</Input>
        );
    }

}