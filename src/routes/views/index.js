const { Router } = require("express");

const {
  renderLogin,
  renderSignUp,
  renderDashboard,
  renderCreateBlog,
  renderBlogById,
  renderEditBlogById,
  renderHome,
} = require("../../controllers/views");

const router = Router();

router.get("/login", renderLogin);
router.get("/sign-up", renderSignUp);
router.get("/dashboard", renderDashboard);
router.get("/create-blog", renderCreateBlog);
router.get("/blogs/:id", renderBlogById);
router.get("/blogs-edit/:id", renderEditBlogById);
router.get("/", renderHome);

module.exports = router;
