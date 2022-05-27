const url = "http://apiforlearning.zendvn.com/api/get-gold"
$(document).ready(function () {
  $.get(url, 
  function (data) {
    console.log(data)
    $(".tableContent").text("")
    for(let i=0; i< data.length; i++ )
    {
      let addTr = document.createElement("tr")
      addTr.innerHTML = 
      `
        <td>${data[i].type}</td>
        <td>${data[i].buy}</td>
        <td>${data[i].sell}</td>
      `
      $(".tableContent").append(addTr);
    }
    
  },
  "JSON",
);
});
