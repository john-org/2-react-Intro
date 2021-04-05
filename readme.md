# React Intro

Today we will build this [minimal React site](http://oit2.scps.nyu.edu/~devereld/intermediate/pirates-build/)

## Homework

Add a Button.js component that takes different text and functions as props and/or children). The button should be reusable. Substitute all the buttons in our UI for your component.

## Suggested Reading

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

## The React Developer Tool

Install the [React Developer Tool](https://chrome.google.com/webstore/search/react) for Chrome or Firefox and inspect the components.

Use the [React Developer Tool](https://chrome.google.com/webstore/search/react) to inspect:

- https://www.netflix.com/
- https://www.codecademy.com/
- https://www.nytimes.com/

Note the key property on repeated or 'mapped' UI elements.

Examine the current application's component structure (nesting).

Take a brief tour of the options in the React Developer tool.

---

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

In `App.js` create an array of pirate quotes and a randomize function that selects a random pirateCall:

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

### Array.map Quick Review

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

## Convert the Pirate component to a standalone component

- Cut the Pirate component from `App.js`.
- Create `Pirate.js` in the new `components` folder.

In `src/components/Pirate.js`:

```js
import React from "react";
import "../assets/css/Pirate.css";

function Pirate(props) {
  return (
    <section>
      <p>Favorite saying: {props.tagline}</p>
    </section>
  );
}

export default Pirate;
```

Use the component in `App.js` by first importing it and then returning it:

```js
import React from "react";
import Header from "./components/Header";
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
      <Header title={randomize()} />
      <Pirate tagline="Ahoy from the Pirate Component" />
    </div>
  );
}

export default App;
```

## A Class Component

So far we have only used React functional components. There is another component type called a class component. We will focus on functional components, but you should be familiar with both.

A [simple class component](https://reactjs.org/docs/components-and-props.html).

A [complex class component](https://reactjs.org/docs/state-and-lifecycle.html).

Comment out the current function and create a class component:

```js
import React from "react";
import "../assets/css/Pirate.css";

// function Pirate(props) {
//   return (
//     <section>
//        <p>Favorite saying: {props.tagline}</p>
//     </section>
//   );
// }

class Pirate extends React.Component {
  render() {
    return (
      <section>
        <p>Favorite saying: {this.props.tagline}</p>
      </section>
    );
  }
}

export default Pirate;
```

Note the render method and `this` in the paragraph. The JavaScript `this` keyword refers to the object it belongs to. Confusion around 'this' and the class-flavored syntax is a major reason the React team moved away from class components.

A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from `React.Component` and create a render function which returns a React element.

You should be familiar with class components becasue they have been the primary method of working in React for many years. Many older posts, articles, and even the current React documentation use the class syntax.

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
      <section>
        <h2>{this.props.name}</h2>
        <p>Favorite saying: {this.props.tagline}</p>
      </section>
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

Review keys in the [React](https://reactjs.org/docs/lists-and-keys.html) documentation.

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
      <section>
        {piratesFile.map((pirate) => (
          <Pirate key={pirate.name} tagline={randomize()} pirate={pirate} />
        ))}
      </section>
    </div>
  );
}
```

---

## State

State is data at a particular moment in time. It’s the current “state” of your data.

JavaScript frameworks, including React, Angular and Vue, use state _and_ components to make managing UI easier.

In an ideal world your data, or state, is the single source of truth and your UI as an expression of that state.

When you update your state, your framework renders a new copy of the UI based on the new data. You never have to think about which element in the DOM to target or how it needs to change.

Under the hood React uses a virtual DOM to invisibly render components. Then it compares the actual DOM to the virtual DOM and performs a "diff" - an analyses of the differences between the two. Afterwards it surgically updates only those portions of the actual DOM that need to be updated. The entire page is never refereshed.

[Sample](https://reactjs.org/redirect-to-codepen/rendering-elements/update-rendered-element)

The key difference between props and [state](https://facebook.github.io/react-native/docs/state.html):

- state is internal and controlled by the component itself
- props are external and controlled by whatever component renders the component. - [ref](http://buildwithreact.com/tutorial/state).

```js
const [pirates, setPirates] = React.useState(piratesFile);
...
{pirates.map((pirate) => (
```

### STATE DEMO on codesandbox.io

```js
import React from "react";
import "./styles.css";

export default function App() {
  const [steps, setSteps] = React.useState(0);

  function increment() {
    setSteps((steps) => steps + 1);
  }

  return (
    <div>
      Today you've taken {steps} steps!
      <br />
      <button onClick={increment}>I took another step</button>
    </div>
  );
}
```

<!-- END STATE DEMO >>> -->

---

Import an avatar in Pirate.js:

`import avatar from '../assets/img/avatar.png';`

and use the new pirate prop:

```js
class Pirate extends React.Component {
  render() {
    return (
      <section>
        <summary>
          <img src={avatar} alt="pirate" />
          <h3>{name}</h3>
          <ul>
            <li>Died: {year}</li>
            <li>Weapon: {weapon}</li>
            <li>Vessel: {vessel}</li>
          </ul>
        </summary>
        <article>
          <h2>{tagline}</h2>
          <p>{description}</p>
        </article>
      </section>
    );
  }
}
```

Destructure the variables from props:

```js
class Pirate extends React.Component {
  render() {
    const { name, year, weapon, vessel, description } = this.props.pirate;
    const { tagline } = this.props;
    return (
      <section>
        <summary>
          <img src={avatar} alt="pirate" />
          <h3>{name}</h3>
          <ul>
            <li>Died: {year}</li>
            <li>Weapon: {weapon}</li>
            <li>Vessel: {vessel}</li>
          </ul>
        </summary>
        <article>
          <h2>{tagline}</h2>
          <p>{description}</p>
        </article>
      </section>
    );
  }
}
```

## React Forms

Create a new component `AddPirate.js` in the components folder:

```js
import React from "react";
import "../assets/css/AddPirateForm.css";

const AddPirate = () => {
  return (
    <form>
      <input type="text" placeholder="Pirate name" />
      <input type="text" placeholder="Pirate vessel" />
      <input type="text" placeholder="Pirate weapon" />
      <button type="submit">Add Pirate</button>
    </form>
  );
};

export default AddPirate;
```

Import AddPirate and compose it in `App.js`:

```js
import AddPirate from "./components/AddPirate";
...
function App() {
   const [pirates, setPirates] = React.useState(piratesFile);
  return (
    <div>
      <Header title={randomize()} />
      <div className="pirate">
        <AddPirate />
        {pirates.map((pirate) => (
          <Pirate key={pirate.name} tagline={randomize()} pirate={pirate} />
        ))}
      </div>
    </div>
  );
}
```

Add an onSubmit to the AddPirate component:

```js
const AddPirate = () => {
  return (
    <form onSubmit={createPirate}>
      <input type="text" placeholder="Pirate name" />
      <input type="text" placeholder="Pirate vessel" />
      <input type="text" placeholder="Pirate weapon" />
      <button type="submit">Add Pirate</button>
    </form>
  );
};
```

And create a function in `AddPirate`:

```js
function createPirate(event) {
  event.preventDefault();
  console.log("making a pirate");
}
```

## React Forms

State and onChange:

```js
const [pirateName, setPirateName] = React.useState("");
...
<label htmlFor="pirateName">Name</label>
<input
  id="pirateName"
  type="text"
  placeholder="Pirate name"
  value={pirateName}
  onChange={(event) => setPirateName(event.target.value)}
/>

```

Create a pirate object in `AddPirate`'s `createPirate` function.

`AddPirate.js`:

```js
const createPirate = (event) => {
  event.preventDefault();
  console.log("making a pirate");
  const pirate = {
    name: pirateName,
  };
  console.log(pirate);
};
```

Test by entering a pirate name in the form and examining the browser console.

Build out the form

```js
  const [vessel, setVessel] = React.useState("");
  const [weapon, setWeapon] = React.useState("");
  ...
<form onSubmit={createPirate}>
  <label htmlFor="pirateName">Name</label>
  <input
    id="pirateName"
    type="text"
    placeholder="Pirate name"
    value={pirateName}
    onChange={(event) => setPirateName(event.target.value)}
  />
  <label htmlFor="vessel">Vessel</label>
  <input
    id="vessel"
    type="text"
    placeholder="Pirate vessel"
    value={vessel}
    onChange={(event) => setVessel(event.target.value)}
  />
  <label htmlFor="weapon">Weapon</label>
  <input
    id="weapon"
    type="text"
    placeholder="Pirate weapon"
    value={weapon}
    onChange={(event) => setWeapon(event.target.value)}
  />
  <button type="submit">Add Pirate</button>
</form>
```

Build out the createPirate function:

```js
const createPirate = (event) => {
  event.preventDefault();
  console.log("making a pirate");
  const pirate = {
    name: pirateName,
    vessel: vessel,
    weapon: weapon,
  };
  console.log(pirate);
};
```

### The Pirate Object in State

Pirates state lives in `App.js`:

```js
const [pirates, setPirates] = React.useState(piratesFile);
```

And add a method to `App.js` that will eventually accept the new pirate created by the form:

```js
const addPirate = (pirate) => {
  console.log(pirate);
};
```

### Passing a Function as a Prop

We need to make the `addPirate` function available to `AddPirate` by passing it down the component chain:

```js
<AddPirate addPirate={addPirate} />
```

Examine the props in React tool. We have passed the function in App.js down to the component just as we might pass any property.

We will use `createPirate` to develop a pirate instance and then pass the result to addPirate to store the instance in state.

In `AddPirate` - destructure the prop:

```js
const AddPirate = ({ addPirate }) => {
```

and call the function:

```js
const createPirate = (event) => {
  event.preventDefault();

  const pirate = {
    name: pirateName,
    vessel: vessel,
    weapon: weapon,
  };
  addPirate(pirate);
};
```

In App.js, expand on the addPirate function.

We have two variables:

1. `pirate` - the newly created pirate created via the form
2. `pirates` - the existing collection of pirates

Spread a copy of the current state into a new newPirates variable:

```js
const addPirate = (pirate) => {
  const newPirates = [...pirates];
  newPirates.unshift(pirate);
  setPirates(newPirates);
};
```

Note: whenever you change state it triggers a re-rendering of the content without refreshing the entire page - just those elements that need to change.

Another way of accomplishing the same state change might be:

```js
const addPirate = (pirate) => {
  const newPirates = [...pirates, pirate];
  setPirates(newPirates);
};
```

or even:

```js
const addPirate = (pirate) => {
  setPirates((prev) => [...prev, pirate]);
};
```

The [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...` creates a new array using an existing array. (See the spreads examples in the reference folder.)

We should now be able to create a pirate using the form and see it in the browser.

## Resetting the Form

When we click "Add Pirate" the form still holds the data so we need to reset it.

```js
const createPirate = (event) => {
  event.preventDefault();

  const pirate = {
    name: pirateName,
    vessel: vessel,
    weapon: weapon,
  };

  addPirate(pirate);

  setPirateName("");
  setVessel("");
  setWeapon("");
};
```

The form should now empty on submit.

## Removing Pirates

We want the remove pirate control to be associated with each Pirate entry but our pirates state is located in the top level App component.

Add a stub function to App:

```js
const removePirate = () => {
  console.log("removing a pirate");
};
```

And pass the function down to the Pirate component:

```js
<div className="pirate">
  <AddPirate addPirate={addPirate} />
  {pirates.map((pirate) => (
    <Pirate
      key={pirate.name}
      tagline={randomize()}
      pirate={pirate}
      removePirate={removePirate}
    />
  ))}
</div>
```

Add a button to the `Pirate` component:

```js
<button onClick={removePirate}>Remove Pirate</button>
```

Be sure to destructure the prop:

```js
class Pirate extends React.Component {
  render() {
    const { name, year, weapon, vessel, description } = this.props.pirate;

    const { tagline, removePirate } = this.props;

    return (
      <section>
        <summary>
          <img src={avatar} alt="pirate" />
          <h3>{name}</h3>
          <ul>
            <li>Died: {year}</li>
            <li>Weapon: {weapon}</li>
            <li>Vessel: {vessel}</li>
          </ul>
        </summary>
        <article>
          <h2>{tagline}</h2>
          <p>{description}</p>
          <button onClick={removePirate}>Remove Pirate</button>
        </article>
      </section>
    );
  }
}
```

In `Pirate.js`:

```js
<button onClick={() => removePirate(name)}>Remove Pirate</button>
```

```js
const removePirate = (pirateName) => {
  const newPirates = pirates.filter((pirate) => pirate.name !== pirateName);
  setPirates(newPirates);
};
```

## Refactor the Class Component

As an exercise, comment out the class components and create an identical functional component.

```js
function Pirate({
  tagline,
  removePirate,
  pirate: { name, year, weapon, vessel, description },
}) {
  return (
    <section>
      <summary>
        <img src={avatar} alt="pirate" />
        <h3>{name}</h3>
        <ul>
          <li>Died: {year}</li>
          <li>Weapon: {weapon}</li>
          <li>Vessel: {vessel}</li>
        </ul>
      </summary>
      <article>
        <h2>{tagline}</h2>
        <p>{description}</p>
        <button onClick={() => removePirate(name)}>Remove Pirate</button>
      </article>
    </section>
  );
}
```

---

## Adding Form Fields

In AddPirateForm.js:

```js
  const [death, setDeath] = React.useState("");
  const [description, setDescription] = React.useState("");
  ...
  const createPirate = (event) => {
  event.preventDefault();

  const pirate = {
    name: pirateName,
    vessel: vessel,
    weapon: weapon,
    death: death,
    description: description
  };
  addPirate(pirate);
  setPirateName("");
  setVessel("");
  setWeapon("");
  setDeath("");
  setDescription("");
};
...
  <label htmlFor="died">Died</label>
  <input
    id="died"
    type="text"
    placeholder="Date of death"
    value={death}
    onChange={(event) => setDeath(event.target.value)}
  />
  <label htmlFor="description">Description</label>
  <textarea
    id="description"
    placeholder="Pirate description"
    value={description}
    onChange={(event) => setDescription(event.target.value)}
  />
```

Edit AddPirate.css:

```css
form {
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

textarea,
input {
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  font: inherit;
}
```

## Persisting the data

We will connect to a backend service called [Firebase](https://firebase.google.com)

Create an account and add a new project.

`$ npm install firebase`

Create `firebase.js` in `src`:

```js
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC1yCzyIdwEDTha8YPLDqyTMxKPzIy0lrE",
  authDomain: "pirates-31599.firebaseapp.com",
  databaseURL: "https://pirates-31599-default-rtdb.firebaseio.com",
  projectId: "pirates-31599",
  storageBucket: "pirates-31599.appspot.com",
  messagingSenderId: "79434369957",
  appId: "1:79434369957:web:79f3f3b74964f5eb87f64c",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
```

Import it into App.js:

```js
// import piratesFile from "./data/sample-pirates-array";
import firebase from "./firebase";
```

And reset the pirates state to an empty array:

```js
const [pirates, setPirates] = React.useState([]);
```

In App.js:

```js
import React from "react";
import Header from "./components/Header";
import Pirate from "./components/Pirate";
import AddPirate from "./components/AddPirate";

import firebase from "./firebase";

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

function App() {
  const [pirates, setPirates] = React.useState([]);

  React.useEffect(() => {
    getPirates();
  }, []);

  const getPirates = () => {
    const pirateRef = firebase.database().ref("pirates");
    pirateRef.on("value", (snapshot) => {
      const pirates = snapshot.val();
      const pirateList = [];
      for (let id in pirates) {
        pirateList.push({ id, ...pirates[id] });
      }
      setPirates(pirateList);
    });
  };

  const addPirate = (pirate) => {
    const pirateRef = firebase.database().ref("pirates");
    pirateRef.push(pirate);
  };

  const removePirate = (pirate) => {
    const pirateRef = firebase.database().ref("pirates").child(pirate);
    pirateRef.remove();
  };

  return (
    <div>
      <Header title={randomize()} />
      <div className="pirate">
        <AddPirate addPirate={addPirate} />

        {pirates.length === 0 ? (
          <p>Add some pirates.</p>
        ) : (
          pirates.map((pirate) => (
            <Pirate
              key={pirate.name}
              tagline={randomize()}
              pirate={pirate}
              removePirate={removePirate}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
```

Create a pirate to test.

Create a method in App.js:

```js
import piratesFile from "./data/sample-pirates-array";
...
const loadSamples = () => {
  piratesFile.forEach((pirate) => addPirate(pirate));
};
```

Create a button below the header in App.js:

```js
<button onClick={loadSamples}>Load Samples</button>
```

And test.

## Instructor Notes

## Serverless Functions

1. Install node-fetch, netlify-cli

1. Heroku account - create and logout
1. Hasura cloud account > Create free project > save api info > HASURA_API_URL, ADMIN_ADMIN_SECRET
1. Launch console > Data > create free database > pirates and recreate a pirate data schema
1. Insert Row > add a pirate in the database
1. Explore GraphQL

<!-- https://pirates-test.hasura.app/v1/graphql -->
<!-- VZnBFyR7zCjZWzNk5Q2PCqYsMmbI1fJXYsddmeRCG1qqa2U5Ub70ucd0bc1DBhy3 -->

```js
const pirates = require("../src/data/pirates.json");

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(pirates),
  };
};
```

## Firebase

https://dev.to/chensokheng/crud-operation-react-firebase-realtime-database-1bkn

https://dev.to/bnevilleoneill/react-hooks-with-firebase-firestore-3onk

https://console.firebase.google.com/u/0/project/pirates-31599/database/pirates-31599-default-rtdb/data/~2F

---
