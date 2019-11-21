import React, { Component } from 'react';
import Tree from '../tree/Tree';
import Leaves from '../leaves/Leaves';
import Stats from '../stats/Stats';
import './Game.css';

class Game extends Component{
    constructor(props){
        super(props);

        this.state = {
            nextLeaves: 1,
            previousLeaves: 0,
            leavesPerSec: 1,
        }

    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick(){
        let startLeaves = this.state.nextLeaves;
        let endLeaves = startLeaves + this.state.leavesPerSec;
        console.log(startLeaves + " : " + endLeaves);
        this.setState({
            nextLeaves: endLeaves,
            previousLeaves: startLeaves,
            leavesPerSec: this.state.leavesPerSec + 1,
        })
    }

    componentWillUnmount(){
        clearInterval(this.TimerId);
    }

    render(){
        console.log("render");
        return(
            <div className='Game'>
                <Leaves startLeaves={0} endLeaves={1} />
                <Leaves startLeaves={this.state.previousLeaves} endLeaves={this.state.nextLeaves} />
                <Stats leavesPerSec={this.state.leavesPerSec} />
                <Tree />
            </div>
        )
    }
}

export default Game;