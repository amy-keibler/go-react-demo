# GO React Demo
## Setup
1. Clone this repository
2. Ensure that you have the latest node/npm installed locally
3. Install VSCode (or a similar editor)
4. Install the [React browser tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) for Chrome
5. Start up the docker-compose setup via `docker-compose up --build` from the project root
6. Visit http://localhost:7878/ and http://localhost:7878/api/v1/info to ensure that the server is running correctly
7. Try submitting siege weapons to http://localhost:7878/rate/{siege_weapon}

## Phase 0: Webpack and Friends
**Objective:** Set up the groundwork necessary to deploy JavaScript code.

**Outcome:** We will be able to modify the JavaScript console log message and have it automatically re-bundle.

### Steps
0. Check out the tag `demo-start`
2. `cd` into the `go-react` sub-directory
3. Run `npm install`
4. Run `npx webpack` and observe that it creates the `static/bundle.js` file
5. `docker-compose up --build` from the parent directory and observe the log message
6. Change the log message and reload the page
7. Create a TypeScript module, import it in the JavaScript `index.js`, and reload the page

## Phase 1: React Component
**Objective:** Set up a React component that demonstrates the core React concepts.

**Outcome:** We will be able to interact with a component's state through button presses and we will be able to observe the changes in the React 

## Phase 2: Tests
**Objective:** Set up a testing framework that allows us to verify our expectations around a component's behavior.

**Outcome:** We will be able to test both pure functions and functions involving React components. We will be able to run tests in watch mode and observe them re-run on file changes.

## Phase 3: Requests
**Objective:** Set up a requests framework that will perform requests to our back-end service endpoints.

**Outcome:** We will be able to use Promises to describe an asynchronous path from a browser event, through a request & response, to a state update that re-renders the component.

## Reference Materials
* [Webpack Getting Started Guide](https://webpack.js.org/guides/getting-started/#using-a-configuration)
* [Minimal React Webpack Babel Setup](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)
* [Typescript with React & Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
