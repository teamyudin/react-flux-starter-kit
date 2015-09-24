"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var UnauthorizedPage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Unauthorized</h1>
				<p>Woops! Sorry, you are not authorized to see the requested page, please log in.</p>
        <p><Link to="app">Back to Home</Link></p>
			</div>
		);
	}
});

module.exports = UnauthorizedPage;
