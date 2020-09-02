import React from 'react';
import {Mytext} from './Mytext';
import {Image} from './Image';
import './Image.css'

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props)

  }

  render(){

    return(
      <div style={{display:'flex',alignItems:'center',justifyContent:'center', height:'100%',width:'100%',backgroundImage: 'linear-gradient(135deg, #08185B, #949CBC)'}}>
        
        <div style={{height:'500px',background:'white'}}>
          <div className='slide-in' style={{width:'100%', height:'45%',background:'#90caf9',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px',animation:'slide'}}>
              <Image>
                
              </Image>
          </div>
          <Mytext 
          id="username" 
          field="username"
          title="Username"> 
          </Mytext>
          <Mytext

          id="email" 
          field="email"
          title="E-mail">
            
          </Mytext>

          <Mytext
          id="address" 
          field="address"
          title="Address">

          </Mytext >  
          <Mytext
          id="creditsCard" 
          field="creditsCard" 
          title="CreditCard Number"> 

          </Mytext>
          <Mytext
          id="cellphone" 
          field="cellphone"
          title="Cellphone">
          </Mytext>
          </div>
          
      </div>
    );
  }
 
}