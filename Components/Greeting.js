
export function greetingRender() {
  const userName = localStorage.getItem("userName");
  const greeting = document.querySelector(".greeting");
  const greetPhrase = document.createElement("p");

  function changeGreeting() {
    const current = new Date();
    const dayPhase = current.getHours();
    const num = parseInt(dayPhase);
    let greet;

    if (num >= 6) {
      greet = `Good Morning`;
    }

    if (num == 12) {
      greet = `Good Noon`;
    }

    if (num > 12) {
      greet = `Good Afternoon`;
    }

    if (num >= 18) {
      greet = `Good Evening`;
    }

    if (num == 0) {
      greet = `A pleasant Midnight`;
    }

    greetPhrase.textContent = `${greet}`;
  }

  setInterval(changeGreeting, 1);

  greeting.append(greetPhrase);

  //Updatable

  const userNameElement = document.createElement("h3");
  userNameElement.textContent = `${userName}.`;
  userNameElement.style.display = "block";

  const editName = document.createElement("input");
  editName.type = "text";
  editName.value = userName;
  editName.style.textAlign = "center";
  greeting.append(editName);

  function setName() {
    userNameElement.style.display = "none";
    editName.style.display = "block";
  }

  if (userName) {
    editName.style.display = "none";
  }

  
  userNameElement.addEventListener("click", setName);

  
  editName.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      userNameElement.textContent = editName.value;
      localStorage.setItem("userName", editName.value);
      editName.style.display = "none";
      userNameElement.style.display = "block";
    }
  });

  greeting.append(userNameElement);

  return setName
}


