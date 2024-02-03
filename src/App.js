import React, { useRef, useState, StrictMode } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";

import PostList from "./components/PostList";

import PostForm from "./components/PostForm";
function App() {
  const [posts, setPosts] = useState([
    { id: Date.now(), title: "Javascript", body: "Description" },
    { id: Date.now() + 1, title: "Javascript 2", body: "Description" },
    { id: Date.now() + 2, title: "Javascript 3", body: "Description" },
  ]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // Получаем  post  из дочернего элемента с
  // помощью callback,
  // также как и в create(выше)
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList
          remove={removePost}
          posts={posts}
          title={"Posts"}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>There is no posts here =( </h1>
      )}
    </div>
  );
}
export default App;
