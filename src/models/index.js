const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

Blog.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(Blog, {
  foreignKey: "userId",
});

Comment.belongsTo(Blog, {
  foreignKey: "blogId",
});

Blog.hasMany(Comment, {
  foreignKey: "blogId",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(Comment, {
  foreignKey: "userId",
});

module.exports = { User, Blog, Comment };
