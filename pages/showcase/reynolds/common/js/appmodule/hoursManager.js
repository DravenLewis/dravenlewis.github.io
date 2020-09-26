function getHoursCount(start = "0:00", stop = "0:00") {
  var startTime = start.split(":");
  var stopTime = stop.split(":");
  if (start == stop) return 24;
  var startDate = new Date();
  var stopDate = new Date();
  startDate.setHours(parseInt(startTime[0]));
  startDate.setMinutes(parseInt(startTime[1]));
  stopDate.setHours(parseInt(stopTime[0]));
  stopDate.setMinutes(parseInt(stopTime[1]));
  
  var diff =(stopDate.getTime() - startDate.getTime()) / 1000;
  diff /= 60;
  var hours = Math.floor(Math.abs(Math.round(diff)) / 60);
  var minutes = (Math.abs(Math.round(diff)) % 60);

  return {hours: hours, minutes: minutes}
}

function calculatePay(hours = {hours : "", minutes: ""}, rate){
	var hourlyPay = hours.hours * rate;
  var minutePay = (hours.minutes / 60) * rate;
  return Math.floor((hourlyPay + minutePay) * 100) / 100;
}
