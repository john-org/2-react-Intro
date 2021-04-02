# React Intro

Today we will build this [minimal React site](http://oit2.scps.nyu.edu/~devereld/intermediate/pirates-build/)

## Homework

Continue working on the session one exercises.

<!-- Review the notes below, step through them again to recreate the Pirates project on your own. If you need a completed version for reference see the branch `summer2019-done`.

Add date and description fields to the form. -->

## Reading

- [The Main Concepts of React](https://reactjs.org/docs/hello-world.html)

## Create React App

Creating a React project requires a lot of tooling and setup. Fortunately Facebook has created a bootstrapping system called [Create React App](https://facebook.github.io/create-react-app/)

To create a new project, ensure that you are cd'ed in today's project folder and run:

```sh
$ npx create-react-app pirates
```

Note: `npm` _manages_ packages while `npx` _executes_ Node packages. The first argument `create-react-app` is the package you are executing, the second `pirates` is the name of the project.

Run the project:

```sh
$ cd pirates
$ code .

```

Open VS Code's terminal and type `$ npm run start`.

### Examining the Project Structure

Open `index.html` from the `pirates/public` folder.

- Everything is inserted into this div:`<div id="root"></div>`

Open `index.js` from `src`.

- This is the only place where `ReactDOM.render()` will occur:

```js
ReactDOM.render(<App />, document.getElementById("root"));
```

Open `App.js` (note the capital "A") from `src`.

This is the only React component in this starter project.

Instead of using a script tag, this component imports React from the node modules folder:

```js
import React from "react";
```

`import` and `export` are part of the ES6 Module system that allows us to break down code into smaller pieces. ES6 modules are not natively supported in all browsers so a "bundler" is required. [Webpack](https://webpack.js.org/) has been installed by Create React App and is working under the hood in our project.

The main body of the component is a function that returns JSX (_not_ HTML).

### JSX

Note this code:

```js
import React from "react";

function App() {
  return <h1 id="wrapper">Hello World</h1>;
}
```

You cannot have HTML in JavaScript as shown above. The portion that looks like HTML is in fact [JSX](https://reactjs.org/docs/introducing-jsx.html).

It is transformed in regular JavaScript under the hood:

```js
import React from "react";

function App() {
  return React.createElement(
    "h1",
    {
      id: "wrapper",
    },
    "Hello World"
  );
}
```

The library responsible for this is called [Babel](https://babeljs.io/).

JSX requirements and features:

1. `src={logo}` - JSX curly braces allow the use of JS expressions
2. `className="App-header"` - `class` is a reserved word in JavaScript
3. `<img ... />` xhtml style closing tags - every element in JSX needs to be closed
4. everything returned must be nested in a single tag

Commenting code in JSX looks a little different from regular JavaScript comments and is supported in VS Code. Try commenting the following line using the `cmd-/` shortcut:

`{/* <img src={logo} className="logo" alt="logo" /> */}`

Save and note the hot reloading.

### Project Prep

IMPORTANT - Move the `data` and `assets` folders from `reference` to the `src` directory in `pirates`.

Import our fonts and clean up the default html template.

Copy the material below and overwrite `public/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Pirata+One"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Trade+Winds"
      rel="stylesheet"
    />

    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />

    <title>Pirates!</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### Components

All modern front end systems employ a component architecture.

Create and use a Pirate component in `App.js`:

```js
import React from "react";

function App() {
  return <Pirate />;
}

function Pirate() {
  return <p>Ahoy there!</p>;
}

export default App;
```

Install the [React Developer Tool](https://chrome.google.com/webstore/search/react) for Chrome or Firefox and inspect the components.

## Props

Add a property (`prop`) to the Pirate component instance in `App.js`:

```js
function App() {
  return <Pirate tagline="Ahoy from the Pirate Component" />;
}
```

And render it:

```js
function Pirate(props) {
  return <p>{props.tagline}</p>;
}
```

We can [destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the tagline variable from props:

```js
function Pirate({ tagline }) {
  return <p>{tagline}</p>;
}
```

The fact that you can pass props to a reusable component makes them very powerful.

```js
function App() {
  return (
    <div>
      <Pirate tagline="Ahoy from the Pirate Component" />
      <Pirate tagline="Pirate Component" />
      <Pirate tagline="Ahoy" />
    </div>
  );
}
```

---

## DEMO Children

React includes children as a property.

```js
// Note: this structure is simplified
function App() {
  return React.createElement(
    (type: "h1"),
    (props: {
      id: "wrapper",
      children: "Hello World",
    })
  );
}
```

Here we are not using `<Pirate />` as a self closing tag:

```js
import React from "react";

function App() {
  return <Pirate>Avast</Pirate>;
}

function Pirate(props) {
  return <p>{props.children}</p>;
}

export default App;
```

If we add another property and use destructuring our components would look like this:

```js
import React from "react";

function App() {
  return <Pirate tagline="mateys!!">Avast</Pirate>;
}

function Pirate({ children, tagline }) {
  return (
    <p>
      {children} {tagline}
    </p>
  );
}

export default App;
```

A term you will hear a lot is "composition" or "compose." A key feature of React is the composition of components.

---

Create a `components` folder in `src` to hold our components.

Create a second component `Header.js` in the new components directory:

```js
import React from "react";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1>FooBar</h1>
    </div>
  );
}

export default Header;
```

Note the errors.

Import the logo and some css for it:

```js
import "../assets/css/Header.css";
import logo from "../assets/img/anchor.svg";
```

Import it and render it to the DOM via App while passing it a prop:

```js
import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header title="Pirate Database!" />
      <Pirate tagline="Ahoy from the Pirate Component" />
    </div>
  );
}

function Pirate({ tagline }) {
  return <p>{tagline}</p>;
}

export default App;
```

Use the title prop:

```js
function Header(props) {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1>{props.title}</h1>
    </div>
  );
}
```

Destructure it:

```js
function Header({ title }) {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1>{title}</h1>
    </div>
  );
}
```

Inspect the output using the React Developer Tool.

## Calling a Function

Create an array of pirate quotes and a randomize function that selects a random pirateCall:

```js
const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

