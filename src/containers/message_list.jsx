import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setMessages } from '../actions';

import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {

  componentWillMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.setMessages(this.props.selectedChannel);
  }


  render(){
  console.log(this.props.messages)
    return(
      <div>
        <div className="col-sm-8">
          {
            this.props.messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })
          }
        <MessageForm />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}

function mapStateToProps(state){
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
