import React from 'react';
import ReactDOM from 'react-dom';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import { Link, BrowserRouter } from 'react-router-dom';
import Axios from 'axios';

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
                            icon={{strokeColor:'blue',url:"https://maps.google.com/mapfiles/ms/icons/blue-dot.png",scale:10}}
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
        this.state.lat=pos.coords.latitude;
        this.state.lng=pos.coords.longitude;

        this.setState(this.state);

    }

    updateStores = async (stores)=>{
        for(var i=0;i<stores.length;i++){
            var data = await Axios.get("https://geocode.search.hereapi.com/v1/geocode?q="+stores[i].location+"&apiKey=0aizyNbKZY4J9HTyfyGWqiIltD1mmBqxngImkcvaBS8");
            console.log(data.data);
            stores[i].lng = data.data.items[0].position.lng;
            stores[i].lat = data.data.items[0].position.lat;
        }
        this.state.near = stores;
    }

    async componentWillMount(){
        var fun = this.updateStores;
        const data = await Axios.get("https://ieti-deep-backend.herokuapp.com/shops")
        await fun(data.data);
        navigator.geolocation.getCurrentPosition((pos)=>this.updateCords(pos));
    }
}