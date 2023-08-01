// const admin = require("firebase-admin");
// const express = require("express");
// const parseUrl = express.urlencoded({ extended: false });
// const parseJson = express.json({ extended: false });
// const cors = require("cors");
// const db = admin.firestore();

// const Blog = express();
// Blog.use(cors({ origin: true }));

// // Get all blogs
// Blog.get("/blogs", async (req, res) => {
//   try {
//     const snapshot = await db.collection("blogs").get();
//     const blogs = [];
//     snapshot.forEach((doc) => {
//       const data = doc.data();
//       const blog = {
//         id: doc.id,
//         ...data,
//       };
//       blogs.push(blog);
//     });
//     return res.status(200).json(blogs);
//   } catch (error) {
//     console.error("Error retrieving blogs:", error);
//     return res.status(500).json({ error: "Failed to retrieve blogs" });
//   }
// });

// // Get blog by id

// Blog.get("/blogs/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const doc = await db.collection("blogs").doc(id).get();
//     if (!doc.exists) {
//       return res.status(404).json({ error: "Blog not found" });
//     }
//     const blog = doc.data(); // Extract product data from document snapshot
//     return res.status(200).json(blog);
//   } catch (error) {
//     console.error("Error retrieving blog:", error);
//     return res.status(500).json({ error: "Failed to retrieve blog" });
//   }
// });

// // Create a new Blog
// Blog.post("/add-blog", [parseUrl, parseJson], async (req, res) => {
//   try {
//     const blog = req.body;
//     const docRef = await db.collection("blogs").add({
//       quote: req.body.quote,
//       author: req.body.author,
//     });
//     const createdBlogs = {
//       id: docRef.id,
//       ...blog,
//     };
//     return res.status(201).json(createdBlogs);
//   } catch (error) {
//     console.error("Error creating blog:", error);
//     return res.status(500).json({ error: "Failed to create blog" });
//   }
// });
// // Update a blog by id
// // Blog.put("/add-blog/:id", [parseUrl, parseJson], async (req, res) => {
// //   try {
// //     const blogId = req.params.id;
// //     const blog = req.body;
// //     await db.collection("blogs").doc(blogId).update(blog);
// //     return res.status(200).json({ message: "Blog updated successfully" });
// //   } catch (error) {
// //     console.error("Error updating blog:", error);
// //     return res.status(500).json({ error: "Failed to update blog" });
// //   }
// // });

// // Blog.post("/edit-blog", [parseUrl, parseJson], async (req, res) => {
// //   try {
// //     const blogId = req.body.id;
// //     const updatedBlog = {
// //       name: req.body.name,
// //       quote: req.body.quote,
// //       updatedAt: new Date(),
// //     };
// //     await db.collection("blogs").doc(blogId).update(updatedBlog);
// //     return res.status(200).json("Blog Updated");
// //   } catch (error) {
// //     console.error("Error updating Blog:", error);
// //     return res.status(500).json("Error updating Blog : " + error);
// //   }
// // });

// // Delete a blog by ID
// // Blog.delete("/delete_blog/:id", [parseUrl, parseJson], async (req, res) => {
// //   try {
// //     const { id } = req.body;
// //     await blogs.doc(id).delete();
// //     return res
// //       .status(200)
// //       .json({ id, message: "Successfully deleted category" });
// //   } catch (error) {
// //     console.error("Error deleting sports categories entry:", error);
// //     return res
// //       .status(500)
// //       .json({ error: "Failed to delete sports categories entry" });
// //   }
// // });

// module.exports = { Blog };
