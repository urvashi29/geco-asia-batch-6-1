import React, { Component } from "react";
import Display from "./Display";

// class based component
class App extends Component {
  state = {
    firstName: "alex",
    age: 20,
    designation: "developer",
    city: "pune",
    isMarried: true,
    contact: {
      email: "admin@gmail.com",
    },
    arr: [90, 38, 27],
    emp: [
      {
        id: 1,
        name: "alina",
      },
      {
        id: 2,
        name: "alex",
      },
      {
        id: 3,
        name: "harry",
      },
    ],
  };

  render() {
    return (
      // this is referring to App
      <>
        <p>Hi, today we are learning reactjs.</p>
        <p>
          My name is {this.state.firstName}, working as a{" "}
          {this.state.designation}.
        </p>
        <p>Email Address: {this.state.contact.email}</p>
        <p>
          {this.state.arr.map((e) => {
            return <p>{e}</p>;
          })}
        </p>

        <Display age={this.state.age} city={this.state.city} />
      </>
    );
  }
}

export default App;

// Display({
//   a: '', b: ''
// })

// rcc + enter -> class based component
// rsc + enter -> function based component

// npm i

// HTML
// attributes, elements, tags
// heading tags
// paragraph
// media elements: images
// semantic and non-semantic(div)
// form

// ES6
// let, const
// arrow function vs normal function
// class, inheritance
// destructuring and restructuring of arrays & objects
// spread operator
// template strings
// array helper function: map, filter, forEach

//js
//datatypes
//var
//operators
//callback
//api
