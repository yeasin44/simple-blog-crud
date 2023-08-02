import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const BlogId = () => {
  const router = useRouter();
  const query = router.query.id;
  const [id, setId] = useState("");

  useEffect(() => {
    setId(query);
  }, [query]);

  const { data: blog = [], refetch } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await axios.get(
        `http://127.0.0.1:5001/simple-blog-crud/us-central1/Blog/blogs/${id}`
      );
      return res.data;
    },
  });

  return (
    <div className="container m-auto flex items-center justify-center">
      <div className="border h-auto p-12 w-[80%] rounded text-center m-12">
        <h1 className="font-bold text-2xl m-2">{blog.author}</h1>
        <hr />
        <p className="m-2 mt-6">{blog?.quote}</p>
      </div>
    </div>
  );
};

export default BlogId;
