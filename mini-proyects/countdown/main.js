const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const userDate = document.getElementById("user-date");
const labelDate = document.getElementById("label-date");
// H1 hook
const eventTitle = document.getElementById("event-title");
// h2 hook
const h2Text = document.getElementById("is-coming")

// set the min value in the calendar to tomorrow
let today = new Date();
const dd = today.getDate() + 1; // + 1 day = from tomorrow
const mm = today.getMonth() + 1; //January is 0!
const yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;

// today + 1 = tomorrow
userDate.setAttribute("min", today);

// User enters an event
document.getElementById("user-event").addEventListener("change", function () {
  const userEvent = this.value;
  eventTitle.textContent = userEvent;
});

document.getElementById("user-date").addEventListener("change", function () {
  const input = this.value;
  userDate.classList.add("hidden");
  labelDate.classList.add("hidden");
  
  h2Text.textContent = "is coming!";
  const untilDate = new Date(input);

  function countdown() {
    const currentDate = new Date();

    const totalSecondsLeft = (untilDate - currentDate) / 1000;

    const seconds = Math.floor(totalSecondsLeft) % 60;
    const minutes = Math.floor(totalSecondsLeft / 60) % 60;
    const hours = (Math.floor(totalSecondsLeft / 60 / 60) % 24) - 1;
    const days = Math.floor(totalSecondsLeft / 3600 / 24);

    daysEl.textContent = days;
    hoursEl.textContent = formatTime(hours);
    minutesEl.textContent = formatTime(minutes);
    secondsEl.textContent = formatTime(seconds);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  countdown();
  setInterval(countdown, 1000);
});
