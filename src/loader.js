
import React from 'react'

const Loader = (props)=>{
    return(
            <div className="ui active dimmer">
                <div className="ui large text loader">{props.message}</div>
            </div>
        
    )
}

//setting up the default props for the functional components
Loader.defaultProps = {
    message:'Loading....'
}

export default Loader