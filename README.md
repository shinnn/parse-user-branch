# parse-user-branch

[![npm version](https://img.shields.io/npm/v/parse-user-branch.svg)](https://www.npmjs.com/package/parse-user-branch)
[![Build Status](https://travis-ci.com/shinnn/parse-user-branch.svg?branch=master)](https://travis-ci.com/shinnn/parse-user-branch)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/parse-user-branch.svg)](https://coveralls.io/github/shinnn/parse-user-branch?branch=master)

Parse a `username:branch` string that is available for [Github](https://github.com/) [commit comparison API](https://developer.github.com/v3/repos/commits/#compare-two-commits)

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install parse-user-branch
```

## API

```javascript
import parseUserBranch from 'parse-user-branch';
```

### parseUserBranch(*str*)

*str*: `string` (`username:branch` style branch expression, for example <https://github.com/isaacs/nyc/tree/dep-update> → `'isaacs:dep-update'`)  
Return: `Object` (`{username: ..., branch: ...}`)

It extracts a username and a branch name from a `username:branch` string and creates an object.

```javascript
parseUserBranch('shinnn:patch-1');
//=> {username: 'shinnn', branch: 'patch-1'}
```

## License

Copyright (c) 2016 - 2018 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
