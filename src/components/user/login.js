"use strict";

var React = require('react');

var Login = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
    showLock: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired
  },
	render: function() {
    if(!this.props.user.isLoggedIn)
    {
      return (
        <a href="#" onClick={this.props.showLock}>Login</a>
      );
    }
    else {
      return (
        <a href="#" onClick={this.props.logout}>Logout</a>
      );
    }
	}
});

module.exports = Login;
