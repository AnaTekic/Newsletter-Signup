const express = require("express");
const bodyParser = require("body-parser")
const request = require("request");
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function (req, res){
 res.sendFile(__dirname +"/signup.html")
})

// when receiving POST request :
app.post("/", function (req, res){

app.use(bodyParser.json());

  let firstName = req.body.firstName;
  let lastName = req.body.firstName;
  let email = req.body.email;
  console.log(firstName);

const data = {
  members: [
    {
    email_address: email,
    status:"subscribed",
    merge_fields: {
      FNAME : firstName,
      LNAME : lastName
    },
  },
],

};
const jsonData = JSON.stringify(data);
const url = "https://us2.api.mailchimp.com/3.0/lists/32d34925a6/"
const options = {
  method :"POST",
  auth: "panda1:1f5c9fd1c4dbfe0bc7d91c111e429d58-us2"
}

const request = https.request(url, options, function(response){
  response.on("data", function(data){
    console.log(JSON.parse(data));
  })

})
request.write(jsonData);
request.end();
})
//listen at server 3000
app.listen(3000, function (req, res) {
  console.log("Server is running on port 3000");
})
// 1f5c9fd1c4dbfe0bc7d91c111e429d58-us2 mailchimp api key ;
// 32d34925a6 list id;
