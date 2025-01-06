# Namaste-React

# Namaste-React

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
