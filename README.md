# Namaste-React

# Namaste-React

````markdown
```plaintext

```
````

```


/\* THE PLAN
Header Component - Logo - Navbar - Home - About - CART
Body Component - search container - search bar - search button - Resturant Cards Container - Resturant Cards - Resturant Image - Resturant Name - Resturant Rating - Resturant Cuisines - Resturant Cost for two
Footer Component - copyrigght - links - address - contact

\*/

###Doubts

sandbox
image
nodemon

githhub ssh

most imp> bundeler > webpack parcel vite
in our project we are going to use parcel

npm install -D parcel > -D for dev dependency
dependency > diff between dev and prod dependency

"parcel": "^2.13.3" > this is caret sign and we can put tilde ~ here
this helps in version management

    ^ automatic minor upgrade to 2.13.4 or
    ~ automatic major upgrade to 2.55 or 3.0

-- we should put package-lock and package.json in git

node modules should not be put in git

package-lock.json vs package.json [43.44 min]

# working in local but not in prod

    package.json: configuration file for npm
    > lock.json:  exact version - same versions needs to be deployed in prod

transitive dependecy or meta dependecy > bundelers need help of other packages as well

every dependency has its own package.json > inside node modules > all library has its own dependencys like dependecy tree

npm i > or npm install creates node_modules

# npx parcel index.html [give the entry point]

npx > executing a package

cdn links for react is not a good option as it is a costly operation to get react and react dom from unpkg

# Parcel https://parceljs.org/

    - Dev Build
    - Local Server
    - HMR - hot module reload
        - file watching algo - written  in c++
    - caching for faster builds
    - image optimization
    - minification of our files
    - bundeling
    - compressing
    - consistent hasing ***
    - code spliting
    - differential bundling - support older browsers
    - diagnostic - error handeling and suggestions
    - HTTPS host facility
    - tree shaking - remove unused code ***

# npx parcel build index.html >> prod build

npm start === npm run start

### EP3

React element and html element

## React.createElement == React element = JS object > html element (render method)

    JSX & React is different
        jsx & React code combined is not pure JS
        JS Engine doesnot understand JSX
        parcel using help of Babel to transpile the JSX code to React code

## JSX => (Babel) React.createElement => RectElementy - JS Object => render method converts the code to html element

        const root = ReactDOM.createRoot(document.getElementById("root"));

        const jsxHeading = <h1>This is heading from JSX 🚀</h1>;


        root.render(jsxHeading);

what is shadow Root?

## EP3 Notes

    <script type="module" src="./App.js"></script>

// const heading = React.createElement("h1", { id: "heading1" }, "Hello World ");

//React Element

//React Componet
//class component => older way => uses JS Classes
//functional component => newer way => uses JS Functions == normal JS functions

// imp > any React Component should start with Capital letter...
// a funtion which returing some piece of React element or we can say some JSX code is react function component

const JsxHeading = () => <h1>This is heading from JSX 🚀</h1>;

const JsxHeading2 = function () {
return <h1>This is heading from JSX 🚀</h1>;
};
//jsxHeading2 and jsxHeading are same

const HeadingComponent = () => {
return (
<>
<JsxHeading />
<JsxHeading></JsxHeading>
{JsxHeading()}
{/_ calling function component > component inside component > component composition _/}

<h1>This is heading one from Component 🚀</h1>
{100 + 200} {/_ we can write JS inside js using {} _/}
{/_ {jsxHeadingElement} _/}
<h2>This is heading two from Component 🚀</h2>
</>
);
};

const jsxHeadingElement = (

  <h1>
    This is heading from JSX react element🚀
    {/* {HeadingComponent()} */}
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeadingElement);

// root.render(<HeadingComponent />);

// React element > simple JS object
// React component > just making the same react element or JS object into arrow function

// any other simple function which is returning some JSX code is also a React component
//we can use {} to write any JS inside JSX
//also to include any react element inside another react element
//also to include any react component inside another react component
//React component should return only one parent element

//React component composition > calling one component inside another component
// JSX sanitizes data before executing it
//{data} => data inside {} will be sanitized known as JSX sanitization => prevent cross site scripting attack => XSS attack => preventing attacker to run any malicious code on our website/browser...
// JSX sanitization is done by React itself

// bellow 3 component call are same
// <JsxHeading />
// <JsxHeading></JsxHeading>
// {JsxHeading()} > function call inside curly braces... as above functions are simple JS functions at the end of the day

## EP4 Notes

const ResturantCard = () => {
return (

<div
className="res-card"
style={{ width: "200px", height: "300px", border: "1px solid black" }} // inline style using JS Object
first curly brace to ensure we are writing JS code inside JSX
2nd curly braces to define the object [ the style of writing js object is inside curly braces] >
<h2>Resturant Image</h2>
<h3>Resturant Name</h3>
</div>
);
};

## PROPS

> > > > accessing props>>>>>>

const ResturantCard = (props) => {
return (

<div className="res-card">
<img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5af6a9b8069daeb459b9b4f971ac3b0c"
        alt="resturant-logo"
      />
<h2>{props.resName}</h2>
<h4>Rating: 4.5</h4>
<h4>{props.cuisines} </h4>
<h4>Cost for two: 500</h4>
</div>
);
};

> > > accessing props >>>>>
> > > const ResturantCard = (props) => {

## const { resName, cuisines } = props; // this is object destructuring so that we can write less like props.resname >>>>

## we can use any name in place of props

## but at the time of accessing the values or destructuring we have to give the same name which is passed from the component call like resName or Cusines

return (

<div className="res-card">
<img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5af6a9b8069daeb459b9b4f971ac3b0c"
        alt="resturant-logo"
      />
<h2>{resName}</h2>
<h4>Rating: 4.5</h4>
<h4>{cuisines} </h4>
<h4>Cost for two: 500</h4>
</div>
);
};

const Body = () => {
return (

<div className="body">
<div className="search">search</div>
<div className="resturant-cards-container">
{/_ Passing PROPS => passing arguments to a fn _/}
<ResturantCard
          resName="meghna Foods"
          cuisines="North Indian, South Indian, Chinese"
        />
<ResturantCard
          resName="kfc"
          cuisines="fast food, burgers, fried chicken"
        />
<ResturantCard />
</div>
</div>
);
};

## Config driven UI

## our website is driven by data > which is config from data > which comes from backend > CONFIG DRIVEN UI > the API data is different for diff location for swiggy app... > and as per data the UI gets changed

    ui is powered by data
        ui layer + data layer

## passing dynamic data from API @1.24 : config driven UI section of namaste react

Read array join
what is CDN or cloudinary
js array map fiilter reduce

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > passing data using props method 1

const ResturantCard = (props) => {
const { resData } = props; // Destructuring
return (

<div className="res-card">
<img
className="res-logo"
src={
"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
resData.info.cloudinaryImageId
}
alt="resturant-logo"
/>
<h2>{resData.info.name}</h2>
<h4>Rating:{resData.info.avgRating}</h4>
<h4>{resData.info.cuisines.join(", ")} </h4>
<h4>{resData.info.costForTwo}</h4>
</div>
);
};

const Body = () => {
return (

<div className="body">
<div className="search">search</div>
<div className="resturant-cards-container">
{/_ Passing PROPS => passing arguments to a fn _/}
<ResturantCard resData={resList[0]} />
<ResturantCard resData={resList[1]} />
<ResturantCard resData={resList[2]} />
<ResturantCard resData={resList[3]} />
<ResturantCard resData={resList[4]} />
{/_ <ResturantCard resData={resList[5]} /> _/}
</div>
</div>
);
};

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

## incase of any iteration we must put key as it helps in re-rendering >> if there is any chage of a partucalar card that key helps to identifty that exact element and re render that element only instead of all the elements

## we should not use iteration index means the value of i as key.

const ResturantCard = (props) => {
const { resData } = props; // Destructuring
const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
resData?.info; // Destructuring more inside the destructured object though we could do the same in very first place like this => const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = props.resData.info;

return (

<div className="res-card">
<img
className="res-logo"
src={
"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
cloudinaryImageId
}
alt="resturant-logo"
/>
<h2>{name}</h2>
<h4>Rating:{avgRating}</h4>
<h4>{cuisines.join(", ")} </h4>
<h4>{costForTwo}</h4>
</div>
);
};

const Body = () => {
return (

<div className="body">
<div className="search">search</div>
<div className="resturant-cards-container">
{/_ Passing PROPS => passing arguments to a fn _/}
{/_ <ResturantCard resData={resList[0]} /> _/}
{resList.map((eachRstObj) => (
<ResturantCard key={eachRstObj?.info?.id} resData={eachRstObj} /> // this Name resData should be the same as the name of the prop in the ResturantCard component..
// this eachRstObj is the current object in the array that we are iterating over same as resList[0] in the above comment
// key is a special prop that is used by react to identify each element in the list uniquely..
))}
</div>
</div>
);
};

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

<<<<<<<<<<<<<<<<<<<< Episode 5 >>>>>>>>>>>>>>>>>>>>
API data controlling our UI is Config driven UI
everything we are able to do using react can be done using html css js only
as react is JS behind the scene

seperate files for seperate components
Folder structure
this is convention
all the main code we keep it in src Folder
all the source code in src
folder name with smallcase
React Component name should startv with Capital

make a seperate file for each component
we can write the whole code into a single file

src/components folder
keep exact same name of component file for which component is created > also initial letter should be capital for the component file only

never keep any hardcoded data into component file
like image and logo url
reslist
keep it in seperate file like UTILS or Common or Constants

there is 2 type of exports>>
default export > one default export in one file
named export > multiple export from one singlee file

## Doubt

            onClick={() => { //why onclick callback fn empty ()
            const filteredList = resList.filter(
              (eachRstObj) => eachRstObj.info.avgRating >= 4.5
            );
            setlistofResturants(filteredList);
          }}

whenever a state variable updates >> react components re-renders in UI

react is only good at DOM Operations >

- React uses Reconcilation algo - also known as react fiber
  - it uses diff algo behind the scene
- virtual DOm is kind of object representation of actual DOM

React Fiber Architecture

- incremental rendering?

const Body = () => {
// Local State Variables > keeps the track of the data that is changing within the component
const [listofResturants, setlistofResturants] = useState(resList);

return (

<div className="body">
<div className="search">
<button
className="filter-btn"
onClick={() => {
const filteredList = resList.filter(
(eachRstObj) => eachRstObj.info.avgRating >= 4.5
);
setlistofResturants(filteredList);
}} >
Top Rated Restaurant
</button>
</div>
<div className="resturant-cards-container">
{/_ Passing PROPS => passing arguments to a fn _/}
{/_ <ResturantCard resData={resList[0]} /> _/}
{listofResturants.map((eachRstObj) => (
<ResturantCard key={eachRstObj?.info?.id} resData={eachRstObj} /> // this Name resData should be the same as the name of the prop in the ResturantCard component..
// this eachRstObj is the current object in the array that we are iterating over same as resList[0] in the above comment
// key is a special prop that is used by react to identify each element in the list uniquely..
))}
</div>


);
};

export default Body;



```

