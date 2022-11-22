const router = require('express').Router();
const BlogPost = require('../../models');

router.post('/post/', async (req, res) => {
    BlogPost.create(
        {
            id: req.paramas.id,
            post_title: res.body.post_title,
            contents: res.body.contents
        },
        {
            where: {id: req.params.id}
        })
        .then(updatedPost => {
            res.json(updatedPost);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
});

module.expors = router