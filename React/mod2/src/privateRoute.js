import React from 'react'
import { Redirect, Route } from 'react-router'

export default function PrivateRoute({component:Component, auth, redirect='/Login', path}) {
    return (
        <Route path={path} render={()=>{
            console.log(auth)
            if (auth){
                return <Component/>
            }else{
                return <Redirect to={redirect}/>
            }
        }}/>
    )
}
