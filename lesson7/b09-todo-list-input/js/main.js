let taskList  = []  
let contentArea = document.getElementById("area-list-task")
let localStorageData = localStorage.getItem("userTask")
let submitBtn = document.getElementById("submitBtn")
console.log(localStorageData)
if(localStorageData == null) taskList = []
else taskList = JSON.parse(localStorageData)
printTask()
function printTask()
{
  contentArea.innerHTML = ""
  for (i in taskList )
  {
    let id = i-1+2
    let addTr = document.createElement("tr")
    addTr.innerHTML = `
      <tr>
      <td>${id}</th>
      <td>${taskList[i].name}</td>
      <td><span class="badge bg-danger">${taskList[i].level}</span></td>
      <td>
          <button id="${id}" onclick="editTask(${id})" class="btn btn-warning">Edit</button>
          <button onclick="deleteTask(${i})" class="btn btn-danger">Delete</button>
      </td>
      </tr>
    `
    contentArea.append(addTr)
  }
}
function getTask()
{
  contentArea.innerHTML = ""
  let taskName = document.getElementById("input-name").value
  if (taskName.length == 0) 
  {
    alert("Please enter the task")
    printTask()
  }
  else 
  {
    let b = document.getElementById("input-level").value
    let level = null
    if (b == 0) level = "Small"
    else if (b == 1) level = "Medium"
    else if (b == 2) level = "High"
    let taskElement = {
      name : taskName,       
      level : level,
    }
    let taskId = submitBtn.getAttribute("idOfElm")
    if (taskId) 
    {
      taskList[taskId-1] = taskElement
      submitBtn.removeAttribute("idOfElm")
    }
    else taskList.push(taskElement)
    localStorage.setItem('userTask', JSON.stringify(taskList))
    printTask()
    document.getElementById("input-name").value = ""
  }
}
function deleteTask(index)
{
  taskList.splice(index, 1)
  localStorage.setItem('userTask', JSON.stringify(taskList))
  printTask()
}
function editTask(id)
{
  document.getElementById("input-name").value = taskList[id-1].name
  submitBtn.setAttribute('idOfElm', id)
}