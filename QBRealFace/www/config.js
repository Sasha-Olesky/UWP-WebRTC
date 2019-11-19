;(function(window) {
  /**
   * Add parameter to url search
   * for switch users groups
   *
   * Possible options:
   * https://examples.com?users=prod
   * https://examples.com?users=dev
   * https://examples.com - for qa by default
   */
  // var usersQuery = _getQueryVar('users');
  var usersQuery = _getQueryVar('dev');

  var CONFIG = {
    debug: true,
    webrtc: {
      answerTimeInterval: 30,
      dialingTimeInterval: 5,
      disconnectTimeInterval: 30,
      statsReportTimeInterval: 5
    }
  };

  /**
   * QBAppDefault for qa and dev
   * QBAppProd for production
   */
  var QBAppProd = {
    appId: 92,
    authKey: 'wJHdOcQSxXQGWx5',
    authSecret: 'BTFsj7Rtt27DAmT'
  },
  QBAppDefault = {
    appId: 53200,
    authKey: 'jYK7H-BJEn45A9H',
    authSecret: 'e9vdfk-ykM9bNcU'
  };

  /** set QBApp */
  // var QBApp = usersQuery === 'qa' ? QBAppDefault : usersQuery === 'dev' ? QBAppDefault : QBAppProd;
  var QBApp = QBAppDefault;

  var QBUsersQA = [],
  QBUsersDev = [
    {
      id: 23568021,
      login: 'User-1',
      password: 'happyboy123',
      full_name: 'User-1',
      colour: '0890ff'
    },
    {
      id: 23568135,
      login: 'User-2',
      password: 'happyboy123',
      full_name: 'User-2',
      colour: '0890ff'
    },
    {
      id: 23568199,
      login: 'User-3',
      password: 'happyboy123',
      full_name: 'User-3',
      colour: '0890ff'
    },
    {
      id: 23568274,
      login: 'User-4',
      password: 'happyboy123',
      full_name: 'User-4',
      colour: '0890ff'
    },
    {
      id: 23568338,
      login: 'User-5',
      password: 'happyboy123',
      full_name: 'User-5',
      colour: '0890ff'
    }
  ],
  QBUsersProd = [];

  /** set QBUsers */
  // var QBUsers = usersQuery === 'qa' ? QBUsersQA : usersQuery === 'dev' ? QBUsersDev : QBUsersProd;
  var QBUsers = QBUsersDev;

  var MESSAGES = {
    'login': 'Login as any user on this computer and another user on another computer.',
    'create_session': 'Creating a session...',
    'connect': 'Connecting...',
    'connect_error': 'Something wrong with connect to chat. Check internet connection or user info and trying again.',
    'login_as': 'Logged in as ',
    'title_login': 'Choose a user to login with:',
    'title_callee': 'Choose users to call:',
    'calling': 'Calling...',
    'webrtc_not_avaible': 'WebRTC is not available in your browser',
    'no_internet': 'Please check your Internet connection and try again'
  };

  /**
   * PRIVATE
   */
  /**
   * [_getQueryVar get value of key from search string of url]
   * @param  {[string]} q [name of query]
   * @return {[string]}   [value of query]
   */
  function _getQueryVar(q) {
    var query = window.location.search.substring(1),
        vars = query.split("&"),
        answ = false;

    vars.forEach(function(el, i){
      var pair = el.split('=');

      if(pair[0] === q) {
        answ = pair[1];
      }
    });

    return answ;
  }

  /**
   * set configuration variables in global
   */
  window.QBApp = QBApp;
  window.CONFIG = CONFIG;
  window.QBUsers = QBUsers;
  window.MESSAGES = MESSAGES;
}(window));
