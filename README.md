# SiteRebuild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

#### A program that is a rebuild of the NextOnTop website.

#### Link to live deployed website (https://siterebuild-6ed07.firebaseapp.com)

## Description

This program is an application that will rebuild the NextOnTop website using Angular. When BLOGS is clicked in navbar, users can see a list of posted blogs and enter their own blog if they wish to. At the moment, BLOGS is the only link in the navbar that has a path to another page. The other navbar links do not have functionality because I wanted to focus on the creation of blogs.

## Setup/Installation Requirements to run program

- Clone from Github

- Navigate to root project directory in the terminal.

- Input npm install into the terminal to install dependancies.

- Create your own api-keys.ts file in the app folder and populate it with your own firebase credentials.

- Input ng build into the terminal.

- Input ng serve to deploy the server to localhost, or firebase deploy to deploy to your own firebase hosting.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known Bugs

- Deployment does not currently take user to web-app.
- When a specific blog is clicked on, and takes user to blog detail page, user name and title of blog do not show up on blog detail page. Only actual blog description. This error doesn't occur when a user manually adds a new blog to the site, meaning all details of the clicked on blog show up on the detail page if the user manually creates a blog on the site.

## Support and contact details

For any quesitons contact me at: cristianjlucero32@gmail.com

## Technologies Used

- Node Package Manager (tool that manages all external tools and libraries being used)
- JavaScript
- Karma (test runner)
- Jasmine (testing framework)
- Visual Studio Code (text editor)
- CSS
- HTML
- Angular(Front-end framework)
- Firebase (used for realtime database and website hosting)

### License

Copyright (c) 2018 Cristian Lucero

This website is licensed under the MIT license.
