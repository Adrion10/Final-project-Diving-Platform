const express = require("express");
const router = express.Router();

const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
} = require("../controllers/postsController");

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.get("/posts:id", getPost);
router.patch("/posts:id", updatePost);
router.delete("/posts:id", deletePost);
router.patch("/posts:id/likePost", likePost);

module.exports = router;
