import React from 'react';
import './Stats.css';

function Stats(props){



    return(
        <div className="Stats">
            <div>Leaves/sec: {props.leavesPerSec}</div>
        </div>
    )
}

export default Stats;