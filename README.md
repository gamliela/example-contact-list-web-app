# example-contact-list-web-app
An example of application that displays contact list

### Technology Stack
React, MobX, SCSS, CSS Modules, Webpack, React Toolbox (+ Material Design icons).

All Components are pure, state is managed entirely in MobX.

### Features
1. Data is fetched dynamically from http://jsonplaceholder.typicode.com/users
2. Spinner is shown in the middle of the screen while data is loaded.
3. Mobile first: one list view and responsive design.
4. Expandable contact list.
4. Search as-you-type.
5. Sortable by name or company.
6. Admin panel with groping by abc.
7. Shows error bar on network failures.

### Build Instructions
Install: `npm install`

Build: `npm build`

Run: `npm dev-server`
