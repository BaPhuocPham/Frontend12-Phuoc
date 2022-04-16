var a = document.getElementsByTagName("img")
for (let i = 0; i < a.length; i++)
{
  console.log(a[i])
  if(a[i].src.indexOf("index.html") != -1)
  {
    a[i].src = "./image/defaultImage.png"
  }
}