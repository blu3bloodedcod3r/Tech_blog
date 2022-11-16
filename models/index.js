const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');


//template from in-class exercises; replace with appropriate models and variables

BlogPost.hasOne(User, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

// LibraryCard.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });

// Reader.hasMany(Book, {
//   foreignKey: 'book_id',
//   onDelete: 'CASCADE'
// })

// Book.belongsTo(Reader, {
//   foreignKey: 'reader_id'
// })

module.exports = { User, BlogPost, Comment };