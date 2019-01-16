import React, { Component } from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
    };



    render () {
        return <li>{this.props.text}</li>;
    }
}

export default Message;
