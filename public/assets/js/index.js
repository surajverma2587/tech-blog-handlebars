const loginForm = $("#login-form");
const signupForm = $("#sign-up-form");
const newBlogForm = $("#new-blog-form");
const commentForm = $("#comment-form");
const editBlogForm = $("#edit-blog-form");
const logoutBtn = $("#logout-btn");
const deleteBlogBtn = $("#delete-blog-btn");
const errorMessageDiv = $("#error-message");

const renderError = (message) => {
  errorMessageDiv.empty();

  const errorDiv = `<div class="form-text text-danger"><span class="mx-2">${message}</span><i class="fas fa-exclamation-circle"></i></div>`;

  errorMessageDiv.append(errorDiv);
};

const makeRequest = async (url, method, body = {}) => {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
};

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $("#email").val();
  const password = $("#password").val();

  if (email && password) {
    try {
      const data = await makeRequest("/auth/login", "POST", {
        email,
        password,
      });

      if (data.success) {
        window.location.replace("/dashboard");
      } else {
        renderError("Failed to login");
      }
    } catch (error) {
      renderError("Failed to login");
    }
  } else {
    renderError("Failed to login");
  }
};

const handleSignUp = async (event) => {
  event.preventDefault();

  const username = $("#username").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirm-password").val();

  if (
    email &&
    username &&
    password &&
    confirmPassword &&
    password === confirmPassword
  ) {
    try {
      const data = await makeRequest("/auth/signup", "POST", {
        username,
        email,
        password,
      });

      if (data.success) {
        window.location.replace("/login");
      } else {
        renderError("Failed to sign up");
      }
    } catch (error) {
      renderError("Failed to sign up");
    }
  } else {
    renderError("Failed to sign up");
  }
};

const handleCreateBlog = (event) => {
  event.preventDefault();

  console.log("create blog submit");
};

const handleCreateComment = (event) => {
  event.preventDefault();

  console.log("create comment submit");
};

const handleEditBlog = (event) => {
  event.preventDefault();

  console.log("edit blog submit");
};

const handleLogout = async () => {
  try {
    const data = await makeRequest("/auth/logout", "POST");

    if (data.success) {
      window.location.replace("/login");
    } else {
      console.log("Failed to logout");
    }
  } catch (error) {
    console.log("Failed to logout");
  }
};

const handleDeleteBlog = () => {
  console.log("delete blog clicked");
};

loginForm.on("submit", handleLogin);
signupForm.on("submit", handleSignUp);
newBlogForm.on("submit", handleCreateBlog);
commentForm.on("submit", handleCreateComment);
editBlogForm.on("submit", handleEditBlog);
logoutBtn.on("click", handleLogout);
deleteBlogBtn.on("click", handleDeleteBlog);
