function getFromLocal()
{
  if(localStorageData == null) taskList = []
  else taskList = JSON.parse(localStorageData)
}

function saveToLocal()
{
  localStorage.setItem('userTask', JSON.stringify(taskList))
}

function setBackgroundColor(elm)
{
  let getTdTag = document.getElementById(elm.id).parentElement.parentElement
  let backgrColor = null
  if (elm.level == 'Small') backgrColor = '#262626'
  else if (elm.level == 'Medium') backgrColor ='#39c0ed'
  else if (elm.level == 'High') backgrColor = '#f93154'
  getTdTag.getElementsByClassName('backgrColor')[0].style = `background-color: ${backgrColor} !important`
}

function openInputPanel()
{
  if(element_inputPanel.style.display == "none") element_inputPanel.style = "display: flex !important"
  else element_inputPanel.style = "display: none !important"
}

function printTask()
{
  element_getInput.value = ""
  element_contentArea.innerHTML = ""
  for (i in taskList)
  {
    let index = Number(i)+1
    let addTr = document.createElement("tr")
    addTr.innerHTML = 
    `
      <tr>
      <td>${index}</th>
      <td>${taskList[i].name}</td>
      <td><span class="badge bg-danger backgrColor">${taskList[i].level}</span></td>
      <td>
          <button id="${taskList[i].id}" onclick="editTask(${taskList[i].id})" class="btn btn-warning">Edit</button>
          <button onclick="deleteTask(${taskList[i].id})" class="btn btn-danger">Delete</button>
      </td>
      </tr>
    `
    element_contentArea.append(addTr)
    setBackgroundColor(taskList[i])
  }
}

const uid = function()        //Create unique id
{
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

function getTask()
{
  element_contentArea.innerHTML = ""
  let taskName = element_getInput.value
  if (taskName.length == 0) 
  {
    alert("Please enter the task")
    printTask()
  }
  else 
  {
    let taskElement = 
    {
      name : taskName,       
      level : element_level.value,
      id : uid()
    }
    let taskId = element_submitBtn.getAttribute("idOfElm")
    if (taskId) 
    {
      for (i in taskList)
      {
        if(taskList[i].id == taskId)
        {
          taskList[i] = taskElement
          element_submitBtn.removeAttribute("idOfElm")
        }
      }
    }
    else taskList.push(taskElement)
    saveToLocal()
    printTask()
  }
}

function deleteTask(id)
{ 
  // console.log(id) ???
  for (i in taskList)
  {
    if(taskList[i].id == id.id)  taskList.splice(i, 1)
  }
  saveToLocal()
  printTask()
}

function editTask(id)
{
  element_inputPanel.style = "display: flex !important" //open input panel
  for (i in taskList)
  {
    if(taskList[i].id == id.id) 
    {
      element_getInput.value = taskList[i].name
      element_level.value = taskList[i].level
      element_submitBtn.setAttribute('idOfElm', id.id)
    }
  }
}