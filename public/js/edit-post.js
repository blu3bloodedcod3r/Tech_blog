const router = require('express').Router();
const BlogPost = require('../../models');

router.put('/post/:id', async (req, res) => {
    BlogPost.update(
        {
            post_title: req.bosy.post_title,
            contents: req.body.contents,
            comment: req.bosy.comment
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