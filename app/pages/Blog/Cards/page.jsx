"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddPostModal from "../../AddModal/page";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import VisibilityIcon from '@mui/icons-material/Visibility';

const Cards = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div>
      <Navbar />
      <ToastContainer />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold mb-6 text-[#46a358]">
            Blog Postlar
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="border px-4 py-2 rounded text-[#000] hover:bg-[#46a358] hover:text-white"
          >
            Add
          </button>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition"
            >
              <Link href={`/pages/Blog/Cards/${post?.id}`}>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4">{post.body}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-[#46a358] text-white px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {isLoggedIn ? (
                <div className="flex flex-wrap justify-between text-sm text-gray-500">
                  <div>
                    {" "}
                    <PersonOutlineIcon /> User ID: {post.userId}
                  </div>
                  <div>
                    {" "}
                    <ThumbUpIcon /> Likes: {post.reactions?.likes || 0}
                  </div>
                  <div>
                    {" "}
                    <ThumbDownAltIcon /> Dislikes:{" "}
                    {post.reactions?.dislikes || 0}
                  </div>
                  <div> <VisibilityIcon /> Views: {post.views || "Nomaʼlum"}</div>
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  Foydalanuvchi ro'yxatdan o'tmagan
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <AddPostModal
          showModal={showModal}
          setShowModal={setShowModal}
          setPosts={setPosts}
        />
      )}
    </div>
  );
};

export default Cards;
