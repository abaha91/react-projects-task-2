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
    }
    
    render () {
        return (
            <div className="chat">
                <input type="text" className="input-message" onChange={this.changeInputMessage} value={this.state.messageInput} onKeyPress={this.sendMessageOnEnter}/>
                <ul>
                {this.state.messages.map((el) => 
                    <Message key={Math.random(999)} text={el.text} />
                )}
                </ul> 
            </div>
        )    
    }
}

export default Chat;
