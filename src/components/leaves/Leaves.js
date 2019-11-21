import React, { Component } from 'react';
import './Leaves.css';

class Leaves extends Component{
    constructor(props){
        super(props);

        let duration = 1000;
        let range = Math.abs(this.props.endLeaves - this.props.startLeaves);
        console.log("range: " + range);
        this.current = this.props.startLeaves;
        if(range > 100){
            console.log("big");
            let modIncrement = Math.floor(range/100);
            this.increment = this.props.endLeaves > this.props.startLeaves ? modIncrement : -1*(modIncrement);
            this.stepTime = 10;
        }
        else{
            this.increment = this.props.endLeaves > this.props.startLeaves ? 1 : -1;
            console.log("smal " + this.increment);
            this.stepTime = (Math.floor(duration/range));
        }
        
        
        this.state = {
            leavesCount: this.current
        };
    }

    componentDidMount(){
        console.log("DidMount");
        this.timerId = setInterval(
            () => this.tick(),
            this.stepTime
        );
        setTimeout(
            () => this.endTheTimerId(),
            1000
        );
    }

    tick(){
        this.current = this.current + this.increment;
        this.setState({
            leavesCount: this.current
        })
    }

    endTheTimerId(){
        clearInterval(this.TimerId);
    }

    componentWillUnmount(){
        clearInterval(this.TimerId);
    }

    render(){
        return(
                <div className="Leaves">
                    {this.state.leavesCount}
                </div>
            )

    }
}

export default Leaves;
