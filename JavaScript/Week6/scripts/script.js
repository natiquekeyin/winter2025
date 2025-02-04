// On Friday, we will have a MAJOR review session. Please come with your specific questions/problems (in whatever topic) by Wednesday. So that, the session can be planned accordingly.

window.addEventListener("DOMContentLoaded", function () {
  let posts = [
    { title: "Post1", author: "Author1", body: "This is post 1 body" },
    { title: "Post2", author: "Author2", body: "This is post 2 body" },
    { title: "Post3", author: "Author3", body: "This is post 3 body" },
  ];

  function createPost(post) {
    setTimeout(function () {
      posts.push(post);
    }, 3000);
  }

  function getPosts() {
    setTimeout(function () {
      let output = "";
      posts.forEach(function (post) {
        output += `Title:${post.title} <br/> Author:${post.author} <br/> Body:${post.body}<br/> ---------<br/>`;
      });
      // embed it in output area of html
      document.querySelector("#output").innerHTML = output;
    }, 1000);
  }

  createPost({
    title: "Post4",
    author: "Author4",
    body: "This is post 4 body",
  });
  getPosts();
});

// The getPosts() runs in 1 second and creatPost() is taking 3 seconds, therfore we only see till Post3 in our output...
// To solve this issue, we are learning "Asynchronous programming"
