import { useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import BlogMenu from "../blog-menu";
import AddBlogModal from "@/components/modals/AddBlogModal";
// import styles from "../../styles/globals.css";
import styles from "../../styles/neon-border.module.css";

const Blogs = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get(
        `http://127.0.0.1:5001/simple-blog-crud/us-central1/Blog/blogs`
      );
      return res.data;
    },
  });
  const handleModal = () => {
    setShowModal(false);
  };
  return (
    <div className="">
      <div className="text-center text-4xl mt-12 font-bold">
        Share your thoughts
      </div>

      <div className="flex gap-4 mt-10 mx-24">
        <div className="border w-[20%] rounded  p-4">
          <h2 className="text-center font-bold text-xl m-4">Author</h2>
          {blogs.map((blog) => (
            <BlogMenu key={blog.id} blog={blog} refetch={refetch} />
          ))}
        </div>
        <div className="border w-[50%] rounded p-4">
          <h2 className="text-center font-bold text-xl m-4">Quotes</h2>
          {blogs.map((blog) => (
            <div key={blog.id} className="mt-4">
              <BlogCard blog={blog} refetch={refetch} />
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="p-6 w-[20%] h-24 rounded-lg hover:bg-slate-900 hover:text-white text-black text-center text-xl hover:font-bold font-semibold border ease-in duration-300"
        >
          Add Blog
        </button>
        {/* <button
          onClick={() => setShowModal(true)}
          className={`neon-border p-6 w-[20%] h-24 rounded-lg hover:bg-slate-900 hover:text-white text-black text-center text-xl hover:font-bold font-semibold ${styles["neon-border"]}`}
        >
          Add Blog
        </button> */}
      </div>
      {/* <div className="flex justify-center items-center min-h-screen">
        <div className="border w-[20%] h-24 cursor-pointer hover:bg-slate-900 hover:text-white hover:font-bold rounded p-4">
          Neon Border Effect
        </div>
      </div> */}
      <AddBlogModal onClose={handleModal} visible={showModal} />
    </div>
  );
};

export default Blogs;
