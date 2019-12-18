import React from 'react';
import Station from './Station';

// Functional component for the Station List
export default function StationList(props) {
    return (
        <div className="Content">
            { props.stations.map((item) => (
                <Station station={item} coordinates={props.coordinates} key={item.id}/>
            ))
            }
        </div>
    );
}