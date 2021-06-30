import {useEffect, useState} from 'react'
import axios from 'axios'
import Location from './Location'

//nested destructure describing how the object works and retrieving what we want
function Attraction({match:{params:{id}}}) {
    const [attraction, setAttraction] = useState()
    useEffect(()=>{
        //.then(({data})) = destructor data retrieved
        axios(`http://localhost:8080/api/attractions/${id}`).then(({data})=>{
            setAttraction(data)
        })
        console.log(id)
    },[])
    return (
        //nullsave if want I want is null, then I wont access it.
        <div>
            name:{attraction?.name}
            <Location city={attraction?.location.city} state={attraction?.location.state}/>
        </div>
    )
}

export default Attraction
