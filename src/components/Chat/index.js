import React, { Component } from 'react';
import Message from '../Message';


class Chat extends React.Component {
    componentWillMount() {
        this.setState({
            messages: [],
            messageInput: '',
        })
    }


    changeInputMessage = event => {
        this.setState({messageInput: event.target.value})
    }
    

    sendMessageOnEnter = event => {
        if (event.key !== 'Enter') {
            return;
        }
        if(!this.state.messageInput.length) {
            return;
        }
        this.setState({
            messages: [...this.state.messages, {text: event.target.value}],
            messageInput: '',
        })
        // console.log(this.state);
    }
    
    render () {
        return (
            <div className="chat">
                <input type="text" className="input-message" onChange={this.changeInputMessage} value={this.state.messageInput} onKeyPress={this.sendMessageOnEnter}/>
                <Message initialState={this.state} />    
            </div>
        )    
    }
}

export default Chat;
