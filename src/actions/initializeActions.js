"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require("../constants/actionTypes");
var AuthorApi = require("../api/authorApi");
var AuthActions = require("../actions/authActions");

var InitializeActions = {
  initApp: function(){

    AuthActions.login();

    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  }
};

module.exports = InitializeActions;
