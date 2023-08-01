import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import EditBlog from "./modals/EditBlog";
import axios from "axios";

const BlogCard = (blog) => {
  const [showModal, setShowModal] = useState(false);
  const { id, quote, author } = blog.blog;
  const router = useRouter();

  const handleModal = () => {
    setShowModal(false);
  };

  const deleteBlog = async (deleteId) => {
    // setIsLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5001/simple-blog-crud/us-central1/Blog/delete-blog",
        { id: deleteId }
      );
      console.log("Response:", response.data);
      // handleClose();
      // setIsLoading(false);
      // router.push("/manage-pos");
    } catch (error) {
      console.error("Error deleting POS:", error);
    } finally {
    }
    // handleClose();
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
        <button
          onClick={() => deleteBlog(id)}
          className="border h-8 w-20 rounded hover:bg-red-600 hover:text-white hover:font-bold"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
