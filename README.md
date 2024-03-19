# NGLP

## Development Environment

NGLP is separated into workspaces:

- [admin](./packages/admin/README.md) - client admin app
- [frontend](./packages/frontend/README.md) - client frontend app
- lib - library of shared components, themes between admin and frontend
- eslint - shared lint config
- tsconfig - shared ts config

```sh
yarn install
yarn dev # to start all environments
yarn dev:frontend # to start frontend only
yarn dev:admin # to start admin only
```

That's it!

- Admin: http://localhost:3000
- Frontend: http://localhost:3001
