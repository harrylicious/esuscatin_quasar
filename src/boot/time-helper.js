const timeDifference = function() {
  let date1 = new Date()
  let date2 = new Date()

  let difference = date1.getTime() - date2.getTime();

  let daysDifference = Math.floor(difference/1000/60/60/24);
  difference -= daysDifference*1000*60*60*24

  let hoursDifference = Math.floor(difference/1000/60/60);
  difference -= hoursDifference*1000*60*60

  let minutesDifference = Math.floor(difference/1000/60);
  difference -= minutesDifference*1000*60

  let secondsDifference = Math.floor(difference/1000);

  let res =
    daysDifference + ' day/s ' +
    hoursDifference + ' hour/s ' +
    minutesDifference + ' minute/s ' +
    secondsDifference + ' second/s '

  return res;
}

export { timeDifference };
