import React from "react";

const Test = (props) => {
  return (
    <div>
      <h1>{props.companyName}</h1>
      <h2>Mission Statement</h2>
      <p>{props.missionStatement}</p>
      <h2>Company History</h2>
      <p>{props.companyHistory}</p>
    </div>
  );
};

export default Test;
