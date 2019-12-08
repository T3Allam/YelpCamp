var express = require("express"),
      app = express(),
      bodyParser=require("body-parser"),
      mongoose=require("mongoose"),
      flash = require("connect-flash"),
      passport=require("passport"),
      LocalStrategy=require("passport-local"),
      methodOverride = require("method-override"),
      Campground=require("./models/campground"),
      Comment=require("./models/comment"),
      User = require("./models/user")
      // seedDB = require("./seeds")
      
require('dotenv').config()
const port = 3000

//requiring routes
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index")

// seedDB(); //seed the db
app.use(express.static(__dirname + "/public")) //safer way of doing it, make sure script lives in dirname
mongoose.connect("mongodb://localhost:27017/yelponly", { useNewUrlParser: true }); //connecting mongoose, also creating yelpcamp db
app.use(bodyParser.urlencoded({extended: true})); //just add this line 
app.set("view engine", "ejs")
app.use(methodOverride("_method"));
app.use(flash());
app.locals.moment = require('moment');


//Passport Configuration
app.use(require("express-session")({
   secret: "hello think",
   resave: false,
   saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
   res.locals.currentUser=req.user;
   res.locals.error=req.flash("error");
   res.locals.success=req.flash("success");
   next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

// app.listen(process.env.PORT, process.env.IP, function(){
//    console.log("The YelpCamp Server has started") 
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))