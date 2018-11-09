module.exports.year = () => {
  var date = new Date();
  return date.getFullYear();
}


module.exports.month = () => {
  var date = new Date();
  return date.getMonth()+1;
}


module.exports.day = () => {
  var date = new Date();
  return date.getDate();
}

module.exports.complete = () => {
  var date = Date(Date.now());
  return date;
}

module.exports.Day = () => {
  var date = Date(Date.now());
  return date.toString().slice(0, 3);
}


module.exports.Month = () => {
  var date = Date(Date.now());
  return date.toString().slice(4, 7);
}


module.exports.time_24hr = () => {
  var date = Date(Date.now());
  return date.toString().slice(16, 25);
}


module.exports.time_12hr = () => {
  var date = Date(Date.now());
  var t_24hr = date.toString().slice(16, 18);
  var rest = date.toString().slice(18, 25);
  var t_12hr = parseInt(t_24hr);
  var flag = 0;
  if( t_12hr > 12) {
    t_12hr -= 12;
    flag = 1;
  }
  t_12hr = t_12hr.toString();
  time = t_12hr + rest;
  if(flag == 1)
    time += 'pm';
  else
    time += 'am';
  return time;
}


module.exports.timezone = () => {
  var date = Date(Date.now());
  return date.toString().slice(25, 34) + date.toString().slice(35, 54);
}


module.exports.country = () => {
  var date = Date(Date.now());
  return date.toString().slice(35, 54).split(" ")[0];
}
