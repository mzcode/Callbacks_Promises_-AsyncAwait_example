const posts = [
  { title: "post one", boady: "this is post one" },
  { title: "post two", boady: "this is post two" },
];
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
function creatPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

getPosts();
creatPost({ title: "post three", body: "this post three" }, getPosts);
