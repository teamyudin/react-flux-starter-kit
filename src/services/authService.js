"use strict";

var React = require('react');
var Auth0Lock = require("auth0-lock");

var _profile = {nickname: ""};

var _lock = new Auth0Lock('UXi22UsHesNhYJFvFZ1agznOn6B5rsww', 'eleth.auth0.com');

var AuthService = {
	getProfile: function(callback) {
		var idToken = localStorage.getItem('userToken');
		_lock.getProfile(idToken, callback);
	},
  showLock: function() {
     _lock.show();
  },
  saveUserToken: function(hash){
    var idToken = localStorage.getItem('userToken');
    var authHash = _lock.parseHash(hash);
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token;
        localStorage.setItem('userToken', authHash.id_token);
      }
      if (authHash.error) {
        console.log("Error signing in", authHash);
      }
    }
  }
};

module.exports = AuthService;
