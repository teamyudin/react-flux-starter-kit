"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Page not found</h1>
				<p>Woops! Sorry, there is nothing to see here.</p>
        <p><Link to="app">Back to Home</Link></p>
			</div>
		);
	}
});

module.exports = NotFoundPage;
