const Article = require('./Article');
const BlogPost = require('./BlogPost');
const Thoughts = require('./Thoughts');


//template from in-class exercises; replace with appropriate models and variables

BlogPost.hasOne(Article, {
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

module.exports = { Article, BlogPost, Thoughts };