const router = require('express').Router();
const { Post, User} = require('../../models')

//get all posts
router.get('/', async (req, res) => {
try{
//retrieva all posts from db
const dbPostData = await  Post .findAll({
    include: [User]
})
//serialize data retrieved
const posts = dbPostData.map(post => post.get({ plain:true }));
console.log(posts);
//respond with template to render alnong with data retreived
res.render('homepage', { posts })
} catch (err) {
    res.status(500).json(err);
}
});

//single post
router.get('/post/:id', async (req, res) => {
    res.send(`Render single post view along with the post with ${req.params.id} retreived from the database.`)
});

//login view
router.get('/login', async (req, res) => {
    res.send('Render log-in view.')
});

//sign up view
router.get('/signup', async (req, res) => {
    res.send('Render sign-up view.')
});

module.exports = router