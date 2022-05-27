$(document).ready(function () {
   
  $("button").click(function (e) { 
    e.preventDefault();
    $(".item").load("load.html #"+$(this).data("name"))
  });
});
