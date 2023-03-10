import SideBar from "../components/Sidebar.js";
import Header from "../components/Header.js";
import {useState } from "react";
import Post from "../components/Post.js";
export default function Hashtag() {
  return (
    <>
      <Header />
      <Post/>
      <SideBar />
    </>
  );
}
