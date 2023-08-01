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
    <div>
      <p>{blog?.quote}</p>
    </div>
  );
};

export default BlogId;
