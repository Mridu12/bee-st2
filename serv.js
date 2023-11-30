document.addEventListener('DOMContentLoaded', function () {
    
    axios.get('http://localhost:3000/api/posts')
      .then(response => {
        displayPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  
    function displayPosts(posts) {
      const postsContainer = document.getElementById('posts-container');
  
      posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <p>Author: ${post.author}</p>
          <button onclick="fetchComments('${post._id}')">Load Comments</button>
        `;
  
        postsContainer.appendChild(postDiv);
      });
    }
  
    function fetchComments(postId) {
      axios.get(`http://localhost:3000/api/posts/${postId}/comments`)
        .then(response => {
          displayComments(postId, response.data);
        })
        .catch(error => {
          console.error(`Error fetching comments for post ${postId}:`, error);
        });
    }
  
    function displayComments(postId, comments) {
      const postDiv = document.querySelector(`div[data-post-id="${postId}"]`);
      const commentsDiv = document.createElement('div');
      commentsDiv.innerHTML = '<h3>Comments:</h3>';
  
      comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `<p>${comment.text} - ${comment.author}</p>`;
        commentsDiv.appendChild(commentDiv);
      });
  
      postDiv.appendChild(commentsDiv);
    }
  });