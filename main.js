const date = new Date()


const renderCalendar = () => {
  // sets the first day of the month
  date.setDate(1);

  // selecting days container
  const monthDays = document.querySelector(".days");

  // sets the last day of the current month
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // calculates the last day of the previous month
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  // gets the first day of the month(0 for Sun, 1 for Mon)
  const firstDayIndex = date.getDay();

  // calculates the last day of the next month
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  // calculates how many days from the next month need to be displayed to fill the calendar grid
  const nextDays = 7 - lastDayIndex - 1;

  // Months Names array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  // to display the current month- updates the month heade
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  // to display the current date
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  // to stote all HTML days for the days of the month
  let days = "";

  // Previous month's dates -
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  // ============================================

  // Current month's dates
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  // ============================================


  // next month dates

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  // insert days into the calendar
  monthDays.innerHTML = days;

  // =================================================
}


// previous month button - this adds an event listener to the previous month button
document.querySelector(".prev").addEventListener("click", ()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
})


// next month button - this adds an event listener to the next month button
document.querySelector(".next").addEventListener("click", ()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
})


renderCalendar()







