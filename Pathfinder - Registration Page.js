// $.ajax ({
//     type: "GET",
//     url: "http://66.242.90.163:8017/api/user/",
//     success: function(data) {
//         console.log(data[0]["id"]);
//     },
//     error: function() {
//         console.log("Error!");
//     }
// });

// $.ajax({
//     type: "POST",
//     url: "http://66.242.90.163:8017/api/register/",
//     data: {
//     "email": "edward.reeseg@gmail.com",
//     "password": "Hebiojoumaru6"
//   },
//     success: function(data) {
//   console.log(data);
//   },
//   contentType: "application/json"
//   });

"use strict";

function searchButtonClick() {
    characterList.innerHTML = "";
    let result = document.createElement("li");
    result.textContent = "success";
    $("#characterList")[0].appendChild(result);
}