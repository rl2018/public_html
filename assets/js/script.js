var span = document.getElementById('datetime');

function time() {
  var d = new Date();
  var date = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  var second = d.getSeconds();
  var minute = d.getMinutes();
  var hour = d.getHours();
  span.textContent = 
    (date) + "/" + (month+1)+"/"+(year)+ " " + ("0" + hour).substr(-2) + ":" + ("0" + minute).substr(-2) + ":" + ("0" + second).substr(-2);
}

setInterval(time, 1000);
