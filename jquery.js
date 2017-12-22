var thermostat = new Thermostat

$(document).ready(function(){
  $("#plus-button").click(function(){
    // console.log(thermostat.temeprature)
    thermostat.increase()
    $("body").css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/BlueberryMuffin.jpg/1200px-BlueberryMuffin.jpg)")
  });
});
