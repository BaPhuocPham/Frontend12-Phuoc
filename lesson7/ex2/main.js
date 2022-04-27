a = document.getElementsByTagName("p")
for(let i = 0; i < a.length; i++)
{
   a[i].onclick = function() {
    console.log(a[i].innerHTML)
   };
}

