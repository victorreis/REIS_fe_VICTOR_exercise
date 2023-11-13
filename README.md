# Team list app refactoring challenge

## Summary

- [Introduction](#introduction)
- [Features and requirements](#features-and-requirements)
- [Reasons for the changes made](#reasons-for-the-changes-made)
- [Bonus features and implementations](#bonus-features-and-implementations)
- [Data consumed](#data-consumed)
- [Installation](#installation)
- [Running](#running)
- [Another scripts](#another-scripts)
- [Critique](#critique)

## Introduction

A simple and intuitive React TypeScript app that shows an overview of all the teams and allows the current user to navigate between teams to see each team member.
The main objective of this project is to show some development skills through some technologies and concepts:

- React.js
- React Hooks
- TypeScript
- CSS-in-JS (styled-components)
- Unity tests (Jest + React Testing Library)
- Linters (eslint, style-lint, lint-staged)
- Formatters (editorconfig, prettier)
- git hooks (husky: pre-commit, prepare-commit-message)
- conventional-commits (commitizen)
- Environment config (.vscode/\*, .npmrc)
- Usability
- Responsivity
- Clean Code
- SOLID
- KISS: “Keep It Simple, Stupid!”
- YAGNI: “You Ain’t gonna need it”
- DRY: “Do not Repeat Yourself”

## Features and requirements

- Show code review experience
- Fix all the bad code, code smells, anti-patterns, bad variables names, wrong patterns, bad validations, bad/missing tests etc.
- Implement good code practices and patterns
- Tests validation
- Create new tests to cover coverage gaps
- Create a PR with all the changes
- List changes on PR and on README
- Implement a new field of search on the screens of teams and users to filter by name. Add Unit Tests for it.
- Improve UI

## Reasons for the changes made

Check the [CHANGES](./CHANGES.md).

## Bonus features and implementations

- ~~Friendly messages to show the user some success/error status.~~
- High level of quality (strong eslint/typescript rules, scaffolding, separation of responsibilities, tests, pre-commit with type-check/linting/tests etc).
- Create a lot of components through the styled-components with a well organized structure of files (instead of using third part libraries).
- ~~Unity tests in the component styles, behaviors, snapshots etc.~~
- Global tests configuration that provides a simple and standardized way to render the components through the React Testing Renderer or through React Testing Library.
- Implements responsiveness to allow any screen size by using @media queries, flexbox and Grid Layout.
- Usage of React Hooks.
- Usage of Typescript generics, union type and interface manipulation and interesting Type utilities.

## Data consumed

- [https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/](https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/)

## Installation

- Make sure that you have nodejs installed in you computer (use [NVM](https://github.com/nvm-sh/nvm)). Preference: node 20.9.0.
- `yarn install` if you have the yarn installed globally or `npx yarn install`, if not.

## Running

- `yarn start` or `npm start`

## Another scripts

- Typescript type check: `yarn type-check`
- Prettier formating: `yarn format`
- Linting code: `yarn lint`
- Build: `yarn build`
- Tests: `yarn test`
  ~~- Scaffolding: `yarn g`~~

## Critique

- I had no time to:
  - 123
