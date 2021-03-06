import { Avatar } from '@material-ui/core'
import React from 'react'
import './Videocard.css'
let Videocard = ({image,channelImage,title,channel,view,timestampe}) => {
    return (
        <div className='videoCard'>
            <img className='videoCard__thumbnail' src={image} alt='' />
            <div className='videoCard__info'>
                <Avatar
                    className='videoCard__avatar'
                    alt={channel}
                    src={channelImage} />
                <div className='videoCard__text'>
                    <h4>{title} </h4>
                    <p>{channel}</p>
                    <p>{view} - {timestampe}</p>
                </div>
            </div>
        </div>
    )
}

export default Videocard
