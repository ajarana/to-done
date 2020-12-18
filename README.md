## To Done

Features include the following:

- A user can create, edit, delete, and mark a task complete.
- A user can see all incomplete tasks
- A user can see all complete tasks
- A user can see all details of a task
- Responsive UI
- Built with AA compliance in mind, though there is definitely always room for improvement.
- Service worker for PWA capabilities

## Tools Used

- Angular 10 
- Firebase Firestore
- Firebase Storage
- Firebase Authentication
- Hive Icons
- Mockups
- Stencil Components
- SCSS
- Nx
- [This Repo](https://github.com/TeamHive/fea-to-done)

I used anonymous authentication, so tasks will be device-specific. The service worker is functional, however, the backend has not been configured to process writes while offline, so PWA functionality is currently limited.

## Codebase

### Install Dependencies

```
yarn install
```

### [Stencil](https://stenciljs.com/docs/introduction) Library (`/libs/ui`)

```
yarn run ui:build

// or, to watch for file changes
yarn run ui:dev
```

### [Storybook](https://storybook.js.org/) (`/libs/ui/.storybook`)

```
yarn run ui:storybook
```

### [Angular](https://angular.io/) App (`/apps/web`)

```
yarn start web
``` 
