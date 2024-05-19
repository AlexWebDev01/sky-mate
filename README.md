# Sky Mate

## Description

Sky Mate is an aesthetic weather application with a custom clothes advices algorithm based on a daily weather conditions and an air temperature. Developed in collaboration with [Sura design studio](https://suradsgn.com/) that made an amazing [Figma prototype](https://www.figma.com/design/SqpwlpzFQKaC2WB0Lz4nw4/Weather?node-id=0%3A1&t=eh6z2DHfRe4vF30B-1) and under [Timur](https://github.com/Pinkdesu) mentorship about code quality.

## Table of Contents

- [General](#general)
- [Installation](#installation)
- [Usage](#usage)
- [Linters](#linters)
- [Pre-commit](#pre-commit)
- [Testing](#testing)
- [Workflows](#workflows)
- [Contacts](#contacts)

## General

- Tech stack: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- API: [OpenWeather](https://openweathermap.org/api), [IpInfo](https://ipinfo.io)
- Design: [Sura design studio](https://suradsgn.com/)
- Development: [Alex](https://github.com/AlexWebDev01)
- Mentorship: [Timur](https://github.com/Pinkdesu)
- Testing: [Jest](https://jestjs.io/)

## Installation

1. Fork the repository
2. Pull the project from your github
3. Navigate to the project directory: `cd sky-mate`
4. Install the dependencies: `npm install`
5. Rename `.env.dist` to `.env`
6. Add [OpenWeather](https://openweathermap.org/api) and [IpInfo](https://ipinfo.io) private API keys (for getting API keys you need to create an account both on OpenWeather and IpInfo, it's free)

## Usage

- To start the development server: `npm run dev`
- To create a production build: `npm run build`
- To preview production build locally: `npm run preview`

## Linters

To keep project stable and safe there are configured [Eslint](https://typescript-eslint.io/) and [Prettier](https://prettier.io/). You can check configuration in appropriate files: `.prettierrc` and `.eslintrc`. There are also linters scripts that you can run locally to fix and format new code: `npm run lint:fix`.

## Pre-commit

There is also configured pre-commit hook using [lint-staged](https://github.com/lint-staged/lint-staged) and [Husky](https://github.com/typicode/husky) to run [Linters](#linters) for each commit you made. So you don't need to handle it manualy.

After each `git commit` command it runs `npx lint-staged` that is configured in `package.json` file. You'll also see appropriate logs in your terminal executing `git commit` command.

## Testing

In `tests` folder you can find component tests for existing React components made using `Jest`. It's important to maintain tests making changes in existing components or developing new one.

For original repository there is configured appropriate GitHub Action to run tests for each push on any branch. So making changes we can be sure that we didn't broke the base functionality of the app.

To launch tests run the command: `npm run test`\
To check the specific one launch: `npm run test ${testName}`

## Workflows

As you could read in Testing section there is configured a GitHub action for tests. Workflows configuration could be made in `.github/workflows/ci.yml` file. You can add any other appropriate for your needs workflow. Follow the official documentation working with [GitHub Actions](https://docs.github.com/en/actions).

## Contacts

I'm open for opportunities, so feel free to contact me\
Email: `alex.udodov.web@gmail.com`\
[Linkedin](https://www.linkedin.com/in/alex-udodov-5462b8236/)
