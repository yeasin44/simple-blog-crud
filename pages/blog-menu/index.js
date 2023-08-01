import { useRouter } from "next/router";
import React from "react";

const BlogMenu = (blog) => {
  const { id, quote, author } = blog.blog;
  const router = useRouter();
  return (
    <div className="border rounded m-1 p-2 text-center hover:bg-sky-400 hover:text-white hover:font-bold">
      <button onClick={() => router.push(`/blogs/${id}`)}>
        <p>{author}</p>
      </button>
    </div>
  );
};

export default BlogMenu;
