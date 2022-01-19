import React, { useState } from "react";

export const PostsContext = React.createContext({
//   username: "",
  posts: [],
  handleAddPost: () => {},
  handleDeletePost: () => {},
});

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (values, selectedFile) => {
    const newPost = {
      username: values.username,
      content: values.content,
      image: selectedFile,
    };
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (content) => {
    const filteredPosts = posts.filter((post) => post.content !== content)
    setPosts(filteredPosts);
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        handleAddPost,
        handleDeletePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
