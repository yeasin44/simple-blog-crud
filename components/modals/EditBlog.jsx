import axios from "axios";
import React, { useState } from "react";

const EditBlog = ({ onClose, visible, blog }) => {
  const { id, author, quote } = blog.blog;
  const [productData, setProductData] = useState("");
  if (!visible) return null;
  const handleProductSubmit = () => {};

  const updateBlog = async (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const quote = e.target.quote.value;
    // console.log("id", id, name, quote);
    const data = {
      name: e.target.name.value,
      quote: e.target.quote.value,
      id: id,
    };
    console.log(data);

    // setIsLoading(true);
    try {
      const response = await axios.post(
        `http://127.0.0.1:5001/simple-blog-crud/us-central1/Blog/edit-blog`,
        { data }
      );

      // setIsLoading(false);
      // console.log("Response:", response.data);
      console.log("response", response);
      // router.push("/manage-pos");
    } catch (error) {
      if (error.response) {
        console.error("Server error:", error.response.data);
      } else {
        console.error("Error request:", error.message);
      }
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75  flex items-center justify-center ">
      <div className="bg-white p-2 rounded w-[800px] h-[300px] relative m-4">
        <div className="w-6 h-6 border text-center flex items-center justify-center rounded-full">
          <button onClick={onClose} className="text-xl ">
            x
          </button>
        </div>
        <form onSubmit={updateBlog}>
          <div className="mx-12 mt-6">
            <div className="flex flex-col">
              <label className="text-base font-semibold text-gray-800">
                Name of the Author
              </label>
              <input
                // defaultValue={productData.quote}

                name="name"
                type="text"
                className="mt-1 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                // placeholder="Enter author name"
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
                // onClick={handleProductSubmit}
                type="submit"
                className="bg-primary bg-sky-700 hover:bg-sky-900 text-white font-bold px-6 py-2 rounded-md mt-4"
              >
                Post blog
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