function randomize() {
  return pirateCalls[Math.floor(Math.random() * pirateCalls.length)];
}
```

And then call the function:

```js
function App() {
  return (
    <div>
      <Header title={randomize()} />
      <Pirate tagline="Ahoy from the Pirate Component" />
    </div>
  );
}
```

Note: it would be more common to see an arrow function being employed.

Change the randomize function:

```js
const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)];
```

## Importing and Exporting Components

### Quick Review

1. [.map()](https://www.freecodecamp.org/news/the-ultimate-guide-to-javascript-array-methods-map/)

```js
var arr = [1, 2, 3];

var multiplyByTwo = arr.map(function (num) {
  return (num *= 2);
});

console.log(multiplyByTwo);
```

2. [.filter()](https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/)

```js
var arr = [1, 2, 3];

var filterLessThanThree = arr.filter(function (num) {
  return num < 3;
});

console.log(filterLessThanThree);
```

3. [.reduce](https://www.freecodecamp.org/news/reduce-f47a7da511a9/)

```js
var arr = [1, 2, 3];

var arrayTotal = arr.reduce(function (total, amount) {
  return total + amount;
}, 0);

console.log(arrayTotal);
```

## Convert the Header and Pirate component to standalone components.

- Comment out the Header and Pirate components from `App.js`.
- Comment out the imported css and logo
- Create a `components` folder in `src`.
- Create `Pirate.js` in the new `components` folder.

In `src/components/Pirate.js`:

```js
import React from "react";
import "../assets/css/Pirate.css";

function Pirate(props) {
  return (
    <div className="pirate">
      <p>{props.tagline}</p>
    </div>
  );
}

export default Pirate;
```

We use the component in `App.js` by first importing it and then returning it:

```js
import React from "react";
import Pirate from "./components/Pirate";

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

function App() {
  return (
    <div>
      <Pirate tagline="Ahoy from the Pirate Component" />;
    </div>
  );
}

export default App;
```

So far we have only used React functional components. There is another type called a React class component. You should be familiar with both.

Convert the Pirate component into a class component:

```js
import React from "react";
import "../assets/css/Pirate.css";

// function Pirate(props) {
//   return (
//     <div className="pirate">
//       <p>{props.tagline}</p>
//     </div>
//   );
// }

class Pirate extends React.Component {
  render() {
    return (
      <div className="pirate">
        <p>{this.props.tagline}</p>
      </div>
    );
  }
}

export default Pirate;
```

Note the render method and `this` in the paragraph. The JavaScript `this` keyword refers to the object it belongs to.

A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from `React.Component` and create a render function which returns a React element.

## Header Functional Component

Create a new `Header.js` component in the `components` folder:

```js
import React from "react";
import "../assets/css/Header.css";
import logo from "../assets/img/anchor.svg";

function Header(props) {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1>{props.title}</h1>
    </div>
  );
}

export default Header;
```

Import `Header.js` into `App.js`:

```js
import Header from "./components/Header";
```

And add it to `App`:

```js
function App() {
  return (
    <div>
      <Header title={randomize()} />
      <Pirate tagline="Ahoy from the Pirate Component" />;
    </div>
  );
}
```

Note that when we have multiple lines we use `return( ... )` instead of just `return ...` and we _must_ have all items inside an enclosing element.

## Rendering Multiple Components

Import an array of sample pirates into `App.js`:

```js
import piratesFile from "./data/sample-pirates-array";
```

In `App.js` create multiple pirates using `.map()`:

```js
function App() {
  return (
    <div>
      <Header title={randomize()} />
      {piratesFile.map((pirate) => (
        <Pirate tagline={randomize()} />
      ))}
    </div>
  );
}
```

Pass some data from the piratesFile as an additional property:

```js
function App() {
  return (
    <div>
      <Header title={randomize()} />
      {piratesFile.map((pirate) => (
        <Pirate tagline={randomize()} name={pirate.name} />
      ))}
    </div>
  );
}
```

In `Pirate.js` we access the data via props:

```js
class Pirate extends React.Component {
  render() {
    return (
      <div className="pirate">
        <h2>{this.props.name}</h2>
        <p>Favorite saying: {this.props.tagline}</p>
      </div>
    );
  }
}
```

Note the browser console warning: "Each child in a list should have a unique "key" prop."

Add a key using the index of the item in the array (`.map` can take the index of the array as an argument):

```js
function App() {
  return (
    <div>
      <Header title={randomize()} />
      {piratesFile.map((pirate, index) => (
        <Pirate key={index} tagline={randomize()} name={pirate.name} />
      ))}
    </div>
  );
}
```

### DEMO - React Keys

Review keys in the [React](https://reactjs.org/docs/lists-and-keys.html) documentation.

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

function App() {
  return (
    <div>
      <Header title={randomize()} />
      <ul>{listItems}</ul>
      {piratesFile.map((pirate, index) => (
        <Pirate key={index} tagline={randomize()} name={pirate.name} />
      ))}
    </div>
  );
}
```

