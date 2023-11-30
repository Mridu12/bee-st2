const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/postsRoutes');

const app = express();
const PORT = 4500; 


mongoose.connect('mongodb+srv://Mridul:Mridul2431@cluster0.lz1q6ul.mongodb.net/bee?retryWrites=true&w=majority');


app.use(bodyParser.json());


app.use('/api', postsRoutes);


app.post('/api/posts', (req, res) => {

  res.send('Create Post API');
});


app.put('/api/posts/:postId', (req, res) => {

  res.send('Update Post API');
});


app.delete('/api/posts/:postId', (req, res) => {

  res.send('Delete Post API');
});


app.post('/api/posts/:postId/comments', (req, res) => {

  res.send('Add Comment API');
});


app.put('/api/posts/:postId/comments/:commentId', (req, res) => {

  res.send('Update Comment API');
});


app.delete('/api/posts/:postId/comments/:commentId', (req, res) => {

  res.send('Delete Comment API');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});