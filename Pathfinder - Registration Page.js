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

function test() {
  "use strict";
  let username = $("#usernameInput")[0].value;
  let password = $("#passwordInput")[0].value;
  let email = $("#emailInput")[0].value;
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
      let userId = summary.split(" ")[5];
      response.textContent = "Thank you for registering!  Your ID is "+userId+".";
      $("#regResponse")[0].appendChild(response);
      $.ajax({
        type: "PUT",
        url: "http://66.242.90.163:8017/api/user/",
        data: JSON.stringify(
          {
            "characterIds": null,
            "email": email,
            "id": userId,
            "name": username,
            "password": password
          }
        ),
        success: function(data){
          console.log(data);
        },
        contentType: "application/json"
      });
  },
  contentType: "application/json"
  });
}