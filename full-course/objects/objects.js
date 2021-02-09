// const blogs = [
//   { title: "Why I need to fast?", likes: 30 },
//   { title: "How to get up early?", likes: 50 },
// ];

// console.log(blogs);

let user = {
  name: "Pepito",
  age: 35,
  email: "pepitogrillo@gmail.com",
  location: "Meadows",
  articles: [
    { title: "Why I need to fast?", likes: 30 },
    { title: "How to get up early?", likes: 50 },
  ],
  login: function () {
    // functions in objects are called METHODS
    console.log("The user is logged in");
  },
  logout: function () {
    // logout() {}
    console.log("The user logged out");
  },
  logArticles: function () {
    // logArticles() {}
    //console.log(this.articles);
    console.log("This user has written the following articles: ");
    this.articles.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};

user.logArticles();

user.login();
//user.age = 30;

console.log(user.age);

console.log(user["email"]);

console.log(typeof user);
