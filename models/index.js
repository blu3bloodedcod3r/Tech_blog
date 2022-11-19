const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

BlogPost.hasOne(User, {
  foreignKey: 'username',
  onDelete: 'CASCADE',
});

User.hasMany(BlogPost, {
  foreignKey: 'username',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'username',
  onDelete: 'CASCADE'
})

User.hasMany(Comment, {
  foreignKey: 'creator_username',
  onDelete: 'CASCADE'
})

module.exports = {
  User,
  BlogPost,
  Comment
}