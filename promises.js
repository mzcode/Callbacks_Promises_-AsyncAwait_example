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

// creatPost({ title: "post three", body: "this post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));


//Async / Awaite

// async function init() {
//   await creatPost({ title: "post three", body: "this post three" });

//   getPosts();
// }
// init()
//async / await with fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
fetchUsers();
//promise.all
// const promise1 = Promise.resolve("hello  world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "goodbay")
// );
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );
// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );