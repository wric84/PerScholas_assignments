// import '../App.css'
// import React from 'react'
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room, Star } from '@material-ui/icons';
import axios from 'axios'

function MapItenerary() {
    const currentUser = "wric84"
    const [pins, setPins] = useState([])
    const [currentPlaceId, setCurrentPlaceId] = useState(null)
    const [newPlace, setNewPlace] = useState(null)
    const [name, setName] = useState(null)
    const [city, setCity] = useState(null)
    const [_state, set_State] =useState(null)
    // const [desc, setDesc] = useState(null)
    const [rating, setRating] = useState(0)
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 40.78111956237897,
        longitude: -73.96643184289792,
        zoom: 10
    });

    useEffect(() => {
        const getPins = async () => {
            axios("http://localhost:8080/api/attractions").then(({ data }) => {
                setPins(data)
                console.log(data)
            }).catch((error)=>console.log(error))
        }
    getPins()
    }, [])

    const handleMarkerClick = (id, latitude, longitude)=>{
        setCurrentPlaceId(id)
        setViewport({...viewport, latitude, longitude})
    }

    const handleAddClick =(e)=>{
        console.log(e)
        const [longitude, latitude] = e.lngLat
        setNewPlace({
            longitude,
            latitude,
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const newPin = {
            name,
            latitude:newPlace.latitude,
            longitude:newPlace.longitude,
            location: {city,state:_state},
            
        }
        try{
            const res = await axios.post("http://localhost:8080/api/attractions", newPin)
            setPins([...pins, res.data])
            //So when I reset map it doesn't automatically show me the form submit again
            setNewPlace(null)
        }catch(err){
            console.log(err)
        }
    }

    const handleDelete = (i)=>{
        axios.delete(`http://localhost:8080/api/attractions/${pins[i].id}`)
        console.log(pins[i])
        pins.splice(i,1)
        setPins([...pins])
    }

    return (
        <>
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapStyle="mapbox://styles/wric84/ckqh8gn150rqm17pe7kpj5p8v"
            onDblClick={handleAddClick}
            transitionDuration="200"
        >  
            {pins.map((p,index) => (
                <div key={index}>
                    <Marker
                        onDblClick={handleDelete}
                        latitude={p.latitude}
                        longitude={p.longitude}
                        offsetLeft={-20}
                        offsetTop={-10}>
                        <Room 
                            style={{ fontSize: viewport.zoom * 3, color: p.username=== currentUser? "gold": "magenta", cursor:"pointer" }} 
                            onClick={()=>handleMarkerClick(p.id, p.latitude, p.longitude)}
                        />
                    </Marker>
                    {p.id === currentPlaceId && (
                    <Popup
                        latitude={p.latitude}
                        longitude={p.longitude}
                        closeButton={true}
                        closeOnClick={false}
                        anchor="left" 
                        onClose={()=>setCurrentPlaceId(null)}
                        className="popup"
                    >
                    <div id="card">
                    <label>Place</label>
                    <h4 className="place">{p.name}</h4>
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
                    <button className="formButton" onClick={()=>handleDelete(index)}>Delete</button>
                </div>
            </Popup>
            )}
            </div>
            ))}
            {newPlace && (
            <Popup
                        latitude={newPlace.latitude}
                        longitude={newPlace.longitude}
                        closeButton={true}
                        closeOnClick={false}
                        anchor="left" 
                        onClose={()=>setNewPlace(null)}
            >
                <div>
                    <form onSubmit = {handleSubmit}>
                        <label>Name</label>
                        <input placeholder="Enter a Name" 
                        onChange={(e)=>setName(e.target.value)}
                        />
                        <label>City</label>
                        <input placeholder="Enter City Name" 
                        onChange={(e)=>setCity(e.target.value)}
                        />
                        <label>State</label>
                        <input placeholder="Enter the State Name" 
                        onChange={(e)=>set_State(e.target.value)}
                        />
                        <label>Review</label>
                        <textarea placeholder="Write a Review"></textarea>
                        {/* onChange={(e)=>setDesc(e.target.value)} */}
                        <label>Rating</label>
                        <select onChange={(e)=>setRating(e.target.value)}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button className="submitButton" type="submit">Add Pin</button>
                    </form>
                </div>
            </Popup>
            )}
        </ReactMapGL>
        </>
    );

}

export default MapItenerary