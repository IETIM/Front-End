import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export default class MapPlace extends React.Component{
    constructor(props){
        super(props);
        this.state= {lat:null,lng:null};
        this.updateCords=this.updateCords.bind(this);
    }
    render(){
        if(this.state.lat==null){
            //Mientras pide permisos
            return(<div id="data">loading ....</div>);
        }else{
            //A Graficar
            const Map = withScriptjs(withGoogleMap((props) =>
                <GoogleMap
                    defaultZoom={10}
                    defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
                >
                    {props.children}
                </GoogleMap>
                ));
            return(
                <Map
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `300px`,width:'100%'}} />}
                    mapElement={<div style={{ height: `100%` }} />}>
                        <Marker position={{lat:this.state.lat,lng:this.state.lng}}/>
                    </Map>);
        }
    }

    updateCords(pos){
        //Actualiza coordenadas
        this.state.lat=pos.coords.latitude;
        this.state.lng=pos.coords.longitude;
        this.setState(this.state);
    }

    componentWillMount(){
        //LoadMyPosition
        navigator.geolocation.getCurrentPosition((pos)=>this.updateCords(pos));
    }
}