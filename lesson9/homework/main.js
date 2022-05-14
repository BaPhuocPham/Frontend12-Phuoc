const element_solution = document.getElementsByClassName("solutionContainer")[0]
const element_level = document.getElementById("level")
const element_survive = document.getElementsByClassName("surviveOutline")[0]
const element_userChoice = document.getElementsByClassName("choiceHistory")[0]
const element_message = document.getElementsByClassName("message")[0]
const element_music = document.getElementById("myMusic")
const element_music_play = document.getElementById("play")
const element_music_mute = document.getElementById("mute")

let secretNumber = null
let fail = 0
element_message.innerHTML = ""

element_music.play()
changeSolutionCount()
$(document).ready(function () {
    $( document ).tooltip();
});

function play() 
{
  element_music_mute.style = "display: none"
  element_music_play.style = "display: block"
  element_music.play()
}
function muted() 
{
  element_music_mute.style = "display: block"
  element_music_play.style = "display: none"
  element_music.pause()
}

function findLastRow()
{
  let a = secretNumber
  for(let i = 0; i<10; i++)
  {
    if(a%10 == 0) return a
    else a++
  }
}
function recommend()
{
  let a = findLastRow()
  for(let i = a; i > a-10; i--)
  {
    element_solution.children[i-1].style = "background-color: yellow;"
  }
}
function showMessage(number, x)
{
  let addP = document.createElement("p")
  if(x == 1)
  {
    addP.innerHTML = 
    `<span class="theResult">${secretNumber}</span> is the secret number</p>`
  }
  else if(x == 2)
  {
    if(number < secretNumber)
    {
      addP.innerHTML = 
      `The number is <span>bigger</span> than <span class="theGuess">${number}</span>`
    }
    else if(number > secretNumber)
    {
      addP.innerHTML = 
      `The number is <span>smaller</span> than <span class="theGuess">${number}</span>`
    }
  }
  element_message.append(addP)
}
function showUserChoice(number)
{
  element_userChoice.children[fail].innerHTML = number
}
function createSecretNumber(solutionCount)
{
  secretNumber = Math.floor((Math.random() * solutionCount) + 1)
  console.log(secretNumber)
}
function showAlert(x)
{
  if(x == 1) alert("Correct")
  else if(x == 2) alert("You lose! let's try again!")
  location.reload()
}
function verifyNumber(number)
{
  if(number == secretNumber) 
  {
    console.log("Correct")
    showMessage(number, 1)
    setTimeout(() => {showAlert(1)}, "100")
  }
  else
  {
    console.log("Incorrect")
    element_survive.children[fail].style = "color: rgba(37, 36, 36, 0.295);"
    showUserChoice(number)
    showMessage(number, 2)
    fail++
    if(fail == 3)
    {
      showMessage(number, 1)
      setTimeout(() => {showAlert(2)}, "100")
    }
  }
}
function changeSolutionCount()
{
  element_solution.innerHTML = ""
  let solutionCount = null
  if (element_level.value == 1)  solutionCount = 25
  else if (element_level.value == 2) solutionCount = 50
  createSecretNumber(solutionCount)
  for (let i = 1; i <= solutionCount; i++)
  { 
    let addDiv = document.createElement("div")
    addDiv.classList.add("solution")
    addDiv.innerHTML = i
    element_solution.append(addDiv)
  }
  $(document).ready(function () {
    $(".solution").click(function (e) { 
      e.preventDefault();
      verifyNumber(this.innerHTML)
      this.style = "color: rgba(37, 36, 36, 0.295);"
      $(this).unbind('click');
    });
  });
}
