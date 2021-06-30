import {useState, useEffect} from 'react'
import axios from 'axios'
import bootstrap from 'react-bootstrap'
import Location from './Location'

function LocationList() {
    const [locations, setLocations] = useState([])
    useEffect(() => {
        axios("http://localhost:8080/api/location").then(({data})=>{
            setLocations(data)
        })
    }, [])
    return (
        <div>
            {locations.map(n=><Location city={n.city} state={n.state}/>)} 
        </div>
    )
}

export default LocationList
