# requiresafe-remote-check

Remotely check npm modules against the requireSafe api.

## Usage:
```sh
$ npm start
```

## Endpoints:
```
/{name}/{version?}
```

Where `name` is an npm module name, and `version` is an optional version (default: `latest`).

---

*Tested on Node 4.2.1 w/ npm 2.14.7*
