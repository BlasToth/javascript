let user = {
    name: "Pepito",
    age: 35,
    email: "pepitogrillo@gmail.com",
    location: "Meadows",
    articles: ["Why I need to fast?", "How to get up early?"],
    login: function() { // functions in objects are called METHODS
        console.log("The user is logged in");
    },
    logout: function() {
        console.log("The user logged out");
    },
    logArticles: function() {
        //console.log(this.articles);
        console.log('This user has written the following articles: ');
        this.articles.forEach(blog => {
            console.log(blog);
        })

    }
};

user.logArticles();

user.login();
//user.age = 30;

console.log(user.age);

console.log(user["email"]);

console.log(typeof user);

