# NGLP Common Configuration

This workspace includes common dev configuration between [admin](./packages/admin/README.md), [frontend](./packages/frontend/README.md), and [lib](./packages/lib/README.md) workspaces.

## Eslint

.eslintrc.js

```
module.exports = {
  extends: ["@wdp"],
};
```

## Stylelint

.stylelintrc.js

```
module.exports = {
  extends: "@wdp/stylelint-config",
};
```

## Typescript

tsconfig.json

```
{
  "extends": "../common/ts-config/base"
}
```
