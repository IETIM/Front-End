import React from 'react';
import axios from 'axios';
import { getUrl } from '../../vars';

export default class PaySuccess extends React.Component {

    componentDidMount(){
        let url = getUrl();
        console.log(window.location.pathname);
        let token = localStorage.getItem("token");
        const headers = {
            Authorization:
              token,
          };
        axios.get(url+'/pay/success'+ (window.location.search),{headers:headers})
          .then(function (response) {
            console.log(response);
            window.location.href = "/";
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  
    }
    render(){
        return(
            <>
                <h1>Pago Exitoso!</h1>
                <h2>Serás redirigido a la pagina principal ;)</h2>
            </>
        );
    }
}