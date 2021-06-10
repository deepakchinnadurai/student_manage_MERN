const axios = require("axios");

//This is for home page
exports.homeRoutes = (req, res) => {
            res.render('home');  
}


//This is for adding new user
exports.add_user = (req, res) =>{
    res.render('add_user');
}




//this is for displaying the list
exports.student = (req,res) =>{
    
    axios.get('http://localhost:3001/api/users')
    .then(function(response){
        res.render('student_list', { users : response.data });
    })
    .catch(err =>{
        res.send(err);
    })     
}

exports.updateuser = (req, res) =>{
    axios.get('http://localhost:3001/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send("sssss");
        })
}