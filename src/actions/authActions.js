"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthService = require("../services/authService");
var ActionTypes = require("../constants/actionTypes");

var AuthActions = {

  _getProfileCallback: function(err, profile){
    if (err) {
      console.log("Error loading the Profile", err);
      return null;
    }
    else {
      Dispatcher.dispatch({
        actionType: ActionTypes.LOGIN,
        profile: profile
      });
    }
  },

  login: function(authHash){
    AuthService.saveUserToken(authHash);
    AuthService.getProfile(this._getProfileCallback);
  },
  showLock: function(){
    AuthService.showLock();
  },
  logout: function(){
    localStorage.removeItem('userToken');
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGOUT,
      profile: {}
    });
  }
};

module.exports = AuthActions;
