const express = require('express');
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

const router = express.Router();

router.get('/posts', (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(posts);
    }
  });
});

router.get('/posts/:postId', (req, res) => {
  const postId = req.params.postId;

  Post.findById(postId, (err, post) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!post) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.status(200).json(post);
    }
  });
});

router.post('/posts', (req, res) => {
  const { title, content, author, tags, comments } = req.body;

  const newPost = new Post({
    title,
    content,
    author,
    tags,
    comments
  });

  newPost.save((err, savedPost) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json(savedPost);
    }
  });
});

router.put('/posts/:postId', (req, res) => {
  const postId = req.params.postId;
  const { title, content, author, tags, comments } = req.body;

  Post.findByIdAndUpdate(
    postId,
    { title, content, author, tags, comments },
    { new: true },
    (err, updatedPost) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!updatedPost) {
        res.status(404).json({ message: 'Post not found' });
      } else {
        res.status(200).json(updatedPost);
      }
    }
  );
});

router.delete('/posts/:postId', (req, res) => {
  const postId = req.params.postId;

  Post.findByIdAndDelete(postId, (err, deletedPost) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!deletedPost) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.status(200).json(deletedPost);
    }
  });
});

router.post('/posts/:postId/comments', (req, res) => {
  const postId = req.params.postId;
  const { text, author } = req.body;

  const newComment = new Comment({
    text,
    author
  });

  Post.findByIdAndUpdate(
    postId,
    { $push: { comments: newComment } },
    { new: true },
    (err, updatedPost) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!updatedPost) {
        res.status(404).json({ message: 'Post not found' });
      } else {
        res.status(201).json(updatedPost.comments[updatedPost.comments.length - 1]);
      }
    }
  );
});

router.get('/posts/:postId/comments', (req, res) => {
  const postId = req.params.postId;

  Post.findById(postId, 'comments', (err, post) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!post) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.status(200).json(post.comments);
    }
  });
});

router.put('/posts/:postId/comments/:commentId', (req, res) => {
  const postId = req.params.postId;
  const commentId = req.params.commentId;
  const { text } = req.body;

  Post.findOneAndUpdate(
    { _id: postId, 'comments._id': commentId },
    { $set: { 'comments.$.text': text } },
    { new: true },
    (err, updatedPost) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!updatedPost) {
        res.status(404).json({ message: 'Post or comment not found' });
      } else {
        res.status(200).json(updatedPost.comments.find(comment => comment._id.toString() === commentId));
      }
    }
  );
});

router.delete('/posts/:postId/comments/:commentId', (req, res) => {
  const postId = req.params.postId;
  const commentId = req.params.commentId;

  Post.findByIdAndUpdate(
    postId,
    { $pull: { comments: { _id: commentId } } },
    { new: true },
    (err, updatedPost) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!updatedPost) {
        res.status(404).json({ message: 'Post or comment not found' });
      } else {
        res.status(200).json({ message: 'Comment deleted successfully' });
      }
    }
  );
});

module.exports = router;