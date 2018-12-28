import React from 'react';
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
            console.log(this.state);
            setTimeout(() => {console.log(this.state)}, 3000)
        }
    }
    
    render () {
        return (
            <div className="chat">
                <input type="text" className="input-message" onChange={this.changeInputMessage} value={this.state.messageInput} onKeyPress={this.sendMessageOnEnter}/>
                <Message/>
            </div>
        )    
    }
}

export default Chat;
