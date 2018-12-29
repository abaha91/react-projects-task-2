import React, { Component } from 'react';
import Message from '../Message';


class Chat extends React.Component {
    state = {
        messages: [],
        messageInput: '',
    }

    changeInputMessage = event => {
        this.setState({messageInput: event.target.value})
    }
    

    sendMessageOnEnter = event => {
        if (event.key === 'Enter') {
            let newArr = this.state.messages;
            newArr.push({text: event.target.value});
            this.setState({
                messages: newArr,
                messageInput: '',
            })
            // console.log(this.state);

        }
    }
    
    render () {
        return (
            <div className="chat">
                <input type="text" className="input-message" onChange={this.changeInputMessage} value={this.state.messageInput} onKeyPress={this.sendMessageOnEnter}/>
                <ul>
                    <Message initialState={this.state} />
                </ul>
                
            </div>
        )    
    }
}

export default Chat;
