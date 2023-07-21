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
function creatPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("error : somthing went wrong");
      }
    }, 2000);
  });
}

creatPost({ title: "post three", body: "this post three" })
  .then(getPosts)
  .catch((err) => console.log(err));
