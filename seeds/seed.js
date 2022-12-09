const sequelize = require('../config/connection');
const {User, BlogPost} = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

console.log(users)

const posts = await BlogPost.bulkCreate(blogData, {
  individualHooks: true,
  returning: true,
});

console.log(posts)
  // for (const blogData of BlogPost) {
  //   await BlogPost.create({
  //     ...blogData,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();