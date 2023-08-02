import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import EditBlog from "./modals/EditBlog";
import axios from "axios";
import Loader from "./icons/Loader";
import ButtonLoader from "./icons/ButtonLoader";

const BlogCard = (blog) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const { id, quote, author } = blog.blog;
  const router = useRouter();

  const handleModal = () => {
    setShowModal(false);
  };

  const deleteBlog = async (deleteId) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5001/simple-blog-crud/us-central1/Blog/delete-blog",
        { id: deleteId }
      );
      console.log("Response:", response.data);
      setLoading(false);
      router.push("/");
    } catch (error) {
      console.error("Error deleting Blog:", error);
    } finally {
    }
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
          {isLoading ? (
            <span className="flex justify-center animate-spin">
              <ButtonLoader />
            </span>
          ) : (
            "Delete"
          )}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
