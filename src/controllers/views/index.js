const renderLogin = (req, res) => {
  if (req.session.isLoggedIn) {
    return res.redirect("/dashboard");
  }
  return res.render("login");
};

const renderSignUp = (req, res) => {
  res.render("signUp");
};

const renderDashboard = (req, res) => {
  const handlebarsData = {
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
    blogCount: 3,
    blogs: [
      {
        id: "123",
        title: "GraphQL in 10 minutes",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae labore animi reprehenderit eveniet magni error facere cumque? Iusto minima assumenda ad aperiam tenetur non reprehenderit cum maiores accusamus eaque.",
        user: {
          username: "bob.smith",
        },
      },
      {
        id: "123",
        title: "GraphQL in 10 minutes",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae labore animi reprehenderit eveniet magni error facere cumque? Iusto minima assumenda ad aperiam tenetur non reprehenderit cum maiores accusamus eaque.",
        user: {
          username: "bob.smith",
        },
      },
      {
        id: "123",
        title: "GraphQL in 10 minutes",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae labore animi reprehenderit eveniet magni error facere cumque? Iusto minima assumenda ad aperiam tenetur non reprehenderit cum maiores accusamus eaque.",
        user: {
          username: "bob.smith",
        },
      },
    ],
  };
  res.render("dashboard", handlebarsData);
};

const renderCreateBlog = (req, res) => {
  res.render("createBlog");
};

const renderBlogById = (req, res) => {
  res.render("blogById");
};

const renderEditBlogById = (req, res) => {
  res.render("editBlogById");
};

const renderHome = (req, res) => {
  // get all blogs from db

  // use plain true

  // construct our handlebars data object
  const handlebarsData = {
    isLoggedIn: req.session.isLoggedIn,
    blogs: [
      {
        id: "123",
        title: "GraphQL in 10 minutes",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae labore animi reprehenderit eveniet magni error facere cumque? Iusto minima assumenda ad aperiam tenetur non reprehenderit cum maiores accusamus eaque.",
        user: {
          username: "bob.smith",
        },
      },
      {
        id: "123",
        title: "GraphQL in 10 minutes",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae labore animi reprehenderit eveniet magni error facere cumque? Iusto minima assumenda ad aperiam tenetur non reprehenderit cum maiores accusamus eaque.",
        user: {
          username: "bob.smith",
        },
      },
      {
        id: "123",
        title: "GraphQL in 10 minutes",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae labore animi reprehenderit eveniet magni error facere cumque? Iusto minima assumenda ad aperiam tenetur non reprehenderit cum maiores accusamus eaque.",
        user: {
          username: "bob.smith",
        },
      },
      {
        id: "123",
        title: "GraphQL in 10 minutes",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae labore animi reprehenderit eveniet magni error facere cumque? Iusto minima assumenda ad aperiam tenetur non reprehenderit cum maiores accusamus eaque.",
        user: {
          username: "bob.smith",
        },
      },
      {
        id: "123",
        title: "GraphQL in 10 minutes",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae labore animi reprehenderit eveniet magni error facere cumque? Iusto minima assumenda ad aperiam tenetur non reprehenderit cum maiores accusamus eaque.",
        user: {
          username: "bob.smith",
        },
      },
      {
        id: "123",
        title: "GraphQL in 10 minutes",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae labore animi reprehenderit eveniet magni error facere cumque? Iusto minima assumenda ad aperiam tenetur non reprehenderit cum maiores accusamus eaque.",
        user: {
          username: "bob.smith",
        },
      },
      {
        id: "123",
        title: "GraphQL in 10 minutes",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae labore animi reprehenderit eveniet magni error facere cumque? Iusto minima assumenda ad aperiam tenetur non reprehenderit cum maiores accusamus eaque.",
        user: {
          username: "bob.smith",
        },
      },
    ],
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