The numbers list needs a key:

`const listItems = numbers.map(number => <li key={number}>{number}</li>);`

Don’t use indexes for keys if the order or number of items may change. This will negatively impact performance and will cause issues.

<!-- end DEMO -->

Use the pirates name as a unique id:

`<Pirate key={pirate.name} tagline={randomize()} name={pirate.name} />`

In App.js, instead of passing just the name (`name={pirate.name}`) we will pass the entire pirate object (`pirate={pirate}`):

```js
function App() {
  return (
    <div>
      <Header title={randomize()} />
      {piratesFile.map((pirate) => (
        <Pirate key={pirate.name} tagline={randomize()} pirate={pirate} />
      ))}
    </div>
  );
}
```

Import an avatar in Pirate.js:

`import avatar from '../assets/img/avatar.png';`

and use the new pirate prop:

```js
class Pirate extends React.Component {
  render() {
    return (
      <div className="pirate">
        <ul>
          <li>
            <img src={avatar} alt="pirate" />
            <h3>{this.props.pirate.name}</h3>
            <p>Died: {this.props.pirate.year}</p>
            <p>Favorite weapon: {this.props.pirate.weapon}</p>
            <p>Sailed on: {this.props.pirate.vessel}</p>
          </li>
          <li>
            <h2>"{this.props.tagline}"</h2>
            <p>{this.props.pirate.desc}</p>
          </li>
        </ul>
      </div>
    );
  }
}
```

Destructure the variables from props:

```js
class Pirate extends React.Component {
  render() {
    const { name, year, weapon, vessel, desc } = this.props.pirate;
    const { tagline } = this.props;
    return (
      <div className="pirate">
        <ul>
          <li>
            <img src={avatar} alt="pirate" />
            <h3>{name}</h3>
            <p>Died: {year}</p>
            <p>Favorite weapon: {weapon}</p>
            <p>Sailed on: {vessel}</p>
          </li>
          <li>
            <h2>"{this.props.tagline}"</h2>
            <p>{desc}</p>
          </li>
        </ul>
      </div>
    );
  }
}
```

Note: `tagline` cannot be destructured from pirate because it is not part of the pirate prop.

Comment out the class component and rewrite the functional component to mirror the class component:

```js
function Pirate({ tagline, pirate: { desc, name, year, weapon, vessel } }) {
  return (
    <div className="pirate">
      <ul>
        <li>
          <img src={avatar} alt="pirate" />
          <h3>{name}</h3>
          <p>Died: {year}</p>
          <p>Favorite weapon: {weapon}</p>
          <p>Sailed on: {vessel}</p>
        </li>
        <li>
          <h2>{tagline}</h2>
          <p>{desc}</p>
        </li>
      </ul>
    </div>
  );
}
```

Improve the HTML for the Pirate component by making it more semantic:

```js
function Pirate({ tagline, pirate: { desc, name, year, weapon, vessel } }) {
  return (
    <main>
      <aside className="pirate-data">
        <ul>
          <li>
            <img src={avatar} alt="pirate" />
          </li>
          <li>
            <h3>{name}</h3>
          </li>
          <li>Died: {year}</li>
          <li>Favorite weapon: {weapon}</li>
          <li>Sailed on: {vessel}</li>
        </ul>
      </aside>
      <article>
        <h2>{tagline}</h2>
        <p>{desc}</p>
      </article>
    </main>
  );
}
```

Use CSS grid instead of flexbox to format the Pirate components.

In `Pirate.css`:

```css
main {
  font-family: "Trade Winds", cursive;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1.5rem;
  align-items: center;
  border-bottom: 1px dotted #007eb6;
  margin: 0 2rem;
}

main ul {
  list-style: none;
  padding: 0;
}

article {
  line-height: 1.8;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

h2,
h3 {
  font-family: "Trade Winds", cursive;
  font-weight: normal;
}
```

## React Forms

Create a new component `PirateForm.js` in the components folder:

```js
import React from "react";
import AddPirateForm from "./AddPirateForm";

const PirateForm = () => {
  return (
    <div className="pirate">
      <h3>Ahoy from the PirateForm Component</h3>
      <AddPirateForm />
    </div>
  );
};

export default PirateForm;
```

