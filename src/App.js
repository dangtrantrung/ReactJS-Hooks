import { useCallback, useState } from "react";
import Content from "./Content";
import MemoHOC from "./MemoHOC";
import MemoHOCuseCallback from "./MemoHOCuseCallback";
const courses = [
  { id: 1, name: "HTML" },
  { id: 2, name: "JS" },
  {
    id: 3,
    name: "Hooks",
  },
];
function App() {
  const [checked, setChecked] = useState([]);
  const [count, setCount] = useState(0);

  console.log(checked);

  const [show, setShow] = useState(false);

  const handleRegister = () => {
    //call API to REgister form
    console.log({ id: checked });
  };
  const handleCheck = (id) => {
    console.log(
      setChecked((prev) => {
        const isChecked = checked.includes(id);
        if (isChecked) {
          //Uncheck
          return checked.filter((item) => item !== id);
        } else return [...prev, id];
      })
    );
  };

  const gifts = ["CPU i9", "ram 32g rgb", "rgb keyboard"];
  const init = undefined;
  const [gift, setGift] = useState(init ?? "chua co gift");
  const handleClick = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  const handleIncrease = useCallback(() => {
    setCount((prevcount) => prevcount + 1);
  }, []);
  //usecallback, memo with deps to not re-render if dependencies not changed

  return (
    <div style={{ padding: 30 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleRegister}> Register</button>
      {/* gift */}
      <h1> {gift}</h1> {/* 2 way binding UI - state */}
      <button onClick={handleClick}> Random Gift</button>
      <button onClick={() => setShow(!show)}>Toggle</button>{" "}
      {/* Mount & Unmount DOM*/}
      {show && <Content />}
      {/*       //memo HOC - High Order COmponent
       */}
      <MemoHOC gift={gift} />
      <MemoHOCuseCallback onIncrease={handleIncrease} />
      <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
