export function questRender(){
    const quest = document.querySelector(".main");
const questHeader = document.querySelector("#quest-header");
const inputQuest = document.querySelector("#quest-input");
inputQuest.style.textAlign = "center";
const questNameElement = document.createElement("h4");

function showQuest() {
  if (inputQuest.value !== "") {
    questNameElement.textContent = inputQuest.value;
    localStorage.setItem("questName", inputQuest.value);
    inputQuest.value = "";
    console.log(questNameElement.textContent);
    quest.append(questNameElement);
    questHeader.style.display = "none";
    inputQuest.style.display = "none";
    questNameElement.style.display = "block";
  } else if (inputQuest.value == "" || !questName) {
    questNameElement.textContent = "No Main Quest For Today";
    localStorage.setItem("questName", questNameElement.textContent);
    quest.append(questNameElement);
    questHeader.style.display = "none";
    inputQuest.style.display = "none";
    questNameElement.style.display = "block";
  }
}

inputQuest.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    showQuest();
  }
});

const questName = localStorage.getItem("questName");

if (questName) {
  questNameElement.textContent = questName;
  quest.append(questNameElement);
  questHeader.style.display = "none";
  inputQuest.style.display = "none";
}

function reOpen() {
  console.log("Clicked");
  inputQuest.style.display = "block";
  inputQuest.value = questNameElement.textContent;
  questNameElement.style.display = "none";
}

questNameElement.addEventListener("click",reOpen);

let timeCheck = new Date();
const hourCheck = timeCheck.getHours();
if (hourCheck == "00") {
  localStorage.removeItem("questName");
  showQuest()
}
}