# GO React Demo
## Setup
0. Clone this repository
1. Ensure that you have the latest node/npm installed locally
2. Install VSCode (or a similar editor)
3. Install the [React browser tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) for Chrome
4. Start up the docker-compose setup via `docker-compose up --build` from the project root
5. Visit http://localhost:7878/ and http://localhost:7878/api/v1/info to ensure that the server is running correctly
6. Try submitting siege weapons to http://localhost:7878/rate/{siege_weapon}

## Phase 0: Webpack and Friends
**Objective:** Set up the groundwork necessary to deploy JavaScript code.

**Outcome:** We will be able to modify the JavaScript console log message and have it automatically re-bundle.

### Steps
0. Check out the tag `demo-start`
1. Un-comment the `node` section of the docker compose file
2. `cd` into the `go-react` sub-directory
3. Run `npm install`
4. Run `npx webpack` and observe that it creates the `static/bundle.js` file
5. `docker-compose up --build` from the parent directory and observe the log message
6. Change the log message and reload the page
7. Create a TypeScript module, import it in the JavaScript `index.js`, and reload the page

## Phase 1: React Component
**Objective:** Set up a React component that demonstrates the core React concepts.

**Outcome:** We will be able to interact with a component's state through button presses and we will be able to observe the changes in the React 

### Steps
0. Install the required react dependencies
   * `npm install --save react react-dom @types/react @types/react-dom`
   * `npm install --save-dev babel-preset-react`
1. Add the following babel section to `package.json`
   * `  "babel": { "presets": [ "env", "react" ] }`
2. Add the react configuration to the `tsconfig.json` file
   * `"jsx": "react"`
   * `"lib": ["esnext", "dom"]`
3. Update the `webpack.config.js` file to handle react related files
   * add `tsx` and `jsx` files to the resolver extensions
   * add a module rule `{ test: /\.jsx?$/, loader: "babel-loader" }`
   * create a `.babelrc` folder with contents `{ "presets": [ "env", "react" ] }`
4. Update the `index.js` file to import `React` from `react` and `ReactDOM` from `react-dom`
   * use `ReactDOM.render` with a simple JSX fragment and the target element of `go-react-target`
5. Rebuild the docker containers and view the change in the browser
6. Create a component TSX file and include it in `index.js`
   * demonstrate properties
   * demonstrate state

## Phase 2: Tests
**Objective:** Set up a testing framework that allows us to verify our expectations around a component's behavior.

**Outcome:** We will be able to test both pure functions and functions involving React components. We will be able to run tests in watch mode and observe them re-run on file changes.

### Steps
0. Check out the tag `test-start`
1. Install the dependencies via `npm install`
2. Create a TypeScript file that exports a function to sum a list
3. Create a TypeScript jest test that demonstrates its behavior
4. Fill in the gocomponent.spec.ts jest-enzyme test to show that clicking the button increments the counter

## Phase 3: Requests
**Objective:** Set up a requests framework that will perform requests to our back-end service endpoints.

**Outcome:** We will be able to use Promises to describe an asynchronous path from a browser event, through a request & response, to a state update that re-renders the component.

### Steps
0. Install the dependencies `npm install --save axios`
1. Add a second button that gets a random value from the back-end
2. Create a new component that rates siege weapons.

## Reference Materials
* [Webpack Getting Started Guide](https://webpack.js.org/guides/getting-started/#using-a-configuration)
* [Minimal React Webpack Babel Setup](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)
* [Typescript with React & Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
