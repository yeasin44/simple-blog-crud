import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import EditBlog from "./modals/EditBlog";

const BlogCard = (blog) => {
  const [showModal, setShowModal] = useState(false);
  const { id, quote, author } = blog.blog;
  const router = useRouter();

  const handleModal = () => {
    setShowModal(false);
  };

  return (
    <div className="border-2 rounded m-2 p-2 flex justify-between gap-4">
      <p>{quote}</p>
      <div className="flex gap-2">
        <Link href="" onClick={() => setShowModal(true)}>
          <button className="border h-8 w-12 rounded hover:bg-amber-400 hover:text-white hover:font-bold">
            Edit
          </button>
        </Link>
        <EditBlog onClose={handleModal} visible={showModal} blog={blog} />
        <button className="border h-8 w-20 rounded hover:bg-red-600 hover:text-white hover:font-bold">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
