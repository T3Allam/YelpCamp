var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")
var User = require("./models/user")

var data = [
    {
        name: "Pyramids", 
        image: "https://images.unsplash.com/photo-1525604529863-915380184a43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=69ec6e85b0310a38295e800c005f3ec8&auto=format&fit=crop&w=1050&q=80",
        description: "The Giza pyramid complex is an archaeological site on the Giza Plateau, on the outskirts of Cairo, Egypt. It includes the three Great Pyramids (Khufu/Cheops, Khafre/Chephren and Menkaure), the Great Sphinx, several cemeteries, a workers' village and an industrial complex. It is located in the Western Desert, approximately 9 km (5 mi) west of the Nile river at the old town of Giza, and about 13 km (8 mi) southwest of Cairo city centre. [Source: wikipedia.org]"
    },
    {   
        name: "Sphinx", 
        image: "https://farm9.staticflickr.com/8386/8590203473_8d996fe4be.jpg",
        description: "The Great Sphinx of Giza commonly referred to as the Sphinx of Giza or just the Sphinx, is a limestone statue of a reclining sphinx, a mythical creature with the body of a lion and the head of a human.Facing directly from West to East, it stands on the Giza Plateau on the west bank of the Nile in Giza, Egypt. The face of the Sphinx is generally believed to represent the Pharaoh Khafre. [Source: wikipedia.org]"
    },
    {
        name: "Egypt Map", 
        image: "https://images.unsplash.com/photo-1527488418221-4b217204eab2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a243fffa0bc6f354826f8aad60351afc&auto=format&fit=crop&w=967&q=80",
        description: "Egypt"
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
       if (err){
           console.log(err)
       } else {
        console.log("removed campgrounds!");
       }
    });
    User.remove({}, function (err){
       if (err){
           console.log(err)
       } else {
        console.log("removed users!");
       }
    });
    Comment.remove({}, function(err){
       if (err){
           console.log(err)
       } else {
        console.log("removed comments!");
       }
    });
}

module.exports = seedDB;