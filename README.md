# NGLP Client

## Development Environment

NGLP Client is separated into four workspaces:

- [admin](./packages/admin/README.md) - client admin app
- [common](./packages/common/README.md) - common configuration, linting
- [frontend](./packages/frontend/README.md) - client frontend app
- [lib](./packages/lib/README.md) - library of shared code between admin and frontend

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

## Browser support

We fully support the current release of all evergreen browsers (defined in `browserslist` property in `client/package.json`).

- Edge (Chromium latest)
- Firefox (Windows and OSX)
- Chrome (Windows and OSX)
- Safari
- Latest release of Safari on iOS and Chrome on Android
