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

function printTask()
{
  getInput.value = ""
  contentArea.innerHTML = ""
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
    contentArea.append(addTr)
    setBackgroundColor(taskList[i])
  }
}

const uid = function()        //Create unique id
{
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

function getTask()
{
  contentArea.innerHTML = ""
  let taskName = getInput.value
  if (taskName.length == 0) 
  {
    alert("Please enter the task")
    printTask()
  }
  else 
  {
    let level = document.getElementById("input-level").value
    let taskElement = 
    {
      name : taskName,       
      level : level,
      id : uid()
    }
    let taskId = submitBtn.getAttribute("idOfElm")
    if (taskId) 
    {
      for (i in taskList)
      {
        if(taskList[i].id == taskId)
        {
          taskList[i] = taskElement
          submitBtn.removeAttribute("idOfElm")
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
  for (i in taskList)
  {
    if(taskList[i].id == id.id) 
    {
      getInput.value = taskList[i].name
      submitBtn.setAttribute('idOfElm', id.id)
    }
  }
}