<<<<<<<<<<<<<Episode 6>>>>>>>>>>>>>
Microservices vs Monolith

Microservices

- seperation of concern
- single service
- they have to interact with each other
- react project is UI Microservice
- write different microservice for different microservices depending on the use case
- all the services can run on their own specific PORTS
- on port 1234: we can have our UI

- we an deploy diff sercvices to different PORTs > at the end all this PORTS we can map to diff Domain Name

# UI Render From API Data

two approach is here

1.URL Hits/page Loads > API Call(500ms) > Render UI (with data)
2.URL Hits/page Loads > Render the skeleton > API Call(500ms) > Render UI (with data) [we always use this approasch]

# useEffect Hook

code bellow
useEffect(() => {
fetchData();
console.log("useEffect Called");
}, []);

const fetchData = async () => {
const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.585698&lng=88.443614&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
const jsonData = await data.json();
setlistofResturants(
jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
?.restaurants
);
console.log(
jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
?.restaurants
);
};

Doubts

- optional chaining
- http methods
- fecth()
- promises and async await()

CORS Policy
arrow fn inside return or just outside return
like [
const fetchData = async () => {
const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.585698&lng=88.443614&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
};

but bellow code throws error
const fetchData = async () => {
return(
const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.585698&lng=88.443614&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
)
};
]

