# Sky Mate

## Description

Sky Mate is a weather application with a custom clothes advices algorithm based on current weather general conditions and temperature.

## Table of Contents

- [General](#general)
- [Installation](#installation)
- [Usage](#usage)
- [Linters](#linters)
- [Pre-commit](#pre-commit)

## General

- Tech stack: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- API: [OpenWeather](https://openweathermap.org/api), [IpInfo](https://ipinfo.io)
- Design: [Sura design studio](https://suradsgn.com/)
- Development: [Alex](https://github.com/AlexWebDev01)

## Installation

1. Clone the repository: `git clone https://github.com/AlexWebDev01/sky-mate`
2. Navigate to the project directory: `cd sky-mate`
3. Install the dependencies: `npm install`
4. Rename `.env.dist` to `.env`
5. Add [OpenWeather](https://openweathermap.org/api) and [IpInfo](https://ipinfo.io) private API keys (for getting API keys you need to create an account both on OpenWeather and IpInfo, it's free)

## Usage

- To start the development server: `npm run dev`
- To create a production build: `npm run build`
- To preview production build locally: `npm run preview`

## Linters

To keep project stable and safe there are configured [Eslint](https://typescript-eslint.io/) and [Prettier](https://prettier.io/). You can check configuration in appropriate files: `.prettierrc` and `.eslintrc`. There is also linters scripts that you can run locally to fix and format new code: `npm run lint:fix`.

## Pre-commit

There is also configured pre-commit hook using [lint-staged](https://github.com/lint-staged/lint-staged) and [Husky](https://github.com/typicode/husky) to run [Linters](#linters) for each commit you made. So you don't need to handle it manualy.

After each `git commit` command it runs `npx lint-staged` that is configured in `package.json` file. You'll also see appropriate logs in your terminal executing `git commit` command.
