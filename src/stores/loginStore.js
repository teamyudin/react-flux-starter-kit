"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require("../constants/actionTypes");
var EventEmitter = require('events').EventEmitter;
var assign = require("object-assign");
var _ = require('lodash');
var CHANGE_EVENT = "change";

var _defaultProfile = {nickname: null};

var _profile = _defaultProfile;

var LoginStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  getProfile: function(callback){
    return _profile;
  },
  isLoggedIn: function(){
    return _profile.nickname ? true : false;
  }
});

Dispatcher.register(function(action){
  switch(action.actionType)
  {
    case ActionTypes.LOGIN:
      _profile = action.profile;
      LoginStore.emitChange();
      break;
      case ActionTypes.LOGOUT:
        _profile = _defaultProfile;
        LoginStore.emitChange();
        break;
    default:
      //no op
  }
});

module.exports = LoginStore;
