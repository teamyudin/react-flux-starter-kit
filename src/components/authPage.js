"use strict";

var React = require('react');
var Router = require('react-router');
var AuthActions = require('../actions/authActions');

var Auth = React.createClass({
  mixins: [
    Router.Navigation
  ],
  componentWillMount: function(){
    var hash = window.location.hash;
    AuthActions.login(hash);
  },
  componentDidMount: function(){
    this.transitionTo("/");
  },
  render: function() {
    return (
      <div>
        Hello world
      </div>
    );
  }
});

module.exports = Auth;
