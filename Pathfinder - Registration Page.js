// $.ajax({
//   type: "POST",
//   url: "http://66.242.90.163:8017/api/register/",
//   data: JSON.stringify({
//   "email": "somethingoranother@gmail.com",
//   "password": "testymctesttest"
// }),
//   success: function(data) {
// console.log(data);
// },
//   error: console.log("error"),
// contentType: "application/json"
// });

let username;
let password;
let email;
let userId;

function test() {
  "use strict";
  username = $("#usernameInput")[0].value;
  password = $("#passwordInput")[0].value;
  email = $("#emailInput")[0].value;
  $.ajax({
    type: "POST",
    url: "http://66.242.90.163:8017/api/register/",
    data: JSON.stringify(
      {
    "email": email,
    "password": password
  }
),
    success: function(data) {
      let summary = data.summary;
      $("#regResponse")[0].innerHTML = "";
      let response = document.createElement("p");
      userId = summary.split(" ")[5];
      response.textContent = "Thank you for registering!  Your ID is "+userId+".";
      $("#regResponse")[0].appendChild(response);  },
  contentType: "application/json"
  });
};

function putRequest () {
  let putURL = "http://66.242.90.163:8017/api/user/?";
  $.ajax({
    type: "PUT",
    url: putURL,
    success: function(data){
      console.log(data);
    },
    error: function(data) {
      console.log(email, username, password, userId);
      console.log(data);
    },
    contentType: "application/json"
  });

};
