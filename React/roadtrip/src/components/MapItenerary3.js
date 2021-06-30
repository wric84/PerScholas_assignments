// import '../App.css'
/*import React from 'react'
import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import {Room, Star} from '@material-ui/icons';



function MapItenerary() {
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 40.78111956237897, 
        longitude: -73.96643184289792,
        zoom: 10
      });
    
      return (
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          onViewportChange={nextViewport => setViewport(nextViewport)}
          mapStyle="mapbox://styles/wric84/ckqh8gn150rqm17pe7kpj5p8v"
        >
            <Marker 
                latitude={40.78111956237897} 
                longitude={-73.96643184289792} 
                offsetLeft={-20} 
                offsetTop={-10}>
                <Room style={{fontSize:viewport.zoom * 3, color:"magenta"}}/>
            </Marker>
            <Popup
                latitude={40.78111956237897}
                longitude={-73.96643184289792}
                closeButton={true}
                closeOnClick={false}
                anchor="left" >
                <div className="card">
                    <label>Place</label>
                    <h4 className="place">Central Park</h4>
                    <label>Review</label>
                    <p className="desc">So many things to see!</p>
                    <label>Rating</label>
                    <div className="stars">
                    <Star className="star"/>
                    <Star className="star"/>
                    <Star className="star"/>
                    <Star className="star"/>
                    <Star className="star"/>
                    </div>
                    <label>Information</label>
                    <span className="username">Created by <b>wric84</b></span>
                    <span className="date">1hr ago</span>
                </div>
            </Popup>
      </ReactMapGL>
      );
    
}

export default MapItenerary*/