## shimmer UI

# Doubt

- arrow fn
- callback fn

when to write return statement and when not inside a call back fn
<button
className="signIn-btn"
onClick={() => {
btnName === "Sign In"
? setbtnName("Sign Out")
: setbtnName("Sign In");

              console.log(btnName);
            }}
          >

# whenever state variable updates, react trigers a reconcilation > re render the component > it re renders the wholle component but only update the diff

## fetch post call

import React from "react";
import ReactDOM from "react-dom";
import ResturantCard from "./ResturantCard";
// import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
// Local State Variables > keeps the track of the data that is changing within the component
// const [listofResturants, setlistofResturants] = useState(resList);
const [listofResturants, setlistofResturants] = useState([]);
const [filteredResturants, setFilteredResturants] = useState([]);
const [searchValue, setSearchValue] = useState("");

useEffect(() => {
fetchData();
console.log("useEffect Called");
}, []);

const fetchData = async () => {
const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.585698&lng=88.443614&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
const jsonData = await data.json();
//main list
setlistofResturants(
jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
?.restaurants
);

    //filtered list > initially same as main list
    setFilteredResturants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(
    //   jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );

};

//conditional rendering
// if (listofResturants.length === 0) {
// console.log("Loading...");

// return <Shimmer />;
// }

// conditional rendering using ternary operator - standard way
return listofResturants.length === 0 ? (
<Shimmer />
) : (

<div className="body">
<div className="search">
<div className="search-container">
<input
type="text"
className="search-input"
placeholder="Search for Resturants"
value={searchValue} // binding the input field with the state variable
onChange={(e) => {
setSearchValue(e.target.value);
}} // updating the state variable with the value of the input field
/>
<button
className="search-btn"
onClick={() => {
const fltrResturants = listofResturants.filter((eachRstObj) =>
eachRstObj.info.name
.toLowerCase()
.includes(searchValue.toLowerCase())
);
setFilteredResturants(fltrResturants);
}} >
Search
</button>
</div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofResturants.filter(
              (eachRstObj) => eachRstObj.info.avgRating >= 4.5
            );
            setlistofResturants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resturant-cards-container">
        {/* Passing PROPS => passing arguments to a fn */}
        {/* <ResturantCard resData={resList[0]} /> */}
        {filteredResturants.map((eachRstObj) => (
          <ResturantCard key={eachRstObj?.info?.id} resData={eachRstObj} /> // this Name  resData should be the same as the name of the prop in the ResturantCard component..
          // this eachRstObj is the current object in the array that we are iterating over same as resList[0] in the above comment
          // key is a special prop that is used by react to identify each element in the list uniquely..
        ))}
      </div>
    </div>

);
};

