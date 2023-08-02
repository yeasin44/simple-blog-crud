import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ButtonLoader from "../icons/ButtonLoader";
import { toast } from "react-hot-toast";
import Cross from "../icons/Cross";

const AddBlogModal = ({ onClose, visible }) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [productData, setProductData] = useState({
    quote: "",
    author: "",
  });

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const getProductData = {
      quote: productData.quote,
      author: productData.author,
    };
    console.log(getProductData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5001/simple-blog-crud/us-central1/Blog/add-blog",
        getProductData
      );
      toast.success("Blog Added Successfully");
      setLoading(false);
      router.push("/");
      onClose();
    } catch (error) {
      if (error.response) {
        setLoading(false);
        console.error("Server error:", error.response.data);
      } else {
        setLoading(false);
        console.error("Error request:", error.message);
      }
    }
    onClose();
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75  flex items-center justify-center ">
      <div className="bg-white p-2 rounded w-[800px] h-auto relative m-4">
        <div className="w-8 h-8 border text-center flex items-center justify-center rounded-full">
          <button onClick={onClose} className="">
            <Cross />
          </button>
        </div>
        <div className="mx-12 mt-6">
          <div className="flex flex-col">
            <label className="text-base font-semibold text-gray-800">
              Name of the Author
            </label>
            <input
              type="text"
              className="mt-1 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter author name"
              value={productData.author}
              onChange={(event) =>
                setProductData((prevData) => ({
                  ...prevData,
                  author: event.target.value,
                }))
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base font-semibold text-gray-800">
              Quote
            </label>
            <textarea
              type="text"
              className="mt-1 w-full py-4 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter quote"
              value={productData.quote}
              onChange={(event) =>
                setProductData((prevData) => ({
                  ...prevData,
                  quote: event.target.value,
                }))
              }
            />
          </div>
          <div className="text-center">
            <button
              onClick={handleBlogSubmit}
              type="submit"
              className="bg-primary bg-sky-700 hover:bg-sky-900 text-white font-bold px-6 py-2 rounded-md mt-4 mb-8"
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
      </div>
    </div>
  );
};

export default AddBlogModal;
