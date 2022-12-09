const router = require('express').Router();
const {BlogPost, User, Comment} = require('../models')


router.get('/', async (req, res) => {
    console.log('in homeroute')
    try{
        const dbPostData = await BlogPost.findAll();

    const posts = dbPostData.map(post => post.get({ plain:true }));
    console.log('homepage posts', posts);

    res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try{
        const singlePost = await BlogPost.findByPk(req.params.id, {
            include: [{model: BlogPost}]
        });

        const onePost = singlePost.get({plain: true});
        res.render('post', {onePost, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
      res.render('login');
});


router.get('/signup', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    } else {
      res.render('login');
      res.send('Render sign-up view.')
    }
});

module.exports = router