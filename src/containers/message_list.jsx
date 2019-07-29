import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setMessages } from '../actions';

import Message from '../components/message';

class MessageList extends Component {
  render(){
    return(
      <div className="col-sm-8">
        {this.props.messages.map((message) => {
          return(
            <Message
              message={message}
              key={message.content}
            />
          );
        })}
      </div>
    );
  }

  componentWillMount(){
    this.props.setMessages();
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { setMessages: setMessages },
    dispatch
  );
}

function mapStateToProps(state){
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
