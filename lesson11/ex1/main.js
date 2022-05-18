$(document).ready(function () {
  $(".section").click(function (e) { 
    e.preventDefault();
    console.log(this)
  });
});