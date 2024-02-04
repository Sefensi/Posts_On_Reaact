import React, { useState } from "react";
import "./styles/App.css";

import PostList from "./components/PostList";

import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
function App() {
  const [posts, setPosts] = useState([
    { id: Date.now(), title: "aaa", body: "lsdadaf" },
    { id: Date.now() + 1, title: "ccccc 2", body: "zxcq" },
    { id: Date.now() + 2, title: "jjjjj 3", body: "qqasdqe" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = ''
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // Получаем  post  из дочернего элемента с
  // помощью callback,
  // также как и в create(выше)
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts();
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={[
            { value: "title", name: "By name" },
            { value: "body", name: "By description" },
          ]}
        />
      </div>
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
