//Class Based component

import React from "react";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2> This is our About us Page</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        tincidunt, nunc nec ultricies bibendum, nunc nunc ultricies nunc, nec
      </p>

      <UserClass
        name={`subhankar karmakar`}
        location={`KOLKATA`}
        contact={`sk1234@gmail.com`}
      />
    </div>
  );
};

export default About;
