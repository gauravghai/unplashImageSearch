import React, { Component } from 'react';

class Test extends React.Component {
    render(){
        return (
            <img src={this.props.src}/>
        );
    }
}

export default Test;