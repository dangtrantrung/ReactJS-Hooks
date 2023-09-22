import { useEffect, useState } from "react";

function Content() {
  const [state, setState] = useState("init state");
  const [type, setType] = useState("init type");

  useEffect(() => {
    //call API, Update DOM,...
    // deps: call useEffect when deps
    //clean up memory leak
    return () => {
      //clean up memory
    };
  }, [state, type]);

  return (
    <div>
      <h1> Hello Mounted Unmounted</h1>
    </div>
  );
}
export default Content;
