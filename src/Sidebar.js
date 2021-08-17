import React from 'react'
import './Sidebar.css'
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import SideBarRow from './SideBarRow';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
function Sidebar() {
    return (
        <div className='Sidebar'>
            <SideBarRow selected Icon={HomeSharpIcon} title='Home' />
            <SideBarRow Icon={WhatshotSharpIcon} title='Trending' />
            <SideBarRow Icon={SubscriptionsSharpIcon} title='Subscriptions' />
            <hr/>
            <SideBarRow Icon={VideoLibrarySharpIcon} title='Library' />
            <SideBarRow Icon={HistorySharpIcon} title='History' />
            <SideBarRow Icon={OndemandVideoSharpIcon} title='Your videos' />
            <SideBarRow Icon={WatchLaterSharpIcon} title='Watch Later' />
            <SideBarRow Icon={ThumbUpAltOutlinedIcon} title='Liked videos' />
            <SideBarRow Icon={ExpandMoreSharpIcon} title='Show more' />
            <hr/>
        </div>
    )
}

export default Sidebar
 