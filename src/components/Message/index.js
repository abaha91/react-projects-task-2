import React, { Component } from 'react';
import { randomBytes } from 'crypto';

class Message extends React.Component {
    constructor(props) {
        super(props);
    };



    render () {
        return <li key={Math.random(999)}>{this.props.text}</li>;
    }
}

export default Message;
