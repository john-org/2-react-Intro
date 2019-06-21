# React Intro

Today we will build this [minimal React site](http://oit2.scps.nyu.edu/~devereld/intermediate/pirates-build/)

- [React Intro](#React-Intro)
  - [Homework](#Homework)
  - [The Spread Operator](#The-Spread-Operator)
  - [Objects and Destructuring](#Objects-and-Destructuring)
  - [React Component](#React-Component)
  - [Creating a React Project](#Creating-a-React-Project)
    - [Examining the Project Structure](#Examining-the-Project-Structure)
    - [JSX](#JSX)
    - [Project Prep](#Project-Prep)
    - [Components](#Components)
  - [Calling a Function](#Calling-a-Function)
  - [Importing and Exporting Components](#Importing-and-Exporting-Components)
  - [Header Functional Component](#Header-Functional-Component)
  - [Rendering Multiple Components](#Rendering-Multiple-Components)
  - [Additional Components](#Additional-Components)
  - [The React Developer Tool](#The-React-Developer-Tool)
  - [Adding Events](#Adding-Events)
  - [State](#State)
    - [Passing a Function as a Prop](#Passing-a-Function-as-a-Prop)
  - [Resetting the Form](#Resetting-the-Form)
  - [Removing a Pirate](#Removing-a-Pirate)
  - [Build a Site](#Build-a-Site)
  - [Adding Form Fields](#Adding-Form-Fields)
  - [Destructuring](#Destructuring)
  - [Persisting the data](#Persisting-the-data)
  - [Notes](#Notes)
    - [Prototypal inheritance](#Prototypal-inheritance)
    - [Example: Array](#Example-Array)
    - [Classes](#Classes)
    - [Static Methods](#Static-Methods)
    - [Static methods on an Array](#Static-methods-on-an-Array)
    - [Getters and Setters](#Getters-and-Setters)
    - [Extending Classes](#Extending-Classes)
      - [Super and Extending Classes](#Super-and-Extending-Classes)
    - [Extending Arrays](#Extending-Arrays)
  - [Review For... In Loops](#Review-For-In-Loops)

## Homework

Review the notes below, step through them again to recreate the Pirates project on your own. If you need a completed version for reference see the branch `summer2019-done`.

Add date and description fields to the form.

---

## The Spread Operator

Note the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `{...props}` to "spread" the props into the element.

See `spread-pizzas.html` and `spread-jumping-letters.html` in `reference/speards`.

```js
const heading = document.querySelector('.jump');
heading.innerHTML = sparanWrap(heading.textContent);

function sparanWrap(word) {
  var elem = '';
  var wordArr = [...word];
  wordArr.forEach(letter => (elem += `<span>${letter}</span>`));
  return elem;
}
```

---

<!-- end aside -->

---

## Objects and Destructuring

Open `objects.html` from `reference/objects` in a browser tab.

Examine the sample object in the browser console:

```sh
last
me
me.links
var twitter = me.links.social.twitter
```

Add to script block:

```js
const { twitter, facebook } = me.links.social;
```

```js
const { twitter: twit, facebook: fb } = me.links.social;
```

This is an example of [destructing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) - a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

Create a multi-line template string and display it on the page:

```js
const content = `
<div>
  <h2>
    ${me.first} ${me.last}
  </h2>
    <span>${me.job}</span>
    <p>Twitter: ${twit}</p>
    <p>Facebook: ${fb}</p>
</div>
`;
document.body.innerHTML = content;
```

---

<!-- end aside  -->

## React Component

Here are two examples of a standalone React component:

```html
<html>
  <head>
    <meta charset="utf-8" />

    <title>Hello React!</title>

    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      function App() {
        return <h1>Hello world!</h1>;
      }

      ReactDOM.render(<App />, document.getElementById('root'));
    </script>
  </body>
</html>
```

And:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>Hello React!</title>

    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      class App extends React.Component {
        render() {
          return <h1>Hello world!</h1>;
        }
      }

      ReactDOM.render(<App />, document.getElementById('root'));
    </script>
  </body>
</html>
```

The first is a functional component and the second a class component. We will be working with both.

## Creating a React Project

Creating a React project requires a lot of tooling and setup. Fortunately Facebook has created a bootstrapping system called [Create React App](https://facebook.github.io/create-react-app/)

To create a new project, ensure that you are in today's project folder and run:

```sh
npx create-react-app pirates
```

Note: `npm` _manages_ packages while `npx` _executes_ Node packages. The first argument `create-react-app` is the package you are executing, the second `pirates` is the name of the project.

Run the project:

```sh
cd pirates
code .
```

Open VS Code's terminal and run `npm start`.

### Examining the Project Structure

Open `index.html` from the `pirates/public` folder.

- Everything is inserted into this div:`<div id="root"></div>`

Open `index.js` from `src`.

- This is the only place where `ReactDOM.render()` will occur:

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

Open `App.js` (note the capital "A" - this is the default React component) from `src`.

This is the only React component in this starter project.

Instead of using a script tag, this component imports React from the node modules folder:

```js
import React from 'react';
```

`import` and `export` are part of the ES6 Module system that allows us to break down code into smaller pieces. Unfortunately, this is not supported in browsers so BabelJS is required and is working under the hood in our project.

The main body of the component is a function that returns JSX (_not_ HTML).

### JSX

Recall the JSX requirements:

1. `src={logo}` - JSX curly braces allow the use of JS expressions
2. `className="App-header"` - `class` is a reserved word in JavaScript
3. `<img ... />` xhtml style closing tags - every element in JSX needs to be closed
4. everything is nested in a single tag

Commenting code in React looks a little different from native JavaScript and is supported in VS Code. Try commenting the following line using the `cmd-/` shortcut:

`{/* <img src={logo} className="logo" alt="logo" /> */}`

Save and note the hot reloading.

### Project Prep

Move the `data` and `assets` folders from `reference` to the `src` directory in `pirates`.

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

    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### Components

All modern front end systems employ a component architecture. Let's create a few.

Create and use a Pirate component in `App.js`. Copy and overwrite App.js with the following:

```js
import React from 'react';

function App() {
  return <Pirate />;
}

function Pirate() {
  return <p>Ahoy there!</p>;
}

export default App;
```

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

Note that we have to pass props to the Pirate function.

We _cannot_ do something like this:

```js
function Pirate() {
  return <p>{tagline}</p>;
}
```

The fact that you can pass props to a component makes them very powerful.

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

Create a second component for the header:

```js
function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1>{props.title}</h1>
    </div>
  );
}
```

Note the errors.

Import the logo and some css for it:

```js
import './assets/css/Header.css';
import logo from './assets/img/anchor.svg';
```

Note the errors.

Render it to the DOM:

```js
function App() {
  return (
    <div>
      <Header title="Pirate Database!" />
      <Pirate tagline="Ahoy from the Pirate Component" />
    </div>
  );
}
```

## Calling a Function

Create an array of pirate quotes and a randomize function that selects a random pirateCall: `pirateCalls[x]`

```js
const pirateCalls = [
  'Aaarg, belay that!',
  'Avast me hearties!',
  'Shiver me timbers!',
];

const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)];
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

## Importing and Exporting Components

Convert the Header and Pirate component to standalone components.

- Comment out the Header and Pirate components from `App.js`.
- Comment out the imported css and logo
- Create a `components` folder in `src`.
- Create `Pirate.js` in the new `components` folder.

In `src/components/Pirate.js`:

```js
import React from 'react';

import '../assets/css/Pirate.css';

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
import React from 'react';
import Pirate from './components/Pirate';

const pirateCalls = [
  'Aaarg, belay that!',
  'Avast me hearties!',
  'Shiver me timbers!',
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
import React from 'react';
import '../assets/css/Pirate.css';

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

A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from React.Component and create a render function which returns a React element.

## Header Functional Component

Create a new `Header.js` component in the `components` folder:

```js
import React from 'react';
import '../assets/css/Header.css';
import logo from '../assets/img/anchor.svg';

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

Import `Header.js` into `App.js` and add it to `App.js`:

```js
import React from 'react';
import Pirate from './components/Pirate';
import Header from './components/Header';
```

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

Import an array of sample pirates into App.js:

```js
import piratesFile from './data/sample-pirates-array';
```

Examine the contents of the file. We will create multiple pirates using `.map()`:

```js
function App() {
  return (
    <div>
      <Header title={randomize()} />
      {piratesFile.map(function(pirate) {
        return <Pirate tagline={randomize()} />;
      })}
    </div>
  );
}
```

Let's use some data from the piratesFile instead:

```js
function App() {
  return (
    <div>
      <Header title={randomize()} />
      {piratesFile.map(pirate => (
        <Pirate name={pirate.name} />
      ))}
    </div>
  );
}
```

In `Pirate.js`:

```js
class Pirate extends React.Component {
  render() {
    return (
      <div className="pirate">
        <p>{this.props.name}</p>
      </div>
    );
  }
}
```

Note the index error: "Each child in a list should have a unique "key" prop."

```js
function App() {
  return (
    <div>
      <Header title={randomize()} />
      {piratesFile.map((pirate, index) => (
        <Pirate key={index} name={pirate.name} />
      ))}
    </div>
  );
}
```

Build out the list.

In App.js, instead of passing just the name (`name={pirate.name}`) we will pass the entire pirate object (`pirate={pirate}`):

```js
function App() {
  return (
    <div>
      <Header title={randomize()} />
      {piratesFile.map((pirate, index) => (
        <Pirate key={index} pirate={pirate} />
      ))}
    </div>
  );
}
```

In Pirate.js

```js
import React from 'react';
import '../assets/css/Pirate.css';
import avatar from '../assets/img/avatar.png';

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
            <p>{this.props.pirate.desc}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pirate;
```

Make any desired css adjustments to the imported pirates.css file.

## Additional Components

Create a new component `PirateForm.js` in the components folder:

```js
import React from 'react';
import AddPirateForm from './AddPirateForm';

class PirateForm extends React.Component {
  render() {
    return (
      <div className="pirate">
        <h3>Ahoy from the PirateForm Component</h3>
        <AddPirateForm />
      </div>
    );
  }
}

export default PirateForm;
```

Note the import statement and JSX. This file relies on another component.

Create the component - `AddPirateForm.js` in components:

```js
import React from 'react';
import '../assets/css/AddPirateForm.css';

class AddPirateForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Pirate name" />
        <input type="text" placeholder="Pirate vessel" />
        <input type="text" placeholder="Pirate weapon" />
        <button type="submit">Add Pirate</button>
      </form>
    );
  }
}

export default AddPirateForm;
```

Import PirateForm and add it to `App.js`:

```js
import PirateForm from './components/PirateForm';

...

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

Install the [React Developer Tool](https://chrome.google.com/webstore/search/react) in Chrome and inspect:

- https://www.netflix.com/
- https://www.codecademy.com/
- https://www.nytimes.com/

Examine the current application's component structure (nesting).

- Select `<Pirate />`
- Search for Pirate
- Clean up unnecessary divs by using React fragments: `<> ... </>`

## Adding Events

Temporary in App.js:

```js
const handleClick = () => alert('whoa');

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

Add an event to the AddPirateForm:

`<form onSubmit = { (e) => this.createPirate(e) }>`

to `AddPirateForm`:

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

And create a method on the class:

```js
createPirate(event) {
  console.log('making a pirate')
}
```

Clicking on a submit button reloads the page so add:

```js
createPirate(event) {
  event.preventDefault();
  console.log('making a pirate')
}
```

E.g.:

```js
import React, { Component } from 'react';
import '../assets/css/AddPirateForm.css';

class AddPirateForm extends Component {
  createPirate(event) {
    event.preventDefault();
    console.log('making a pirate');
  }

  render() {
    return (
      <form onSubmit={this.createPirate}>
        <input name="name" type="text" placeholder="Pirate name" />
        <input name="vessel" type="text" placeholder="Pirate vessel" />
        <input name="weapon" type="text" placeholder="Pirate weapon" />
        <button type="submit">Add Pirate</button>
      </form>
    );
  }
}

export default AddPirateForm;
```

Test using the form button.

In order to capture that values we will enter into the form fields we need to create [refs](https://facebook.github.io/react/docs/refs-and-the-dom.html). Refs in React are roughly equivalent to `document.querySelector()`

Add [refs](https://facebook.github.io/react/docs/refs-and-the-dom.html) to the form to store references to the input:

```js
import React from 'react';
import '../assets/css/AddPirateForm.css';

class AddPirateForm extends React.Component {
  nameRef = React.createRef();
  vesselRef = React.createRef();
  weaponRef = React.createRef();

  createPirate = event => {
    event.preventDefault();
    console.log('making a pirate');
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
createPirate = event => {
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

## State

State is data at a particular moment in time. It’s the current “state” of your data.

Today’s more popular JavaScript frameworks, including React and Vue, use state plus components to make managing the UI easier.

With this approach, instead of targeting specific elements in the DOM and adjusting a class here or a style there, you treat your data, or state, as the single source of truth.

When you update your state, you render a fresh copy of the UI based on the new data, and move on. You never have to think about which element in the DOM to target or how it needs to change.

The key difference between props and [state](https://facebook.github.io/react-native/docs/state.html):

- state is internal and controlled by the component itself
- props are external and controlled by whatever component renders the component. - [ref](http://buildwithreact.com/tutorial/state).

Get the pirate object into state.

We initialize the state in `App.js` to an empty object.

Since `App.js` is a functional component and functional components are not used for state we need to cpnvert it to a class component.

`App.js`:

```js
import React from 'react';
import Pirate from './components/Pirate';
import Header from './components/Header';
import PirateForm from './components/PirateForm';

import piratesFile from './data/sample-pirates-array';

class App extends React.Component {
  render() {
    const pirateCalls = [
      'Aaarg, belay that!',
      'Avast me hearties!',
      'Shiver me timbers!',
    ];

    const randomize = () =>
      pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

    return (
      <>
        <Header title={randomize()} />
        <PirateForm />
        {piratesFile.map((pirate, index) => (
          <Pirate key={index} pirate={pirate} />
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
      {this.state.pirates.map((pirate, index) => (
        <Pirate key={index} pirate={pirate} />
      ))}
    </>
  );
}
```

And add a method to `App.js` that will accept the new pirate created by the form:

```js
addPirate = pirate => {
  console.log(pirate);
};
```

Our `createPirate` function in `AddPirateForm` is called and works but it does not save the new pirate.

### Passing a Function as a Prop

We need to make the `addPirate` function available to the `AddPirateForm` by passing it using props:

`App.js > PirateForm > AddPirateForm`

- To `PirateForm` from `App.js` we will use `<PirateForm addPirate={this.addPirate} />`:

```js
  render() {
    return (
      <>
        <Header title={randomize()} />
        <PirateForm addPirate={this.addPirate} />
        {this.state.pirates.map((pirate, index) => (
          <Pirate key={index} pirate={pirate} />
        ))}
      </>
    );
  }
```

Examine the `PirateForm` props in React tool.

The function needs to be available in AddPirateForm which is one level deeper.

Pass the prop to `AddPirateForm` from `PirateForm`:

```js
import React, { Component } from 'react';
import AddPirateForm from './AddPirateForm';

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
createPirate = event => {
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

Spread a copy of the current stat into a new local pisrates variable:

```js
addPirate = pirate => {
  console.log(pirate);
  //take a copy of the current state and put it into pirates var
  const pirates = [...this.state.pirates];
  console.log(pirates);
};
```

Add the pirate passed from the form to the new pirates array:

```js
addPirate = pirate => {
  console.log(pirate);
  //take a copy of the current state and put it into pirates var
  const pirates = [...this.state.pirates];
  console.log(pirates);
  pirates.unshift(pirate);
  console.log(pirates);
};
```

And then use React's `setSate()` function to update the state:

```js
addPirate = pirate => {
  console.log(pirate);
  //take a copy of the current state and put it into pirates var
  const pirates = [...this.state.pirates];
  console.log(pirates);
  pirates.unshift(pirate);
  console.log(pirates);
  //set state pirates with var pirates
  this.setState({ pirates: pirates });
};
```

Note: whenever you use `setState()` it triggers a re-rendering of the content without refreshing the page.

Remember, in order for us to see this we need to map the pirates to state and not to the imported pirates:

```js
render() {
  return (
    <>
      <Header title={randomize()} />
      <PirateForm addPirate={this.addPirate} />
      {this.state.pirates.map((pirate, index) => (
        <Pirate key={index} pirate={pirate} />
      ))}
    </>
  );
}
```

We should now be able to create a pirate using the form and see it in the browser.

Try: `pirates.push(pirate);`

## Resetting the Form

We have refs on the input fields. When we click "Add Pirate" the form still holds the data so we need to reset it.

- Use `event.currentTarget.reset();` in `AddPirateFrom`:

```js
createPirate = event => {
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

The form should now empty and the `addPirate` function is called to store our pirate in state.

## Removing a Pirate

Add a new method to `App.js`:

```js
removePirate = index => {
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
  this.state.pirates.map((pirate, index) => (
    <Pirate key={index} pirate={pirate} removePirate={this.removePirate} />
  ));
}
```

Since we want the controls to be associated with each Pirate entry we'll add them to the `Pirate` component by including a new list item: `<li><button onClick={() => this.props.removePirate('pirate1')}>X</button></li>`.

- `Pirate.js`:

```js
class Pirate extends React.Component {
  render() {
    return (
      <div className="pirate">
        <ul>
          <li>
            <img src={avatar} alt="pirate" />
            <button onClick={() => this.props.removePirate(0)}>X</button>
          </li>
          <li>
            <h3>{this.props.pirate.name}</h3>
            <p>Died: {this.props.pirate.year}</p>
            <p>Favorite weapon: {this.props.pirate.weapon}</p>
            <p>Sailed on: {this.props.pirate.vessel}</p>
            <p>{this.props.pirate.desc}</p>
          </li>
        </ul>
      </div>
    );
  }
}
```

We have temporarily hard coded the button to remove just one pirate from the list.

Pass it along as part of the Pirate component `index={index}` in App.

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

```js
import React from 'react';
import '../assets/css/AddPirateForm.css';

class AddPirateForm extends React.Component {
  nameRef = React.createRef();
  vesselRef = React.createRef();
  weaponRef = React.createRef();
  yearRef = React.createRef();
  descRef = React.createRef();

  createPirate = event => {
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

## Destructuring

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
```

## Persisting the data

```js
componentDidMount() {
  console.log('mounted');
}
```

Base.js

```js
import Rebase from 're-base'; // mirrors state to FB
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'daniel-deverell-pirates.firebaseapp.com',
  databaseURL: 'https://daniel-deverell-pirates.firebaseio.com',
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };
```

App.js

```js
import base from './base';

...

  state = {
    pirates: [],
  };
```

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

Create a pirate.

```js
loadSamples = () => {
  this.setState({ pirates: piratesFile });
};
```

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

### Example: Array

Create an array:

```sh
> const names = ['John', 'Henry']
```

Examine the Array methods

```sh
> names.join(', ')
> names.pop()
```

Add a prototype:

```js
Car.prototype.drive = function() {
  console.log(
    `Vroom vroom 🚗 🚗 🚗! I'm a ${this.model} and I'm a ${this.make}`,
  );
};
```

Examine the prototype on the car object.

Add a second car:

```js
const miata = new Car('Miata', 'Mazda');
```

Execute the drive method:

```sh
> miata.drive()
```

Add an additional method:

```js
Car.prototype.stop = function() {
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
      `Vroom vroom 🚗🚗🚗! I'm a ${this.model} and I'm a ${this.make}`,
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

A static method is similar to `Array.of` - in that it is not inherited.

### Static methods on an Array

`Array.of` and the spread operator:

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
```

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

const rhino = new Animal('Rhiney');
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
const yorik = new Dog('Yorik', 'Terrier');
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
const movies = new MovieCollection(
  'My Favorite Movies',
  { name: 'Bee Movie', stars: 10 },
  { name: 'Star Wars Trek', stars: 1 },
  { name: 'Virgin Suicides', stars: 7 },
  { name: 'King of the Road', stars: 8 },
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
> movies[4]
> movies.name
```

We have an Array that also has properties (possible because in JS, Arrays are objects):

```sh
> typeof [1,2]
```

Methods using the array prototype methods can be used:

```js
add(movie) {
  this.push(movie);
}
```

## Review For... In Loops

A `for...in` loop is a modified version of a for loop that you can use to loop through objects.

The first part, `key`, is a variable that gets assigned to the object key on each loop. The second part, is the object to loop over.

`for... in`:

```sh
> for (const movie in movies){ console.log(movie) }
```

Returns the key _and_ the name property.

Also useful will be `for... of` which returns only the array:

```sh
> for (const movie of movies){ console.log(movie) }
```

We get the object (not the key) and the property (`name`) is not shown.

N.B. for of loops skip over the properties.

```sh
> movies.topRated()
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
> console.table(movies.topRated())
```

Using the `limit`:

```sh
> console.table(movies.topRated(2))
```

If you just want the keys:

```sh
> Object.keys(movies)
```

We will be using this with React.
