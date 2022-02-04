import React from "react";
import './TrackList.css';

export class  TrackList extends React.Component{
    render(){return(
        <div className="TrackList">
        <ul>
            {this.props.tracks.map((track)=><li>{track}</li>)}
        
        </ul>
    </div>)
    }
}