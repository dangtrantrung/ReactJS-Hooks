import { memo } from "react";

function MemoHOC({ gift }) {
  console.log("MemoHOC rerender");
  return (
    <div>
      <h1>
        {" "}
        Hello MemoHOC with gift change memo re-render HOC when props change ={" "}
        {gift}
      </h1>
    </div>
  );
}
export default memo(MemoHOC);
