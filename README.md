# NGLP

## Development Environment

NGLP is separated into four workspaces:

- [admin](./packages/admin/README.md) - client admin app
- common - common configuration, linting
- [frontend](./packages/frontend/README.md) - client frontend app
- lib - library of shared components, themes between admin and frontend

```sh
yarn install
yarn dev # to start all environments
yarn dev:frontend # to start frontend only
yarn dev:admin # to start admin only
```

That's it!

- Admin: http://localhost:3000
- Frontend: http://localhost:3001

### Storybook

```sh
yarn storybook # to start all storybooks
yarn storybook:frontend # to start frontend
yarn storybook:admin # to start admin
```

- Admin storybook: http://localhost:6006
- Frontend storybook: http://localhost:6007

