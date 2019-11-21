import React, { Component } from 'react';
import Tree from '../tree/Tree';
import Leaves from '../leaves/Leaves';
import './Game.css';

class Game extends Component{
    constructor(props){
        super(props);

        this.gameLeavs = 1;
        
        this.state = {
            leavesPerSec: 1,

        }
    }

    render(){
        return(
            <div className='Game'>
                <Leaves startLeaves={0} endLeaves={1} />
                <Leaves startLeaves={0} endLeaves={10} />
                <Tree />
            </div>
        )
    }
}

export default Game;