function getDates(start, end) {
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
export const dates = getDates(
  start,
  new Date(today.getFullYear() + 1, today.getMonth()-1, 1)
);

//random color code function
function randomColor() {
  // Generate a random number between 0 and 16777215 (the maximum value of a hex color code).
  const randomNumber = Math.floor(Math.random() * 16777215);

  // Convert the random number to a hexadecimal string.
  const hexColorCode = randomNumber.toString(16);

  // Pad the hexadecimal string with leading zeros if necessary.
  const paddedHexColorCode = hexColorCode.padStart(6, "0");

  // Return the padded hexadecimal color code.
  return `#${paddedHexColorCode}`;
}

//habits
export const habits = [
  {
    id: "aijijfewjf",
    name: "water",
    colour: "#988989",
    started: "mon Nov 06 2023",
    completed: true,
    type: "to-do",
  },
  {
    id: "ajiejjriejfjf",
    name: "cycling",
    colour: "#556656",
    started: "mon Nov 29 2023",
    completed: false,
    type: "to-do",
  },
  {
    id: "hieeueyruy",
    name: "reading",
    colour: "#236789",
    started: "mon Nov 09 2023",
    completed: true,
    type: "not-to-do",
  },
];
