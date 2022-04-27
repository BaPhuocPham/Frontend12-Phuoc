let a = document.getElementById("text") 
let array = ["React", "Jquery", "HTML", "CSS", "PHP"]
setInterval(function() {
  var number = 1 + Math.floor(Math.random() * array.length);
  a.innerHTML = array[number-1]
},
1000);