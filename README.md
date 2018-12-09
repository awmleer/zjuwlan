# ZJUWLAN

Command line tool for authenticating to ZJUWLAN.

## Install

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

