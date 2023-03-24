import { createContext, useState } from "react";

export const PostContext = createContext();

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [myUserPosts, setMyUserPosts] = useState([]);
  const [selectedUserPosts, setSelectedUserposts] = useState([]);

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        myUserPosts,
        setMyUserPosts,
        selectedUserPosts,
        setSelectedUserposts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
