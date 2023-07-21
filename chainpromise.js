const posts = [
  { title: "post_one", topic: "this post one" },
  { title: "post_two", topic: "this post two" },
];

function getPosts() {
  //return promise to prevent excu seond then until geposts finish
  return new Promise((resolve, error) => {
    setTimeout(() => {
      let allposts = "";
      posts.forEach((post, index) => {
        allposts += " " + post.title;
      });
      console.log(allposts);
      resolve("messenger");
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((resolove, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolove();
    }, 2000);
  });
}
function chainpromisetest() {}
createPost({ title: "post_three", topic: "this post three" })
  .then(getPosts)
  .then((msg) => console.log("msg from get poast after call = " + msg));
