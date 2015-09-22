"use strict";

var React = require('react');
var About = React.createClass({
	statics: {
		willTransitionTo: function(transition, params, query, callBack){
			if(!confirm("Are you sure you want to see this boring page???"))
			{
				transition.abort();
			}
			else {
				callBack();
			}
		},
		willTransitionFrom: function(transition, component){
			if(!confirm("Are you sure you want to leave???"))
			{
				transition.about();
			}
		}
	},
	render: function() {
		return (
			<div>
				<h1>About</h1>
				<p>Content here.</p>
			</div>
		);
	}
});

module.exports = About;
