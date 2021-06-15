# NGLP Admin UI

## Development Environment

```sh
npm install
npm run dev # to start dev client
```

That's it! Now go to http://localhost:3000/

### Storybook

```sh
npm run storybook
```

### Client architecture

- `/auth` - shared authentication components
- `/pages` — a single component that dynamically generates static pages for all routes.
- `/components` — all React components for generating portions of static pages. These are further organized by type (see below).
- `/theme` — global styles, mixins, and font files. Component styles are defined in the same directory as their components using `styled-components`, and are compiled into a single stylesheet on the server.
- `/types` — reusuable types for recurring data structures like pages, images, locales, etc.
- `/public` — static assets like favicons that are passed directly to the output directory without hashing.

### Component architecture

The components are separated out into these folders:

- `/atomic/` - small resuable components such as links, buttons, and inputs
- `/dynamic/` — components that make run-time API requests and are rendered client-side.
- `/factories/` - mapped components with shared props, such as icons
- `/layout/` - small reusable layout components such as grids and cards
- `/global/` - composed, app wide components
- `/scaffolding/` - a temp folder for the original scaffolding components
- `/views/` - composed components specific to routes
- `/svgs/` - svgs, such as icons and logos

Folders are lower case if they contain a collection of components, and camcel case if they contain one component. Folders that contain many components should have an `index.ts` file with default exports.

Single components should be in a camel cased folder, with an index, stories, and styles file (if applicable). For example:

```
components/global/MainNav
index.tsx // Exports the component
MainNav.tsx // Defines the component
MainNav.stories.tsx // Storybook file
styles.ts // Styled components
```

### Browser support

We fully support the current release of all evergreen browsers (defined in `browserslist` property in `client/package.json`).

- Edge (Chromium latest)
- Firefox (Windows and OSX)
- Chrome (Windows and OSX)
- Safari
- Latest release of Safari on iOS and Chrome on Android
