# example-contact-list-web-app
An example of application that displays contact list.

[Run Demo](https://gamliela.github.io/example-contact-list-web-app/)

### Technology Stack
React, MobX, SCSS, CSS Modules, Webpack, React Toolbox (+ Material Design icons).

All Components are pure, state is managed entirely in MobX.

### Features
1. Data is fetched dynamically from [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
2. Spinner is shown in the middle of the screen while data is loaded.
3. Mobile first: one list view and responsive design.
4. Expandable contact list.
5. Search as-you-type.
6. Sortable by name or company.
7. Admin panel with groping by abc.
8. Shows error bar on network failures.

### Build Instructions
Install: `npm install`

Build: `npm run build`

Run: `npm run dev-server` (this will open browser at [http://localhost:8080/](http://localhost:8080/))
