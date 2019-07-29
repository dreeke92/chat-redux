import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Message extends Component {
  render(){
    return(
      <div>
        <div className="top-part">
          <div className="author">{this.props.message.author}</div>
          <div> {this.props.message.created_at}</div>
        </div>
        <div>{this.props.message.content}</div>
      </div>
    );
  }
}

export default Message;
