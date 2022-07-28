import React from "react";

type users = {
  name: {
    first: string;
    last: string;
  }[];
};

const Types = ({ name }: users) => {
  return (
    <div>
      {name.map(({ first, last }) => (
        <>
          First name: {first} 
          Last name: {last}
        </>
      ))}
    </div>
  );
};

export default Types;
