import React from 'react';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import { Link, BrowserRouter } from 'react-router-dom';
import Axios from 'axios';
import { getUrl } from '../../vars';

class MapPlace extends React.Component{
    constructor(props){
        super(props);
        this.state= {lat:0,lng:0,place:'',near:[],loadLocation:false,showInfo:false,marker:null,msg:null,url:null};
        this.updateCords=this.updateCords.bind(this);
        this.updatePlace = this.updatePlace.bind(this);
    }

    clicMap=()=>{
        this.setState({
            showInfo:false,
            marker:null
        })
    }
    
    clicMarker=(prop,marker,e)=>{
        this.setState({
            showInfo:true,
            marker:marker
        })
    }

    render() {
        console.log(this.state.loadLocation);
        var lat = this.state.lat;
        var lng = this.state.lng;
        console.log("lat "+lat);
        console.log("lat "+lng);
        return (
        <React.Fragment>
          <Map google={this.props.google} style={{width:'100%',height:'50%'}}
          onClick={this.clicMap}
          center={{
            lat: lat,
            lng: lng
          }}
          
          zoom={10}>
     
            <Marker
            icon={{
                url:"https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }}
            onClick={(prop,marker,e)=>{
                this.clicMarker(prop,marker,e);
                this.setState({
                    msg:"Yo"
                });
            }}
                position={{
                    lat: lat,
                    lng: lng
                }}
                    name={'Current location'} />

                {this.state.near.map((place=><Marker
                onClick={(prop,marker,e)=>{
                    this.clicMarker(prop,marker,e);
                    this.setState({
                        msg:place.name
                    });
                }}
                position={{
                    lat:place.lat,
                    lng:place.lng
                }}

                />))}
                <InfoWindow
                visible={this.state.showInfo}
                marker={this.state.marker}
                >
                    <div>
                        <h1>{this.state.msg}</h1>
                    </div>
                </InfoWindow>
          </Map>
          </React.Fragment>
        );
      }

    updatePlace(place){
        ReactDOM.render(<div style={{textAlign:"center",color:"white"}}>{place.name}</div>,
                    document.getElementById("dataPlace"));
    }

    updateCords(pos){
        console.log("Posoiton");
        console.log(pos);

        this.state.lat = pos.coords.latitude;
        this.state.lng = pos.coords.longitude;
        this.state.loadLocation = true;
        this.setState(this.state);

    }

    updateStores = async (stores)=>{
        for(var i=0;i<stores.length;i++){
            try {
                var data = await Axios.get("https://geocode.search.hereapi.com/v1/geocode?q="+stores[i].location+"&apiKey=0aizyNbKZY4J9HTyfyGWqiIltD1mmBqxngImkcvaBS8");
                console.log(data.data);
                stores[i].lng = data.data.items[0].position.lng;
                stores[i].lat = data.data.items[0].position.lat;
                this.state.near = stores;}
            catch(e){
                console.log(e);
            }   
        }
    }

    async componentWillMount(){
        var fun = this.updateStores;
        var url = getUrl();
        const data = await Axios.get(url+"/shops");
        console.log("ComponentWillMound");
        console.log(data);
        await fun(data.data);
        navigator.geolocation.getCurrentPosition((pos)=>this.updateCords(pos));
    }
}

export default GoogleApiWrapper({
    apiKey: ""
  })(MapPlace)