import React from 'react';
import ReactDOM from 'react-dom/client';
/**
    * Header
      - Logo
      - Nav Items ( Right Side )
      - Cart
    *  body
      *  Search Bar
      * restaurent List 
          * Restaurent Card
            * Image 
            * Name
            * Rating
            * Cusines
    *  footer  
      - Links
      - Copyright
    */
const Title = ()=>
( 
 <a href="/">
 <img 
className='logo'
src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg" 
alt="Food Vanilla"
/> 
</a>
);

const Header = () => {
  return (
  <div className='header'>
    <Title/>
   <div className='nav-items'>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li> Contact</li>
      <li>Cart</li>
    </ul>
   </div>
  </div>
  );
};
const Body = () =>
{
  return (
    <h4>Body</h4>
  )
};
const Footer = ()=>
{
  return <h4>Footer</h4>
};
// JSX should only have one parent element
// React elements can only be rendered as part of a single parent element in the component's return. 
// This is because a React component must return a single React element
// If i want more elements then we need to use div. if we don't want to use div then we have another option such as react.fragment
//React fragment- React.fragment is a component which is exported by this react 
// React.fragment is like an empty tag.
// for this we can write all the tags inside the <React.Fragment>all the tags here</React.Fragment>
//  * But when we write react.fragment the code looks ugly and the react mentioned just to write only the empty tags like
// <>all the tags here</> - this is basically an empty tag but this is known s react.fragment 
//  The above is basically shorthand for React.Fragment

const AppLayout = () =>
{
  return (
    <> 
    <Header/>
    <Body/>
    <Footer/>
    </>

  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);