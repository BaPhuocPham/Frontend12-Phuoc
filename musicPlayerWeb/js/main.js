$(document).ready(function () {
  $.get("https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR0HkDrTsVyqV6WRZFE7SDwmcU5WHafNStsdAupjHLdFvuPYTvG1khaHjQA", 
    function (data) {
      console.log(data)
    },
    "JSON"
  );
});