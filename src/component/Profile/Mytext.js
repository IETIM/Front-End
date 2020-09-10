import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export class Mytext extends React.Component {
    constructor(props){
        super(props);
        this.state = {isEditable : false,person:""};
        this.state.person = {username:"johan",email:"johan@mail.com",creditsCard:"1233-3231-23313",cellphone:"2323232",address:"Kr 9 .."};   
    }

    handleChangeField = (e) => {
        this.state.person[this.props.field] = e.target.value;
        this.setState(this.state)
    }

    handleChangeEditable = () => {
        this.state.isEditable = !this.state.isEditable;
        this.setState(this.state)
    }


    render(){
        return (
        <div>
            <div style={{display: "flex", height:'55px', flexDirection : "raw",borderStyle:'outset'}}>
                <div style={{width:'550px',display:'flex',alignItems:'center',justifyContent:'center'}}>

                <div style={{width:'40%',height:'60%', alignItems:'left',background:'#1976d2',color:'white',textAlign:'center'}}>
                    <label >
                        {this.props.title}
                    </label>
                </div>
                <div style={{width:'50%',paddingLeft: '50px'}}>
                { this.state.isEditable ? 
                <TextField 
                    value = {this.state.person[this.props.field]}
                    type="text"
                    onChange={(e) => this.handleChangeField(e)}
                >
                </TextField>: 
                <label>
                    {this.state.person[this.props.field]}
                </label>
                }
                </div>
                </div>
                <div>
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={()=> {this.handleChangeEditable()}}>
                        {this.state.isEditable ? "Save" : "Edit"}
                    </Button>
                </div>

            </div>
        </div>
        );

    }



}