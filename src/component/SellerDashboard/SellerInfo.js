import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import logo from './../../logo.svg';

export class SellerInfo extends React.Component{

    render(){
          return <div style={{height:'100%', width:'auto',
          border:'1px solid black',
          margin: '5px',
          padding: '10px'
          }}>              
              <h3>Lorem ipsum dolor sit amet</h3>
              <CardMedia style={{height:'30%', width:'auto',
                border:'1px solid black'}}
                image={logo}
            />

            <h5>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h5>
        </div>
        
        
    }

}