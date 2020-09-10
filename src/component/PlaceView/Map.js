import React from 'react';
import ReactDOM from 'react-dom';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import { Link, BrowserRouter } from 'react-router-dom';

export default class MapPlace extends React.Component{
    constructor(props){
        super(props);
        this.state= {lat:null,lng:null,place:'',near:[]};
        this.updateCords=this.updateCords.bind(this);
        this.updatePlace = this.updatePlace.bind(this);
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
                <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Map
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `300px`,width:'90%'}} />}
                    mapElement={<div style={{ height: `100%` }} />}>
                        <Marker style={{background:'gray'}} 
                            onClick={()=>this.updatePlace({name:"Yo",link:null})} 
                            icon={{strokeColor:'blue',url:"https://maps.google.com/mapfiles/ms/icons/blue-dot.png",scale:4}}
                            position={{lat:this.state.lat,lng:this.state.lng}}/>

                        {this.state.near.map((place)=> <Marker onClick={()=>this.updatePlace({name:place.name,link:null})} position={{lat:place.lat,lng:place.lng}}/>)}
                    </Map>
                    <div style={{width:'100%',height:'30px',background:'green'}} id="dataPlace">
                        
                    </div>
                    </div>);
        }
    }

    updatePlace(place){
        ReactDOM.render(<div style={{textAlign:"center",color:"white"}}>{place.name}</div>,
                    document.getElementById("dataPlace"));
    }

    updateCords(pos){
        //Actualiza coordenadas
        this.state.lat=pos.coords.latitude;
        this.state.lng=pos.coords.longitude;
        this.state.near.push({lat:pos.coords.latitude+0.09,lng:pos.coords.longitude,name:"Local 1"});
        this.state.near.push({lat:pos.coords.latitude-0.1,lng:pos.coords.longitude,name:"Local 2"});
        this.state.near.push({lat:pos.coords.latitude,lng:pos.coords.longitude+0.04,name:"Local 3"});
        this.state.near.push({lat:pos.coords.latitude+0.05,lng:pos.coords.longitude-0.07,name:"Local 4"});
        this.setState(this.state);

    }

    componentWillMount(){
        //LoadMyPosition
        navigator.geolocation.getCurrentPosition((pos)=>this.updateCords(pos));
    }
}