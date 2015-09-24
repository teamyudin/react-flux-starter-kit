"use strict";

var React = require('react');

var LoggedIn = React.createClass({
  propTypes: {
    profile: React.PropTypes.object.isRequired
  },
	render: function() {
		return (
			<p className="navbar-text navbar-right">{this.props.profile.nickname}</p>
		);
	}
});

module.exports = LoggedIn;
