import React, { useMemo, useState } from "react";
import "./styles/App.css";

import PostList from "./components/PostList";

import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
function App() {
  const [posts, setPosts] = useState([
    { id: Date.now(), title: "aaa", body: "lsdadaf" },
    { id: Date.now() + 1, title: "ccccc 2", body: "zxcq" },
    { id: Date.now() + 2, title: "jjjjj 3", body: "qqasdqe" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("Check sorting function");

    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]),
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase()),
    );
  }, [filter.query, sortedPosts]);

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
      <hr style={{ margin: "15px 0" }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Posts"}
        />
       
    </div>
  );
}
export default App;
