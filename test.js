'use strong';

const requireFromString = require('require-from-string');
const rollup = require('rollup');
const test = require('tape');

function runTest(description, main) {
  test(description, t => {
    t.plan(11);

    t.strictEqual(main.name, 'parseUserBranch', 'should have a function name.');

    t.deepEqual(main('a:b'), {username: 'a', branch: 'b'}, 'should parse a user:branch string.');

    t.throws(
      () => main(),
      /^TypeError.*undefined is not a string\. Expected a string in the form of "username:branch"\./,
      'should throw a type error when it takes no arguments.'
    );

    t.throws(
      () => main(1),
      /^TypeError.*1 is not a string\. Expected a string in the form of "username:branch"\./,
      'should throw a type error when it takes a non-string argument.'
    );

    t.throws(
      () => main(''),
      /^Error.*Expected a string in the form of "username:repo", but received an empty string\./,
      'should throw an error when it takes an empty string.'
    );

    t.throws(
      () => main('ab'),
      /^Error.*ab doesn't include `:`\. The string must be in the form of "username:branch"\./,
      'should throw an error when the string does not include `:`.'
    );

    t.throws(
      () => main('a::b'),
      /^Error.*a::b includes more than one colon\. The string must be in the form of "username:branch"\./,
      'should throw an error when the string includes multiple `:`.'
    );

    t.throws(
      () => main('a: b'),
      /^Error.*a: b includes a white space\. The string must be in the form of "username:branch"\./,
      'should throw an error when the string includes a white space.'
    );

    t.throws(
      () => main(':'),
      /^Error.*The string includes neither username nor branch\. /,
      'should throw an error when it takes `:`.'
    );

    t.throws(
      () => main(':b'),
      /^Error.*:b starts with `:`, in other words no username is specified\. /,
      'should throw an error when the string starts with `:`.'
    );

    t.throws(
      () => main('a:'),
      /Error.*a: ends with `:`, in other words no branch is specified\. /,
      'should throw an error when the string ends with `:`.'
    );
  });
}

global.window = {};
require('./' + require('./bower.json').main);

runTest('require(\'parse-user-branch\')', require('.'));
runTest('window.parseUserBranch', global.window.parseUserBranch);

rollup.rollup({entry: require('./package.json')['jsnext:main']}).then(bundle => {
  runTest('Module exports', requireFromString(bundle.generate({format: 'cjs'}).code));
});
