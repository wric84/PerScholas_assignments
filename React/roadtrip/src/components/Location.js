import React from 'react'

function Location({city, state}) {
    return (
        <div>
            state: {state}<br/>
            city: {city}
        </div>
    )
}

export default Location
