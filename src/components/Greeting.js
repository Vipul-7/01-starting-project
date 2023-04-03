import React from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = React.useState(false);

  return (
    <div>
      <h1>Hello World</h1>
      {!changeText && <Output>Greeting from Vipul</Output>}
      {changeText && <Output>Changed Text</Output>}
      <button onClick={() => setChangeText(!changeText)}>Change Text!</button>
    </div>
  );
};

export default Greeting;
