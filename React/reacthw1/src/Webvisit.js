import React from 'react'

const stonk = 'https://i.ytimg.com/vi/if-2M3K1tqk/maxresdefault.jpg'

class Websitevisit extends React.Component{
    render(){
        return(
            <div className="Websitevisit">
                <h1>Website Visits</h1>
                <h3>{this.props.visits}</h3>
                <img src={stonk}/>
            </div>
        );
    }
}
export default Websitevisit