import { memo, useCallback } from "react";

function MemoHOCuseCallback({ onIncrease }) {
  console.log("MemoHOCuseCallback rerender");
  return (
    <div>
      <button onClick={onIncrease}> Click me</button>
    </div>
  );
}
export default memo(MemoHOCuseCallback);
