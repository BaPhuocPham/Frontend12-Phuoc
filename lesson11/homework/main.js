const element_content = document.getElementsByClassName("content")[0]
const element_darkModeBackgr = document.getElementsByClassName("darkMode")[0]
const element_darkMode = document.getElementById("darkModeCheck")
const element_body = document.getElementsByTagName("body")[0]
const element_colorPicker = document.getElementById("colorPicker")
const element_colorIcon = document.getElementsByClassName("colorIcon")[0]
const element_copy = document.getElementsByClassName("copy")[0]
const element_zoom = document.getElementsByClassName("zoom")[0]
let zoomCount = 0
$( function() {
  $( "document" ).tooltip();
} );
getData()

function getData()
{
  if(window.localStorage.getItem("zoomCount") != undefined)
  {
    zoomCount = localStorage.getItem("zoomCount") - 1
    checkZoom()
  } 
  if(window.localStorage.getItem("darkMode") != undefined)
  {
    let darkMode = window.localStorage.getItem("darkMode")
    if(darkMode == "true") element_darkMode.checked = true
    else element_darkMode.checked = false
    checkDarkMode()
  } 
  if(window.localStorage.getItem("color") != undefined)
  {
    let color = window.localStorage.getItem("color")
    element_colorPicker.value = color
  } 
}
function saveLocal(key, value)
{
  window.localStorage.setItem(key, value);
}

  //Get Value
document.querySelectorAll('input[type=color]').forEach(function (picker) {
  // //Target Point
  // var targetLabel = document.querySelector('label[for="' + picker.id + '"]'),
  //     codeArea = document.createElement('span');

  // codeArea.innerHTML = picker.value;
  // targetLabel.appendChild(codeArea);
  element_content.style = `color: ${picker.value}`
  element_colorIcon.style = `color: ${picker.value}`

  //Now AddEventListener
  picker.addEventListener('change', function () {
      element_content.style = `color: ${picker.value}`
      element_colorIcon.style.color = picker.value
      saveLocal("color", picker.value)
    // codeArea.innerHTML = picker.value;
      // targetLabel.appendChild(codeArea);
  });
});

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
    alert("Copying successful!")
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}
function checkCopy()
{
  copyTextToClipboard(element_content.children[1].innerHTML)
}
function checkZoom()
{
  if(zoomCount == 3) zoomCount = 0
  else zoomCount = parseInt(zoomCount + 1)
  switch(zoomCount)
  {
      case 0: 
        element_content.children[0].style = "font-size: 24px;"
        element_content.children[1].style = "font-size: 16px;"
        saveLocal("zoomCount", zoomCount)
        break
      case 1: 
        element_content.children[0].style = "font-size: 26px;"
        element_content.children[1].style = "font-size: 18px;"
        saveLocal("zoomCount", zoomCount)
        break
      case 2: 
        element_content.children[0].style = "font-size: 28px;"
        element_content.children[1].style = "font-size: 20px;"
        saveLocal("zoomCount", zoomCount)
        break
      case 3: 
        element_content.children[0].style = "font-size: 30px;"
        element_content.children[1].style = "font-size: 22px;"
        saveLocal("zoomCount", zoomCount)
        break
  }
}
function checkDarkMode()
{
  if(element_darkMode.checked == true)
  {
    element_darkModeBackgr.style = "background-color: #323A4B;"
    element_darkModeBackgr.children[0].style = "color: yellow;"
    element_body.style = "background-color: #323A4B;"
    element_content.style = "color: white;"
    element_colorIcon.style.color = "white"
    element_colorPicker.value = "#FFFFFF"
    element_colorPicker.parentElement.parentElement.style = "background-color: #323A4B;"
    element_zoom.style = "color: white;"
    element_copy.style = "color: white;"
    saveLocal("darkMode", true)
    saveLocal("color", "white")
  }
  else
  {
    element_darkModeBackgr.style = "background-color: white;"
    element_darkModeBackgr.children[0].style = "color: #B3B3B3;"
    element_body.style = "background-color: white;"
    element_content.style = "color: black;"
    element_colorIcon.style.color = "black"
    element_colorPicker.value = "#000000"
    element_colorPicker.parentElement.parentElement.style = "background-color: #FFFFFF;"
    element_zoom.style = "color: black;"
    element_copy.style = "color: black;"
    saveLocal("color", "black")
    saveLocal("darkMode", false)
  }
}
