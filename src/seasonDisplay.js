import './SeasonDisplay.css'
import React from 'react'


const seasonConfig = {
    summer:{
        text:'lets hit the beach',
        iconName:'sun'
    },
    winter:{
        text:'Burr it it cold',
        iconName:'snowflake'
    }
}


const getSeason = (lat,month)=>{
    console.log(lat)
    if(month>2 && month < 9){
        return lat > 0 ? 'summer':'winter'
    } else {
        return lat < 0 ? 'winter':'summer'
    }
}

const SeasonDisplay = (props)=>{
    const season = getSeason(props.lat,new Date().getMonth())
    // const text = season==='winter'?'Burr, it is chilly':'Lets hit the beach'
    // const icon = season==='winter'?'snowflake' : 'sun'
    const {text,iconName} = seasonConfig[season]
    return(
        <div className={`season-display ${season}`}>
            <i className={`massive icon-left ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`massive icon-right ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay