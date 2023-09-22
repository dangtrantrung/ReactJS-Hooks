import { useState } from "react";

const gifts = ["CPU i9", "ram 32g rgb", "rgb keyboard"];
function App() {
  const init = "";
  const [gift, setGift] = useState(init ?? "chua co gift");
  const handleClick = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1> {gift}</h1> {/* 2 way binding UI - state */}
      <button onClick={handleClick}> Random Gift</button>
    </div>
  );
}

export default App;
