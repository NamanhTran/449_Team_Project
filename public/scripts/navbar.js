const SERVER_URL = "http://localhost:3000";

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

const redirectLogin = function () {
  window.location.href = SERVER_URL + "/pages/login.html";
};

const redirectSignUp = function () {
  window.location.href = SERVER_URL + "/pages/signup.html";
};

const redirectSearch = function () {
  window.location.href = SERVER_URL + "/pages/search.html";
};