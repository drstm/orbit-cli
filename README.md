orbit
=====

trust fund for non trust fund kids

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/orbit.svg)](https://npmjs.org/package/orbit)
[![Downloads/week](https://img.shields.io/npm/dw/orbit.svg)](https://npmjs.org/package/orbit)
[![License](https://img.shields.io/npm/l/orbit.svg)](https://github.com/drstm/orbit-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g orbit
$ orbit COMMAND
running command...
$ orbit (-v|--version|version)
orbit/0.0.1 darwin-x64 node-v12.10.0
$ orbit --help [COMMAND]
USAGE
  $ orbit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`orbit hello [FILE]`](#orbit-hello-file)
* [`orbit help [COMMAND]`](#orbit-help-command)

## `orbit hello [FILE]`

describe the command here

```
USAGE
  $ orbit hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ orbit hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/drstm/orbit-cli/blob/v0.0.1/src/commands/hello.ts)_

## `orbit help [COMMAND]`

display help for orbit

```
USAGE
  $ orbit help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
