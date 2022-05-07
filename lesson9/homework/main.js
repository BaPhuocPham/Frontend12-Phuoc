const element_solution = document.getElementsByClassName("solutionContainer")
const element_level = document.getElementById("level")
// console.log(level.value)
changeSolutionCount()
function changeSolutionCount()
{
  element_solution[0].innerHTML = ""
  let solutionCount = null
  if (element_level.value == 1)  solutionCount = 25
  else if (element_level.value == 2) solutionCount = 50
  for (let i = 1; i <= solutionCount; i++)
  { 
    let addDiv = document.createElement("div")
    addDiv.classList.add("solution")
    addDiv.innerHTML = i
    element_solution[0].append(addDiv)
  }
}
