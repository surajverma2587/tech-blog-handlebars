const createBlog = (req, res) => {
  return res.send("createBlog");
};

const deleteBlogById = (req, res) => {
  return res.send("deleteBlogById");
};

const updateBlogById = (req, res) => {
  return res.send("updateBlogById");
};

module.exports = { createBlog, updateBlogById, deleteBlogById };
