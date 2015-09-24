"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var AuthorList = require("./authorList");
var Link = require('react-router').Link;

var LoginStore = require('../../stores/loginStore');

var AuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],
  getInitialState: function(){
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },
  componentWillMount: function(){
    if(!LoginStore.isLoggedIn())
    {
      this.transitionTo("unauthorized");
    }

    AuthorStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    AuthorStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({authors: AuthorStore.getAllAuthors()});
  },
  render: function(){
    return (
      <div>
        <h1>Authors</h1>
        <Link to="addAuthor" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors}></AuthorList>
      </div>
    );
  }
});

module.exports = AuthorPage;
