import React from "react";

const DeleteBlog = ({ onClose, visible }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75  flex items-center justify-center ">
      <div className="bg-white p-2 rounded w-[800px] h-[300px] relative m-4">
        <div className="w-6 h-6 border text-center flex items-center justify-center rounded-full">
          <button onClick={onClose} className="text-xl ">
            x
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
              onClick={handleProductSubmit}
              type="submit"
              className="bg-primary bg-sky-700 hover:bg-sky-900 text-white font-bold px-6 py-2 rounded-md mt-4"
            >
              Post blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBlog;