Import PirateForm and add it to `App.js`:

```js
import PirateForm from "./components/PirateForm";
```

Note the import statement and JSX. This file relies on another component.

Create the component - `AddPirateForm.js` in components:

```js
import React from "react";
import "../assets/css/AddPirateForm.css";

const AddPirateForm = () => {
  return (
    <form>
      <input type="text" placeholder="Pirate name" />
      <input type="text" placeholder="Pirate vessel" />
      <input type="text" placeholder="Pirate weapon" />
      <button type="submit">Add Pirate</button>
    </form>
  );
};

export default AddPirateForm;
```

Use PirateForm in `App.js`:

```js
function App() {
  return (
    <div>
      <Header title={randomize()} />
      <PirateForm />
      {piratesFile.map((pirate, index) => (
        <Pirate key={index} pirate={pirate} />
      ))}
    </div>
  );
}
```

## The React Developer Tool

Using the [React Developer Tool](https://chrome.google.com/webstore/search/react) in Chrome inspect:

- https://www.netflix.com/
- https://www.codecademy.com/
- https://www.nytimes.com/

Note the key property on repeated or 'mapped' UI elements.

Examine the current application's component structure (nesting).

Take a brief tour of the options in the React Developer tool.

## DEMO Adding Events

<!-- do this in the form? -->

Demo in `App.js`:

```js
const handleClick = () => alert("whoa");

function App() {
  return (
    <div>
      <Header title={randomize()} />
      <button onClick={handleClick}>Click Me!</button>
      <PirateForm />
      {piratesFile.map((pirate, index) => (
        <Pirate key={index} pirate={pirate} />
      ))}
    </div>
  );
}
```

In vanilla JS we use an event listener to listen for events. In React you use a camel case event on the element.

<!-- end DEMO -->

Add an event to the AddPirateForm:

`<form onSubmit = { (e) => this.createPirate(e) }>`

And to `AddPirateForm`:

```js
class PirateForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.createPirate}>
        <input type="text" placeholder="Pirate name" />
        <input type="text" placeholder="Pirate vessel" />
        <input type="text" placeholder="Pirate weapon" />
        <button type="submit">Add Pirate</button>
      </form>
    );
  }
}
```

And create a function in `AddPirateForm`:

```js
function createPirate(event) {
  console.log("making a pirate");
}
```

Clicking on a submit button reloads the page so add:

```js
function createPirate(event) {
  event.preventDefault();
  console.log("making a pirate");
}
```

E.g.:

```js
import React from "react";
import "../assets/css/AddPirateForm.css";

function createPirate(event) {
  event.preventDefault();
  console.log("making a pirate");
}

const AddPirateForm = () => {
  return (
    <form onSubmit={(e) => createPirate(e)}>
      <input type="text" placeholder="Pirate name" />
      <input type="text" placeholder="Pirate vessel" />
      <input type="text" placeholder="Pirate weapon" />
      <button type="submit">Add Pirate</button>
    </form>
  );
};

export default AddPirateForm;
```

Test using the form button.

## React Controlled Components

Demo: a class component with state:

```js
import React from "react";
import "../assets/css/AddPirateForm.css";

class AddPirateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Pirate name"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Add Pirate</button>
      </form>
    );
  }
}

export default AddPirateForm;
```

<!-- STOPPED UPDATING -->

Demo: the same component using the [ES6 class fields](https://blog.g2i.co/react-class-components-with-es6-and-class-fields-927b2b59f94e) proposal:

```js
import React from "react";
import "../assets/css/AddPirateForm.css";

class AddPirateForm extends React.Component {
  state = { value: "" };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Pirate name"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Add Pirate</button>
        <p>{this.state.value}</p>
      </form>
    );
  }
}

export default AddPirateForm;
```

## React Form: Uncontrolled

In a class component a function is actually a method on the extended class so and is placed within the class. In a functional component they are typically included outside the function.

In order to capture the values in the form fields we will create [refs](https://reactjs.org/docs/uncontrolled-components.html) in an uncontrolled component.

For ease of understanding, `Refs` in React can be thought of as being roughly equivalent to `document.querySelector()`.

Add [refs](https://facebook.github.io/react/docs/refs-and-the-dom.html) to the form to store references to the input.

In `AddPirateForm.js`:

```js
import React from "react";
import "../assets/css/AddPirateForm.css";

class AddPirateForm extends React.Component {
  nameRef = React.createRef();
  vesselRef = React.createRef();
  weaponRef = React.createRef();

  createPirate = (event) => {
    event.preventDefault();
    console.log("making a pirate");
  };

  render() {
    return (
      <form onSubmit={this.createPirate}>
        <input
          type="text"
          name="name"
          placeholder="Pirate name"
          ref={this.nameRef}
        />
        <input
          type="text"
          name="vessel"
          placeholder="Pirate vessel"
          ref={this.vesselRef}
        />
        <input
          type="text"
          name="weapon"
          placeholder="Pirate weapon"
          ref={this.weaponRef}
        />
        <button type="submit">Add Pirate</button>
      </form>
    );
  }
}

export default AddPirateForm;
```

Create a pirate object in `AddPirateForm`'s `createPirate` function.

`AddPirateForm.js`:

```js
createPirate = (event) => {
  event.preventDefault();
  const pirate = {
    name: this.nameRef.current.value,
    vessel: this.vesselRef.current.value,
    weapon: this.weaponRef.current.value,
  };
  console.log(pirate);
};
```

Test by entering a pirate in the form and examining the browser console.

## fall2019 Start Here

## State

State is data at a particular moment in time. It’s the current “state” of your data.

JavaScript frameworks, including React, Angular and Vue, use state _and_ components to make managing the UI easier.

Instead of using vanilla JS to target specific elements in the DOM and adjust a class or a style, you treat your data, or state, as the single source of truth.

When you update your state, your framework renders a new copy of the UI based on the new data. You never have to think about which element in the DOM to target or how it needs to change.

The key difference between props and [state](https://facebook.github.io/react-native/docs/state.html):

- state is internal and controlled by the component itself
- props are external and controlled by whatever component renders the component. - [ref](http://buildwithreact.com/tutorial/state).

### The Pirate Object in State

Initialize state in `App.js` to an empty object.

Since `App.js` is a functional component and functional components are not used for state we need to convert it to a class component.

`App.js`:

```js
import React from "react";
import Pirate from "./components/Pirate";
import Header from "./components/Header";
import PirateForm from "./components/PirateForm";

import piratesFile from "./data/sample-pirates-array";

class App extends React.Component {
  render() {
    const pirateCalls = [
      "Aaarg, belay that!",
      "Avast me hearties!",
      "Shiver me timbers!",
    ];

    const randomize = () =>
      pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

    return (
      <>
        <Header title={randomize()} />
        <PirateForm />
        {piratesFile.map((pirate) => (
          <Pirate key={pirate.id} tagline={randomize()} pirate={pirate} />
        ))}
      </>
    );
  }
}

export default App;
```

Now we can add state:

```js
class App extends React.Component {

  state = {
    pirates: piratesFile,
  }
```

In React tools, find `App` note the `state` entry.

Now that we have the pirates in state we can use it as the basis for our map:

```js
render() {
  return (
    <>
      <Header title={randomize()} />
      <PirateForm addPirate={this.addPirate} />
        {this.state.pirates.map(pirate => (
          <Pirate key={pirate.id} tagline={randomize()} pirate={pirate} />
        ))}
    </>
  );
}
```

And add a method to `App.js` that will accept the new pirate created by the form:

```js
const addPirate = (pirate) => {
  console.log(pirate);
};
```

Our `createPirate` function in `AddPirateForm` is called and works but it does not save the new pirate.

### Passing a Function as a Prop

We need to make the `addPirate` function available to the `AddPirateForm` by passing it down the component chain using prop drilling:

`App.js > PirateForm > AddPirateForm`

- To get from `PirateForm` from `App.js` we will use `<PirateForm addPirate={this.addPirate} />`:

```js
render() {
  return (
    <>
      <Header title={randomize()} />
      <PirateForm addPirate={addPirate} />
      {this.state.pirates.map(pirate => (
        <Pirate key={pirate.id} tagline={randomize()} pirate={pirate} />
      ))}
    </>
  );
}
```

Examine the `PirateForm` props in React tool. We have passed the function in App.js down to the component just as we might pass any property.

The function needs to be available in AddPirateForm which is one level deeper.

Pass the prop to `AddPirateForm` from `PirateForm`:

```js
import React, { Component } from "react";
import AddPirateForm from "./AddPirateForm";

class PirateForm extends Component {
  render() {
    return (
      <div className="pirate">
        <h3>Add a Pirate</h3>
        <AddPirateForm addPirate={this.props.addPirate} />
      </div>
    );
  }
}

export default PirateForm;
```

Examine the `AddPirateForm` props in React's inspector. Note the property.

Note that since there is no reference to `AddPirateForm` in `App.js` we needed to perform this props pass via `PirateForm`.

We will use `createPirate` to develop a pirate instance and then pass the result to addPirate to store the instance in state.

In `AddPirateForm`:

`this.props.addPirate(pirate);`

```js
createPirate = (event) => {
  event.preventDefault();
  const pirate = {
    name: this.nameRef.current.value,
    vessel: this.vesselRef.current.value,
    weapon: this.weaponRef.current.value,
  };
  this.props.addPirate(pirate);
};
```

In App.js, expand on the function.

Spread a copy of the current state into a new local pirates variable:

```js
const addPirate = (pirate) => {
  console.log(pirate);
  //take a copy of the current state and put it into pirates var
  const pirates = [...this.state.pirates];
  console.log(pirates);
};
```

We have two variables:

1. `pirate` - the newly created pirate created via the form
2. `pirates` - the existing collection of pirates

Add the pirate passed from the form to the new pirates array:

```js
const addPirate = (pirate) => {
  console.log(pirate);
  //take a copy of the current state and put it into pirates var
  const pirates = [...this.state.pirates];
  console.log(pirates);
  pirates.unshift(pirate);
  console.log(pirates);
};
```

Examine the variables in the inspector.

And then use React's `setSate()` function to update the state:

```js
const addPirate = (pirate) => {
  console.log(pirate);
  //take a copy of the current state and put it into newPirates var
  const newPirates = [...this.state.pirates];
  console.log(newPirates);
  newPirates.unshift(pirate);
  console.log(newPirates);
  //set state pirates with var pirates
  this.setState({ pirates: newPirates });
};
```

Note: whenever you use `setState()` it triggers a re-rendering of the content without refreshing the page.

Try: `pirates.push(pirate);`

Another way of accomplishing the same state change might be:

- `this.setState({ pirates: this.state.pirates.concat([pirate]) });`

`concat()` is an array method that returns a new array.

- ` this.setState({ pirates: [...this.state.pirates, pirate] });`

The [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...` creates a new array using an existing array as one part of it.

Remember, in order for us to see this we need to map the pirates to state and not to the imported pirates:

```js
render() {
  return (
    <>
        <Header title={randomize()} />
        <PirateForm addPirate={addPirate} />
        {this.state.pirates.map(pirate => (
          <Pirate key={pirate.id} tagline={randomize()} pirate={pirate} />
        ))}
    </>
  );
}
```

We should now be able to create a pirate using the form and see it in the browser.

## Resetting the Form

We have refs on the input fields. When we click "Add Pirate" the form still holds the data so we need to reset it.

- Use `event.currentTarget.reset();` in `AddPirateFrom`:

```js
createPirate = (event) => {
  event.preventDefault();
  const pirate = {
    name: this.nameRef.current.value,
    vessel: this.vesselRef.current.value,
    weapon: this.weaponRef.current.value,
  };
  this.props.addPirate(pirate);
  event.currentTarget.reset();
};
```

The form should now empty on submit and the `addPirate` function is called to store our pirate in state.

## Removing a Pirate

Add a new method to `App.js`:

```js
const removePirate = (index) => {
  console.log(index);
  const pirates = [...this.state.pirates];
  pirates.splice(index, 1);
  console.log(pirates);
  this.setState({ pirates: pirates });
};
```

We will locate the control to remove pirates in the `Pirate.js` component.

Pass the prop to `Pirate` from App using `removePirate = {this.removePirate}`:

`App.js`:

```js
{
  this.state.pirates.map((pirate) => (
    <Pirate
      key={pirate.id}
      tagline={randomize()}
      pirate={pirate}
      removePirate={this.removePirate}
    />
  ));
}
```

Since we want the controls to be associated with each Pirate entry we'll add them to the `Pirate` component by including a new list item:

`<li><button onClick={() => this.props.removePirate(0)}>Remove ☠️</button></li>`

`<button onClick={() => removePirate(0)}>Remove ☠️</button>`

- `Pirate.js` functional component:

```js
function Pirate({
  removePirate,
  tagline,
  pirate: { desc, name, year, weapon, vessel },
}) {
  return (
    <main>
      <aside className="pirate-data">
        <ul>
          <li>
            <img src={avatar} alt="pirate" />
          </li>
          <li>
            <h3>{name}</h3>
          </li>
          <li>Died: {year}</li>
          <li>Favorite weapon: {weapon}</li>
          <li>Sailed on: {vessel}</li>
        </ul>
      </aside>
      <article>
        <h2>{tagline}</h2>
        <p>{desc}</p>
        <button onClick={() => removePirate(0)}>Remove ☠️</button>
      </article>
    </main>
  );
}
```

Class component:

```js
class Pirate extends React.Component {
  render() {
    const { name, year, weapon, vessel, desc } = this.props.pirate;
    return (
      <main>
        <aside className="pirate-data">
          <ul>
            <li>
              <img src={avatar} alt="pirate" />
            </li>
            <li>
              <h3>{name}</h3>
            </li>
            <li>Died: {year}</li>
            <li>Favorite weapon: {weapon}</li>
            <li>Sailed on: {vessel}</li>
          </ul>
        </aside>
        <article>
          <h2>"{this.props.tagline}"</h2>
          <p>{desc}</p>
          {/* prettier-ignore */}
          <button onClick={() => this.props.removePirate(0)}>Remove <span role="img" arial-label="skull">☠️</span>
          </button>
        </article>
      </main>
    );
  }
}
```

We have temporarily hard coded the button to remove just one pirate from the list.

In order to create a generic delete that will work for all pirates, pass the index to the Pirate component `index={index}` in App.

- `App.js`:

```js
  render() {
    return (
      <>
        <Header title={randomize()} />
        <PirateForm addPirate={this.addPirate} />
        {this.state.pirates.map((pirate, index) => (
          <Pirate
            key={index}
            index={index}
            pirate={pirate}
            removePirate={this.removePirate}
          />
        ))}
      </>
    );
  }
```

Pass the index value of the pirate in question to the method:

In `Pirate.js`:

```html
<button onClick={() => this.props.removePirate(this.props.index)}>
  Remove
</button>
```

## Build a Site

Add an entry to `package.json`:

```js
"homepage": ".",
```

Then in the terminal run:

```sh
npm run build
```

## Adding Form Fields

In AddPirateForm.js:

```js
import React from "react";
import "../assets/css/AddPirateForm.css";

class AddPirateForm extends React.Component {
  nameRef = React.createRef();
  vesselRef = React.createRef();
  weaponRef = React.createRef();
  yearRef = React.createRef();
  descRef = React.createRef();

  createPirate = (event) => {
    event.preventDefault();
    const pirate = {
      name: this.nameRef.current.value,
      vessel: this.vesselRef.current.value,
      weapon: this.weaponRef.current.value,
      year: this.yearRef.current.value,
      desc: this.descRef.current.value,
    };
    this.props.addPirate(pirate);
    event.currentTarget.reset();
  };

  render() {
    return (
      <>
        <h3>Add a Pirate</h3>
        <form onSubmit={this.createPirate}>
          <input
            type="text"
            name="name"
            placeholder="Pirate name"
            ref={this.nameRef}
          />
          <input
            type="text"
            name="vessel"
            placeholder="Pirate vessel"
            ref={this.vesselRef}
          />
          <input
            type="text"
            name="weapon"
            placeholder="Pirate weapon"
            ref={this.weaponRef}
          />
          <input
            type="number"
            name="year"
            placeholder="Pirate year"
            ref={this.yearRef}
          />
          <textarea
            name="desc"
            placeholder="Pirate description"
            ref={this.descRef}
          />
          <button type="submit">Add Pirate</button>
        </form>
      </>
    );
  }
}

export default AddPirateForm;
```

Edit CSS:

```css
textarea,
input {
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
}
```

<!-- ## Destructuring

`const { name, year, weapon, vessel, desc } = this.props.pirate;`

Pirate.js:

```js
import React from 'react';
import '../assets/css/Pirate.css';
import avatar from '../assets/img/avatar.png';

class Pirate extends React.Component {
  render() {
    const { name, year, weapon, vessel, desc } = this.props.pirate;
    return (
      <div className="pirate">
        <ul>
          <li>
            <img src={avatar} alt="pirate" />
            <h3> {name}</h3>
            <p>Died: {year}</p>
            <p>Favorite weapon: {weapon}</p>
            <p>Sailed on: {vessel}</p>
          </li>
          <li>
            <p className="desc">{desc}</p>

            <button
              className="btn-remove"
              onClick={() => this.props.removePirate(this.props.index)}
            >
              Remove ☠️
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pirate;
``` -->

## Persisting the data

Components have life cycles - they are created, updated and removed.

React offers a number of so-called special [lifecycle methods](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class) that can be used.

Add this to App.js:

```js
componentDidMount() {
  console.log('mounted');
}
```

We will use this to connect to a backend service called [Firebase](https://firebase.google.com)

`npm install --save re-base firebase`

Create `base.js` in `src`:

```js
import Rebase from "re-base"; // mirrors state to FB
import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAHnKw63CUBAqSuCREgils_waYJ0qwpGiU",
  authDomain: "daniel-deverell-pirates.firebaseapp.com",
  databaseURL: "https://daniel-deverell-pirates.firebaseio.com",
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };
```

Import it into App.js:

```js
import { base } from "./base";
```

And reset the pirates state to an empty array:

```js
state = {
  pirates: [],
};
```

Use the lifecycle methods to sync to the database in App.js:

```js

  componentWillMount() {
    this.ref = base.syncState(`pirates`, {
      context: this,
      state: 'pirates',
      asArray: true,
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

```

Create a pirate to test.

Create a method in App.js:

```js
loadSamples = () => {
  this.setState({ pirates: piratesFile });
};
```

Create a button below the header in App.js:

```js
<button onClick={this.loadSamples}>Load Samples</button>
```

And test.

## Notes

### Prototypal inheritance

Let's look at the `class` syntax we will be using in React.

Open `1-inheritance.html` from `reference > classes` in a browser.

Classes in React (ref. `react-overview > forms.js`) are based on JS prototypal inheritance.

We have a constructor function:

```js
function Car(model, make) {
  this.model = model;
  this.make = make;
}
```

and a car with properties.

```sh
> expo
```

Prototypal inheritance - methods on the original constructor will be inherited.

Add a prototype:

```js
Car.prototype.drive = function () {
  console.log(
    `Vroom vroom 🚗 🚗 🚗! I'm a ${this.model} and I'm a ${this.make}`
  );
};
```

Examine the prototype on the car object.

Add a second car:

```js
const miata = new Car("Miata", "Mazda");
```

Execute the drive method:

```sh
> miata.drive()
```

Add an additional method:

```js
Car.prototype.stop = function () {
  console.log(`Screech! 🚒 🚑 🚓`);
};
```

```sh
> expo.stop()
```

In classic protoypal inheritance the function `Car` is our 'constructor' and we add methods using `Car.prototype`.

### Classes

See `2-classes.html`

Functionally, this is the equivalent of the first file. Note the new syntax:

```js
class Car {
  constructor(model, make) {
    this.model = model;
    this.make = make;
  }
  drive() {
    console.log(
      `Vroom vroom 🚗🚗🚗! I'm a ${this.model} and I'm a ${this.make}`
    );
  }
  stop() {
    console.log(`Screech! 🚒🚑🚓`);
  }
}
```

```sh
> expo
> expo.drive()
> expo.stop()
```

### Static Methods

```js
static info() {
  console.log('I\'m a static method, cars only need apply' );
}
```

```sh
> expo.info()
> Car.info()
> expo
```

Inspect the expo prototype.

<!-- A static method is similar to `Array.of` - in that it is not inherited. -->

<!-- ### Static methods on an Array -->

<!-- `Array.of` and the spread operator:

[Emmet](https://docs.emmet.io/abbreviations/syntax/) (ctrl-e):

`ul>li*4>a[href="#"]{link}`

```sh
> Array.of(1,2,3,4)
> const links = document.querySelectorAll('li')
> Array.of(links)
> Array.of(...links)
```

But `.of` is not inerited

```sh
> numbers = [6,7,8,9]
> numbers.of(1,2,3,4)
``` -->

A static method is applied to Cars only:

```sh
Car.info()
```

### Getters and Setters

```js
get description() {
  return `${this.model} is a ${this.make} type of car`;
}
```

- Not a method (no braces when calling)

```sh
> expo.description
```

Setters

```js
set nicknames(value) {
  this.nick = value.trim();
}
```

```sh
> expo.nicknames = '   sadsack  '
```

```js
get nicknames() {
  return this.nick.toUpperCase();
}
```

```sh
> expo.nicknames
```

or

```js
  get description() {
    return `${this.model} is a ${this.make} with the nickname "${this.nick}."`;
  }
```

### Extending Classes

See `3-extending-classes.html`

```js
class Animal {
  constructor(name) {
    this.name = name;
    this.thirst = 100;
    this.belly = [];
  }
  drink() {
    this.thirst -= 10;
    return this.thirst;
  }
  eat(food) {
    this.belly.push(food);
    return this.belly;
  }
}

const rhino = new Animal("Rhiney");
```

```sh
> rhino
> rhino.eat('lilies')
> rhino.eat('hunters')
> rhino.drink()
> rhino
```

#### Super and Extending Classes

To extend a class you must call the thing that you are extending first.

E.g. we want to extend our Animal class to include a subclass of `dogs`.

```js
class Dog extends Animal {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}
```

This will not work:

```js
const yorik = new Dog("Yorik", "Terrier");
```

We need to call `super` first and here, super needs a name:

```js
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}
```

```sh
> yorik
```

Add a bark method:

```js
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log(`Bark bark my name is ${this.name} and I\'m a dog`);
  }
}
```

Dogs can bark. Rhinos can't:

```sh
> yorik.bark()
> rhino.bark()
```

### Extending Arrays

See `4-extending-arrays.html`

Make our own classes modeled after Array.

Start off with an array with a property:

```js
const favMovies = new MovieCollection(
  "My Favorite Movies",
  { name: "Bee Movie", stars: 10 },
  { name: "Star Wars Trek", stars: 1 },
  { name: "Virgin Suicides", stars: 7 },
  { name: "King of the Road", stars: 8 }
);
```

We create a class _off_ the Array.

Adding name and using a spread operator to add the items:

```js
class MovieCollection extends Array {
  constructor(name, ...items) {
    super(...items);
    this.name = name;
  }
```

Super calls the Array prototype with a spread operator.

```sh
> favMovies[0]
> favMovies.name
```

We have an Array that also has properties (possible because in JS, Arrays are objects), e.g.:

```sh
> typeof [1,2]
```

Methods using the array prototype methods can be used:

```js
add(movie) {
  this.push(movie);
}
```

## for... In Loops

A `for...in` loop is a modified version of a for loop that you can use to loop through objects.

The first part, `key`, is a variable that gets assigned to the object key on each loop. The second part, is the object to loop over.

`for... in`:

```sh
> for (const movie in favMovies){ console.log(movie) }
```

Returns the key _and_ the name property.

## for... of Loops

Also useful will be `for... of` which returns only the array portion:

```sh
> for (const movie of favMovies){ console.log(movie) }
```

We get the object (not the key) and the property (`name`) is not shown.

N.B. for of loops skip over the properties.

```sh
> favMovies.topRated()
```

See `topRated()`:

```js
topRated() {
  const ordered = this.sort(function(firstMovie, secondMovie){
    if(firstMovie.stars > secondMovie.stars){
      return 1
    } else {
      return -1
    }
    })
}
```

```sh
> console.table(favMovies.topRated())
```

Using the `limit`:

```sh
> console.table(favMovies.topRated(2))
```

If you just want the keys, values:

```sh
> Object.keys(favMovies)
> Object.values(favMovies)
```

We will be using this with React.

## Notes

css modules
Header.module.css

sass
change name and import as scss then install sass

svg
import logo, { ReactComponent as Anchor } from '../assets/img/anchor.svg';
{/_ <img src={logo} className={styles.logo} alt="logo" /> _/}
<Anchor className={styles.logo} />

https://egghead.io/lessons/react-add-sass-support-to-create-react-app-2-0

Elijah

https://www.npmjs.com/package/react-icons

https://github.com/gorangajic/react-svg-morph/
