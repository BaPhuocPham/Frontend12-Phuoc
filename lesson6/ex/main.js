const n = document.getElementsByTagName("div")
var maxHeight = 0
for (let i = 0; i < n.length; i++)
{
  let heightNow = n[i].offsetHeight
  console.log(heightNow)
  maxHeight = (heightNow >= maxHeight) ? heightNow : maxHeight 
  // maxHeight = (heightNow >= maxHeight) && heightNow nếu đúng thì bằng heightNow, k có else 
}
for (let i = 0; i < n.length; i++)
{
  n[i].style.height = maxHeight + "px"
}
console.log(maxHeight)
let a = document.write
