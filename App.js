/*** Hot Module replacement which automatically refreshes the web page even wihtout reloading the page
  * after making changes in the code
  * file watcher algorithm written in C++ because it is faster
  * this algorihtm it just keep a track of all the files whihc are changing real time and it tells the server reload
  * Image optimization - media are the heaviest things that takes time to load it  in the web browser
  * caching while development - we can observe whihtout having parcel cache we can see the build time highere than the when we have
  * built the porject after having the parcle cache in our porject
  * compression
  * parcel gives us a functionality to enable https on local build(dev)- it wil though error if we use https with the localhost because chrome or browser doesn't trust the lcoahost as secure
  * we should put parcel.cache in gitignore
  * parcel uses consistent hashing algorithm
  * parcel is a zero config bundler - we don't need to config anything after installling parcel we will just mention the 
  * starting file in the command itself wihtout configuring anything
React.createElement("ul",{},[React.createElement("li",{}, "About Us"),React.createElement("li",{}, "Support"),React.createElement("li",{}, "Home")])]);
writing this kind of code is difficulty when we want to build big applicaiton so this is where JSX comes into picture
it is not necessary to use JSX we can also build the same code which is written in JSX with the help of createElement so in order make it easier to
write the code it is better to use the JSX
major reason fir bringing react is 
we want to update html using havascript in a better 
how we used to update html using javascript document.getElementById but by using react we can update whole HTML using javascript with the help of react
JSX is a HTML like syntax but it is not HTML inside Javascript
*/  
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1",{id:"title",key:"h1"}, "Namasthe React");
const heading2 = React.createElement("h2",{id:"title1", key:"h2"}, "Namasthe React");
const container = React.createElement("div",{id:"container"}, [
  React.createElement("h1",{id:"title",key:"h1"}, "Namasthe React"),
  React.createElement("ul",{},[React.createElement("li",{}, "About Us"),React.createElement("li",{}, "Support"),React.createElement("li",{}, "Home")])]);

console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);