'use strict';

const parseUserBranch = require('.');
const test = require('tape');

test('parseUserBranch()', t => {
  t.deepEqual(parseUserBranch('a:b'), {username: 'a', branch: 'b'}, 'should parse a user:branch string.');

  t.throws(
    () => parseUserBranch(),
    /^TypeError.*undefined is not a string\. Expected a string in the form of "username:branch"\./u,
    'should throw a type error when it takes no arguments.'
  );

  t.throws(
    () => parseUserBranch(1),
    /^TypeError.*1 is not a string\. Expected a string in the form of "username:branch"\./u,
    'should throw a type error when it takes a non-string argument.'
  );

  t.throws(
    () => parseUserBranch(''),
    /^Error.*Expected a string in the form of "username:repo", but received an empty string\./u,
    'should throw an error when it takes an empty string.'
  );

  t.throws(
    () => parseUserBranch('ab'),
    /^Error.*ab doesn't include `:`\. The string must be in the form of "username:branch"\./u,
    'should throw an error when the string does not include `:`.'
  );

  t.throws(
    () => parseUserBranch('a::b'),
    /^Error.*a::b includes more than one colon\. The string must be in the form of "username:branch"\./u,
    'should throw an error when the string includes multiple `:`.'
  );

  t.throws(
    () => parseUserBranch('a: b'),
    /^Error.*a: b includes a white space\. The string must be in the form of "username:branch"\./u,
    'should throw an error when the string includes a white space.'
  );

  t.throws(
    () => parseUserBranch(':'),
    /^Error.*The string includes neither username nor branch\. /u,
    'should throw an error when it takes `:`.'
  );

  t.throws(
    () => parseUserBranch(':b'),
    /^Error.*:b starts with `:`, in other words no username is specified\. /u,
    'should throw an error when the string starts with `:`.'
  );

  t.throws(
    () => parseUserBranch('a:'),
    /Error.*a: ends with `:`, in other words no branch is specified\. /u,
    'should throw an error when the string ends with `:`.'
  );

  t.end();
});
