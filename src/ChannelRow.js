import { Avatar } from '@material-ui/core'
import React from 'react'
import './ChannelRow.css'
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';
function ChannelRow(props) {
    return (
        <div className='ChannelRow'>
            <Avatar
            className='ChannelRow__logo'
                alt={props.channel}
                src={props.image} />
            <div className='ChannelRow__Text'>
            <h4>
                {props.channel } 
                {props.verified && <CheckCircleOutlineSharpIcon/>}
            </h4>
            <p>
                {
                  props.subs
                } subscribers - {props.noOfVideos} Videos
            </p>
            <p>
            {props.discription}
            </p>
         </div>    
        </div>
    )
}

export default ChannelRow
