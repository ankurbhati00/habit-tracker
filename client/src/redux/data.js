function getDates(start, end) {
  var arr = [];
  var dt = new Date(start);
  let day=1;
  let weekdays=[];
  while (dt <= new Date(end)) {
    weekdays.push(String(dt).slice(0,15));
    if(day===7){
      arr.push(weekdays);
      weekdays=[];
      day=0;
    }
    day+=1;
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
}

var today = new Date();
const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (today.getDay() - 1));
var dates = getDates(start, new Date(today.getFullYear() + 2, 0, 1));
export default dates;