# Hopper

> A minimal starting point for Eleventy sites, built using modern tools.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Why?

This template was created to help anyone looking to develop a JAMstack website with eleventy to get up and running as quickly as possible. No configuration is needed since Eleventy and Parcel are used to provide sensible defaults. Simply download this repo and start writing code.

## Features

- 11ty
- Parcel
- Sass/CSS
- PostCSS
- CSSNano
- Autoprefixer

## What's inside?

- A **README** file
- A **LICENSE** file that contains license information
- A **browserslist** to define the browsers that will be supported
- An **editorconfig** to predefine code formatting settings for your IDE
- **.git** files for a more organised git workflow
- A **Code of Conduct** for developers to follow
- **Contributing Guidelines** for contributors
- **Security guidelines** for reporting security issues
- An **Issue template** for submitting issues
- A **Pull Request template** for submitting pull requests

## Requirements

You'll need to install [Git](https://git-scm.com/), [Node.js](https://nodejs.org/) and [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).


## Installation

To get started, clone this repo and run `npm install` inside the new directory. I advise you to have a dig around to understand the overall app structure. To clone with a clean git history, use degit.

```sh
npm install -g degit
degit https://github.com/brendansparrow/hopper

cd hopper

npm install
```

## Development

To start the local development server enter the `start` command to startup eleventy and run Parcel.

```sh
npm start
```

## Deployment

Run the `build` command to generate an optimised production build.

```sh
npm run build
```

### License

Distributed under the MIT license. See ``LICENSE`` for more information.
