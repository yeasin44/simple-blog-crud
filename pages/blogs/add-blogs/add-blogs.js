import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AddBlogs = () => {
  return (
    <div>
      Add blogs
      <div>
        <div className="flex flex-col">
          <label className="text-base font-semibold text-gray-800">
            Name of the Author
          </label>
          <input
            type="text"
            className="mt-1 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product name"
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
          <label className="text-base font-semibold text-gray-800">Quote</label>
          <input
            type="text"
            className="mt-1 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product name"
            value={productData.quote}
            onChange={(event) =>
              setProductData((prevData) => ({
                ...prevData,
                quote: event.target.value,
              }))
            }
          />
        </div>
        <button
          onClick={handleProductSubmit}
          type="submit"
          className="bg-primary  px-6 py-2 rounded-md mt-4"
        >
          Post blog
        </button>
      </div>
    </div>
  );
};

export default AddBlogs;
