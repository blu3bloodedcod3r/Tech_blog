const router = require('express').Router();
const BlogPost = require('../../models')
const User = require('../../models')


router.get('/', async (req, res) => {
    try{
        const dbPostData = await BlogPost.findAll({
        include: [{model: BlogPost, through: User}]
    });

    const posts = dbPostData.map(post => post.get({ plain:true }));
    console.log(posts);

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