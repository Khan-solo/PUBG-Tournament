var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");


mongoose.connect("mongodb://localhost:27017/regal_gaming", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Schema Setup
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    password: String,
    userName: String,
    ign: String
});

var User = mongoose.model("User", userSchema);

// User.create({
//     name:"Mursil Khan",
//     email:"mursilkhan30@gmail.com",
//     number:"8800719419"
// }, function(err, user){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("New user added");
//         console.log(user);
//     }
// })



app.get("/", function(req, res) {
    res.render("index");
});


app.get("/sign-in", function(req, res) {
    res.render("sign-in");
});

app.get("/sign-up", function(req, res) {
    res.render("sign-up");
});

app.post("/sign-up", function(req,res){
    var name = req.body.name;
    var userName = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var number = req.body.number;
    
    //creating an object to store the data of a user
    var newUser = {name: name, userName: userName, email: email, password: password, number: number};
    
    //create a new user and save to databse
    User.create(newUser, function(err, newlyCreated){
        if(err){
            console.log(err);
        }
        else{
            console.log("New User Created");
            console.log(newUser);
            
            //redirect back to home page.
            res.redirect("/");
        }
    });
    
    
    
    
});












app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The Regal Gaming server has started!")
});