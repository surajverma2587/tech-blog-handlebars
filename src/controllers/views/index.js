const { Blog, User } = require("../../models");

const renderLogin = (req, res) => {
  if (req.session.isLoggedIn) {
    return res.redirect("/dashboard");
  }
  return res.render("login");
};

const renderSignUp = (req, res) => {
  if (req.session.isLoggedIn) {
    return res.redirect("/dashboard");
  }
  return res.render("signUp");
};

const renderDashboard = async (req, res) => {
  const blogsFromDb = await Blog.findAll({
    where: {
      userId: req.session.user.id,
    },
    include: [
      {
        model: User,
        attributes: {
          exclude: ["password"],
        },
      },
    ],
  });

  const blogs = blogsFromDb.map((blog) => {
    return blog.get({ plain: true });
  });

  const handlebarsData = {
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
    blogCount: blogs.length,
    blogs,
  };

  res.render("dashboard", handlebarsData);
};

const renderCreateBlog = (req, res) => {
  const username = req.session.user.username;
  res.render("createBlog", { username });
};

const renderBlogById = async (req, res) => {
  const { id } = req.params;

  const blogFromDb = await Blog.findOne({
    where: {
      id,
    },
    include: [
      {
        model: User,
        attributes: {
          exclude: ["password"],
        },
      },
    ],
  });

  const blog = blogFromDb.get({ plain: true });

  res.render("blogById", {
    ...blog,
    isMyBlog: blog.userId === req.session.user.id,
  });
};

const renderEditBlogById = async (req, res) => {
  const { id } = req.params;

  const blogFromDb = await Blog.findOne({
    where: {
      id,
    },
    include: [
      {
        model: User,
        attributes: {
          exclude: ["password"],
        },
      },
    ],
  });

  const blog = blogFromDb.get({ plain: true });

  console.log(blog);

  res.render("editBlogById", blog);
};

const renderHome = async (req, res) => {
  const blogsFromDb = await Blog.findAll({
    include: [
      {
        model: User,
        attributes: {
          exclude: ["password"],
        },
      },
    ],
  });

  const blogs = blogsFromDb.map((blog) => {
    return blog.get({ plain: true });
  });

  const handlebarsData = {
    isLoggedIn: req.session.isLoggedIn,
    blogs,
  };

  res.render("home", handlebarsData);
};

module.exports = {
  renderLogin,
  renderSignUp,
  renderDashboard,
  renderCreateBlog,
  renderBlogById,
  renderEditBlogById,
  renderHome,
};
