import React from 'react'
import './VideosRow.css'
function VideosRow(props) {
    return (
        <div className='VideosRow'>
            <img alt=''src={props.image}/>
            <div className='VideosRow__Text' >
                <h3> {props.title}</h3>
                <p className='VideosRow__headline'> 
                {props.channel} <span className='VideosRow__subsNumber'> - {props.subs}</span> subcribers {props.views}
                 - {props.timestampe} </p>
                <p className='VideosRow__description'> {props.dic} </p>
            </div>
        </div>
    )
}

export default VideosRow
