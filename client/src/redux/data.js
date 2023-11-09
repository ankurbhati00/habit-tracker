function getDates(start, end) {
  var arr = [];
  var dt = new Date(start);
  let day = 1;
  let weekdays = {};
  while (dt <= new Date(end)) {
    weekdays[String(dt).slice(0, 15)] = [];
    //set week start date
    if (day === 1) {
      weekdays.start = String(dt).slice(0, 15);
    }
    if (day === 7) {
      weekdays.end = String(dt).slice(0, 15);
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
export const dates = getDates(start, new Date(today.getFullYear() + 2, 0, 1));

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
    id: "1",
    name: "water",
    colour: "#988989",
    started: "mon Nov 06 2023",
    complete: true,
    status: "done",
  },
  {
    id: "2",
    name: "cycling",
    colour: "#678989",
    started: "mon Nov 07 2023",
    complete: false,
    status: "done",
  },
  {
    id: "3",
    name: "reading",
    colour: "#236789",
    started: "mon Nov 09 2023",
    complete: true,
    status: "note done",
  },
];
