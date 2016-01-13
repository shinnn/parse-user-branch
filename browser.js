/*!
 * parse-user-branch | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/parse-user-branch
*/
(function() {
  'use strict';

  var errMsg = 'The string must be in the form of "username:branch".';

  window.parseUserBranch = function parseUserBranch(str) {
    if (typeof str !== 'string') {
      throw new TypeError(
        String(str) + ' is not a string. Expected a string in the form of "username:branch".'
      );
    }

    if (str === '') {
      throw new Error('Expected a string in the form of "username:repo", but received an empty string.');
    }

    if (str === ':') {
      throw new Error('The string includes neither username nor branch. ' + errMsg);
    }

    var splitted = str.split(':');

    if (/\s/.test(str)) {
      throw new Error(str + ' includes a white space. ' + errMsg);
    }

    if (splitted.length === 1) {
      throw new Error(str + ' doesn\'t include `:`. ' + errMsg);
    }

    if (splitted.length > 2) {
      throw new Error(str + ' includes more than one colon. ' + errMsg);
    }

    if (splitted[0].length === 0) {
      throw new Error(str + ' starts with `:`, in other words no username is specified. ' + errMsg);
    }

    if (splitted[1].length === 0) {
      throw new Error(str + ' ends with `:`, in other words no branch is specified. ' + errMsg);
    }

    return {
      username: splitted[0],
      branch: splitted[1]
    };
  };
})();
