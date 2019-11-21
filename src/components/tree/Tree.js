import React, { Component } from 'react';
import './Tree.css'

class Tree extends Component{
    constructor(props){
        super(props)

        this.state = {
            berries: 0
        }

    }

    clickTree = event => {

        this.setState({
            berries: this.state.berries + 1
        });
    }

    render(){
        return(
            <div 
                className="Tree" 
            >
                <div
                    className="trImage"
                    onClick={this.clickTree}
                >
                </div>
                <div>
                    {this.state.berries}
                </div>
            </div>

        );
    }
}

export default Tree;