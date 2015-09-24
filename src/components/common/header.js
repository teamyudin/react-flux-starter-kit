"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthActions = require('../../actions/authActions');
var LoginStore = require('../../stores/loginStore');

var LoggedIn = require('../../components/user/loggedIn');
var Login = require('../../components/user/login');

var Header = React.createClass({
	getInitialState: function(){
    return {
      user: {
				profile: LoginStore.getProfile(),
				isLoggedIn: LoginStore.isLoggedIn()
			}
    };
  },
	componentWillMount: function(){
    LoginStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    LoginStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
		var profile = LoginStore.getProfile();
		var isLoggedIn = LoginStore.isLoggedIn();
    this.setState({user: {profile: LoginStore.getProfile(), isLoggedIn: isLoggedIn}});
  },
  showLock: function() {
     AuthActions.showLock();
  },
	logout: function(){
		AuthActions.logout();
	},
	render: function() {

		var secureLinks;
		if(this.state.user.isLoggedIn)
		{
			secureLinks = <li><Link to="authors">Authors</Link></li>;
		}

		return (
      <nav className="navbar navbar-default">
      <div className="container">
        <ul className = "nav navbar-nav">
          <li><Link to="app">Home</Link></li>
          <li><Link to="about">About</Link></li>
					{secureLinks}
        </ul>
				<ul className="nav navbar-nav navbar-right">
					<li><Login user={this.state.user} showLock={this.showLock} logout={this.logout}/></li>
				</ul>
				<LoggedIn profile={this.state.user.profile}/>

      </div>
      </nav>
		);
	}
});

module.exports = Header;