export default Body;

<<<<<<<<<<<<Episode 7>>>>>>>>>>>>

# Routing

// useEffect(() => { console.log("useEffect called")},[])

- useEffect hook behaves as per the dependecy array
- if no dependency array => useEffect is called on every render
- if dependecy array is empty => useEffect is called after initial render of component just once even if the header renders multiple time due to any other state variable change

- if there is any state variable inside dependecy array => then useEffect will be called every time the state variablke updates

## Best Practices

- never create useState outside component > create inside component > not inside return section
- always create state variable at the very begining of the component
- never create state variable inside a if else or inside a condition
- never create state variable inside a loop
- never crerate state variable inside a function
- ex :
  const Body = () => {
  const [stateVar,setStateVar] = useState("");

  return()
  }
  export default Body

## a React fn component is a fn which returns some piece opf JSX

## Routing

## - React Router Dom

--- our goal : with the change of URL we sould visit different pages like ABout US @ localhost:1234/about or homePage @ localhost:1234 or contact us page @ localhost:1234/Contact

- # we need a help of library : React Router DOM > npm i react router dom

- we need to craete a Routing Configration [craeteBrowserRouter]
- routing config is nothing but mapping the paths with Components
- it is a list of objects
- so with the help of createBrowserRouter we craete an appRouter > Routing config > mapping the path with components > simply array of objects

## then we need to provide this Routing config to our App

- [RouterProvide] : helps here to provide this Routing config to our app
- we provide this in render section like
  root.render(<RouterProvide router = {appRouter}>);

done

## rafce > vscode shortcut to create component

##shortcut
rafce > creates a boiler plate component

outlet and routing childrens

const AppLayout = () => {
return (

<div className="app-layout">
<Header />
<Outlet />
<Footer />
</div>
);
};

const appRouter = createBrowserRouter([
{
path: "/",
element: <AppLayout />,
errorElement: <Error />,
children: [
{
path: "/",
element: <Body />,
},
{
path: "/contact",
element: <Contact />,
},
{
path: "/about",
element: <About />,
},
],
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);

diff between LintTo and <a href > tag

as Link doesnot reload the whole page. it onlye refreshes the component . because of that only its SPA

# 2 types of routing

- client side routing - we use this routing in react
- server side routing
  React uses Client side routing

Learned children Routing
taking parameter from URL
useParams
Dynamic Routing

<<<<<<<<<Episode 8 >>>>>>>>>

Class Based Components

this and super keyword in class component

life cycle

# parent Constructor > parent render > child Constructor > child Render

# parent Constructor > parent render > child Constructor > child Render > child-componentDidMount > parent-componentDidMount

# parent Constructor > parent render > 1stchild Constructor > 1stchild Render > 2ndchild Constructor > 2ndchild Render > 1stchild-componentDidMount > 2ndchild-componentDidMount >parent-componentDidMount

# constructor > render > componentDidMount >

# component will unmount is important

after all the render method DOM gets renders in a single BATCH

why component did mount > to make api calls > its like useEffect hook >

goto react life cycle methods diagram

> https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

debugger; keyword in code

Revise episode 8 - : 1:55min : this is component lifeCycle

<<<<<<<<<Episode 9 >>>>>>>>>

custom hooks & single responsiblity principle

Optimizinf

- modularity > single responsiblity principle
  > Reusable
  > Maintanable
  > testable

created custom hook useResturantMent > for fetching the data only

?? online status is not working

- ## large scale app

> chunking/ code spliting/ dynamic bundeling /lazy loading/ code spliting/
>
> > break down our app in smaller bundels

lazy Loading

> > //lazy loading
> > import { lazy, Suspense } from "react";
> > const Grocerry = lazy(() => import("./components/Grocerry"));

{
path: "/grocerry",
element: (
<Suspense fallback={<div>Loading...</div>}>
<Grocerry />
</Suspense>
),
}

---
