import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const handelClick = () => {
    setCount(count + 1); // re-render component
    setCount(count + 1); // re-render component
    setCount(count + 1); // re-render component - set state only re-render 1 times

    setCount((preState) => preState + 1);
    setCount((preState) => preState + 1);
    setCount((preState) => preState + 1);
  };
  //1.useEffect(callback, [deps])
  //2.useEffect(callback,)
  //3.useEffect(callback,[]). use when , update DOM, call API, listen DOM events, clean up...
  // callback luôn dc gọi sau khi component mount, sau khi usestate ( setState), sau khi component re-render thêm element vào DOM
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  /*  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      console.log("posts 100", posts);
    }); */
  useEffect(() => {
    console.log("component mounted - useEffect");
    document.title = title;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        console.log("posts 100", posts);
        setPosts(posts);
      });
  }, [title]); //[] comp không re-render nhiều lần

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handelClick}> Click </button>
      <h1>useEffect</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      {console.log("render comp")}
      <ul>
        {posts.map((post) => (
          <li key={post.id}> {post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
