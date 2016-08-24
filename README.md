# parse-user-branch

[![NPM version](https://img.shields.io/npm/v/parse-user-branch.svg)](https://www.npmjs.com/package/parse-user-branch)
[![Bower version](https://img.shields.io/bower/v/parse-user-branch.svg)](https://github.com/shinnn/parse-user-branch/releases)
[![Build Status](https://travis-ci.org/shinnn/parse-user-branch.svg)](https://travis-ci.org/shinnn/parse-user-branch)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/parse-user-branch.svg)](https://coveralls.io/github/shinnn/parse-user-branch?branch=master)
[![devDependencies Status](https://david-dm.org/shinnn/parse-user-branch/dev-status.svg)](https://david-dm.org/shinnn/parse-user-branch?type=dev)

Parse a `username:branch` string that is available for [Github](https://github.com/) [commit comparison API](https://developer.github.com/v3/repos/commits/#compare-two-commits)

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install parse-user-branch
```

#### [Bower](http://bower.io/)

```
bower install parse-user-branch
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/parse-user-branch/master/browser.js)

## API

### parseUserBranch(*str*)

*str*: `String` (`username:branch` style branch expression, for example <https://github.com/isaacs/nyc/tree/dep-update> → `'isaacs:dep-update'`)  
Return: `Object` (`{username: ..., branch: ...}`)

It extracts a username and a branch name from a `username:branch` string and creates an object.

```javascript
parseUserBranch('shinnn:patch-1');
//=> {username: 'shinnn', branch: 'patch-1'}
```

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
