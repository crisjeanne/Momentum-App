export function clockRender() {
  localStorage.setItem("is24", false);
  let isClock24 = localStorage.getItem("is24");

  function getTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? "pm" : "am";
    let timeString;

    if (isClock24 === true) {
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return (timeString = hours + ":" + minutes + ":" + seconds);
    } else {
      hours = hours % 12;
      hours = hours ? hours : 12;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return (timeString = hours + ":" + minutes + " " + amPm);
    }
  }

  const clock = document.querySelector(".clock");

  function clockFormat() {
    if (isClock24 === true) {
      isClock24 = false;
      localStorage.setItem("is24", isClock24);
    } else {
      isClock24 = true;
      localStorage.setItem("is24", isClock24);
    }
  }

  clock.addEventListener("click", clockFormat);

  function updateClock() {
    clock.innerHTML = getTime();
  }

  updateClock()

  const oneSecond = 1000;

  setInterval(updateClock, oneSecond);

  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateInWords = today.toLocaleDateString("en-US", options);
  document.querySelector(".date").textContent = dateInWords;
}
