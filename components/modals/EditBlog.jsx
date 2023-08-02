import axios from "axios";
import React, { useState } from "react";
import ButtonLoader from "../icons/ButtonLoader";
import { useRouter } from "next/router";
import Cross from "../icons/Cross";

const EditBlog = ({ onClose, visible, blog }) => {
  const { id, author, quote } = blog.blog;
  const [productData, setProductData] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleProductSubmit = () => {};

  const updateBlog = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5001/simple-blog-crud/us-central1/Blog/edit-blog",
        { author: e.target.author.value, quote: e.target.quote.value, id: id }
      );

      console.log("response", response);
      setLoading(false);
      router.push("/");
    } catch (error) {
      if (error.response) {
        console.error("Server error:", error.response.data);
      } else {
        console.error("Error request:", error.message);
      }
    }
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75  flex items-center justify-center ">
      <div className="bg-white p-2 rounded w-[800px] h-[300px] relative m-4">
        <div className="w-8 h-8 border text-center flex items-center justify-center rounded-full">
          <button onClick={onClose} className="text-xl ">
            <Cross />
          </button>
        </div>
        <form onSubmit={updateBlog}>
          <div className="mx-12 mt-6">
            <div className="flex flex-col">
              <label className="text-base font-semibold text-gray-800">
                Name of the Author
              </label>
              <input
                name="author"
                type="text"
                className="mt-1 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue={author}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base font-semibold text-gray-800">
                Quote
              </label>
              <textarea
                name="quote"
                type="text"
                className="mt-1 w-full py-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue={quote}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary bg-sky-700 hover:bg-sky-900 text-white font-bold px-6 py-2 rounded-md mt-4"
              >
                {isLoading ? (
                  <span className="flex justify-center animate-spin">
                    <ButtonLoader />
                  </span>
                ) : (
                  "Post blog"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
