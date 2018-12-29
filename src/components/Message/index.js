import React, { Component } from 'react';
import { randomBytes } from 'crypto';

class Message extends React.Component {
    constructor(props) {
        super(props);
    };



    render () {
        const listItems = this.props.initialState.messages.map((el) => 
            <li key={Math.random(999)}>{el.text}</li>
        );
    
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default Message;
