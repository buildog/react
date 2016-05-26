'use strict';

module.exports = {
  validateUsername(name) {
    //TODO: Add more robust validation
    if (name.length > 10) {
      return true;
    }
    return false;
  },

  validateReply(reply) {
    //TODO: Add more robust validation
    if (reply.length > 0) {
      return true;
    }
    return false;
  },

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },

  validatePassword(password) {
    //TODO: Add more robust validation
    if (password.length > 4) {
      return true;
    }
    return false;
  }
};
