import { useState } from "react";

function White() {
  const [color, set] = useState("red");

  function Bla() {
    set("black");
  }
  return (
    <>
      <div style={{ backgroundColor: color }}>lkdjflkasjdflkajdsfklj</div>
      <button onClick={Bla}>Change theme</button>
    </>
  );
}

export default White;
