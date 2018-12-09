# ZJUWLAN

[![](https://img.shields.io/npm/v/zjuwlan.svg)](https://www.npmjs.com/package/zjuwlan)
[![](https://img.shields.io/github/license/awmleer/zjuwlan.svg)](https://github.com/awmleer/zjuwlan)

Command line tool for authenticating to ZJUWLAN.

## Install

Note: If you don't have node environment already, you have to install [node](https://nodejs.org/en/) first.

```shell
$ yarn global add zjuwlan
# or
$ npm install -g zjuwlan
```

## Usage

Show help:

```shell
$ zjuwlan -h # or --help
```

Login:

```shell
$ zjuwlan -u [your-username] -p [your-password]
```

It will store your username and password. So on the next time, you can simply type:

```shell
$ zjuwlan
```

## Issue

If you found any bug or would like to request for some features, welcome to submit an [issue](https://github.com/awmleer/zjuwlan/issues/new) or PR!

