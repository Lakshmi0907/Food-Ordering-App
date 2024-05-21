import React from 'react';
import ReactDOM from 'react-dom/client';
// React.createElement => Object => HTML(DOM)
// React.createElement gives us the obect and then that object will be rendered onto the HTML DOM.
// const heading1 = React.createElement("h1",{id:"title",key:"h1"}, "Namasthe React1");
// Java Script Extension Tags
// If we write multiple lines then we have to use the paranthesis like below
// In HTML we have the concept of ID coming to keys react keeps a track of key to find the uniqueness
// difference between JSX and HTML
  // JSX is case-sensitive with camelcase properties while HTML is not case sensitive
  // JSX allows javascript expressions but HTML doesn't have logic for built it requires seperate script tag
  // JSX requries single root but HTML doesn't have this restriction
  // attributes are camel cased but in HTML attributes are lower cased
  // JSX can have custom components but HTML doesnot support this kind of custom components
// How does JSX executes
  // using Babel compiler - it takes the JSX code and will return the normal code
  // it created abstract syntax tree
  // babel converts line number 21 code into line 20 code

// const heading = React.createElement("h1",{id:"title",key:"h1"}, "Namasthe React");
// JSX = babel understand JSX and converts => React.createElement => Object => HTML( DOM )
// babel comes along with the parcel
// The below one is known as React Element
// const heading = (<h1 id="title" key="h1">
//   Namasthe React2</h1> );
// React Component 
// Two types of components
//  - function component NEW way of writing code
//  - class based componen  ts OLD way of writing code
  // React element is an object
// Functional component is nothing but a javscript function whihc returns a react element or JSX is known as react functional component
// Name of the component must starts with capital letter it is not mandatory but it is recommended to use capital letter*/}
const heading1 = <h1> H1 tag inside heading1 tag</h1>
const MyFunction = () => {
   return (
   <div>
    <h1>Welcome to react functional component</h1>
    <h2> this is h2 tag</h2>
   </div>
   );
};
const MyFunction1 = () => {
  return (
  <div>
    {console.log("console print inside the react component")}
   <h1>Welcome to react functional component</h1>
   <h2> this is h2 tag</h2>
  </div>
  );
};
// const data = api.getData();
const security = () =>{
  return (
    <div>
      {/* whenever we use any data from the API then JSX will take care of security whether the data from the API is secure or not. This can be done using sanitization. This JSX uses sanitization.  */}
      {/* {data} */}
      <h1> Heading</h1>
    </div>
  )
}
// component composition
  // if i have to use a component inside a component is known as component composition - nested composition
// Using react element inside the component
const MyComponent = ()=>{
  return (
    <div>
      {/* this is the way to use react element inside the componets */}
      {/* This is how we have to use the fucntional components insdeit he component */}
      <MyFunction/>
      {/* Another way of calling functional component is  */}
      {MyFunction1()}
      {heading1}
    <h2>H2 tag isndie the mycompoent react component</h2>
    </div>
  );
};
// console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));
// render method syntax root.render(reactElementName);
// rendering the react componenent is root.render(<reactComponent/>);
root.render(<MyComponent />);