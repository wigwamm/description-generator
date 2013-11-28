# Wigwamm Description Generator

Build a data file of property information to pass to Wigwamm's Blabber
which in turn will send back a beautifully generated description for
property listings.

This project is, in essence, a front-end for interfacing with the
business logic of generating descriptions and displaying them in a web
view.

## Dependencies

The project requires [node.js](http://nodejs.org/) and
[Lineman](https://github.com/testdouble/lineman) which is a workflow
tool built on top of [Grunt](http://www.gruntjs.com) - it takes care of
common tasks like concattenation, minification, running a local server
and running tests using [Testem](https://github.com/airportyh/testem)
and [Protractor](https://github.com/angular/protractor/).

	$ npm install -g lineman

Stylesheets are written in [Sass](http://www.sass-lang.com) and compiled
by lineman as part of the dev process. You'll need Ruby to run Sass and
Sass can be installed via Ruby Gems:

	$ [sudo] gem install sass

## Clone & Run the app

Clone the repo from Github, change directory to the one created and use
[lineman](https://github.com/testdouble/lineman) to build, serve and run tests.

	$ git clone git@github.com:wigwamm/description-generator.git
	$ cd description-generator
	$ lineman run

Lineman will build the project and serve files on `localhost:8000`.

To clean out any generated files run

	$ lineman clean

To run the specs run

	$ lineman spec

To build the project for deployment run

	$ lineman build

## Naming convention

Any elements, assets or components that could be feasibly used across
the Wigwamm suite of products, should have class names prefixed with
`wg-`. These might include header bars, logos, social icons and footer.

All items specific to this project should be prefixed with `pc-` for
ProppyCock. If the app is renamed, this can be easily swapped out with
find and replace.
