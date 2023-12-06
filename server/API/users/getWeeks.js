function getWeeks(start, end) {
  var arr = [];
  var dt = new Date(start);
  let day = 1;
  let weekdays = {};
  let id = 0;
  while (dt <= new Date(end)) {
    weekdays[String(dt).slice(0, 15)] = [];
    //set week start date
    if (day === 1) {
      weekdays.start = String(dt).slice(0, 15);
    }
    if (day === 7) {
      weekdays.end = String(dt).slice(0, 15);
      weekdays.id = id++;
      arr.push(weekdays);
      weekdays = {};
      day = 0;
    }
    day += 1;
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
}

var today = new Date();
const start = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - (today.getDay() - 1)
);
export const weeks = getWeeks(
  start,
  new Date(today.getFullYear() + 1, today.getMonth() - 1, 1)
);
