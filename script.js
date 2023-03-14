
//BG image, fetch API or upload Assets? Hmm


//Greeting page 
//Accept input as name 
// Display greeting + name and remove 'input' and 'p' from display


//Fetch Weather API
function fetchWeather() {
  const api = 'd5dfc41a8e4641aaf539e5ec13113706'
  const city = 'Manila,PH'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
  
  fetch(url)
    .then(response => response.json())
    .then((data) => renderWeather(data))
}
fetchWeather()

//Render Weather
function renderWeather(weather) {
  const weatherElement = document.querySelector('.weather-container')

  const city = document.createElement('h2')
  city.textContent = weather.name
  weatherElement.append(city)

  const description = document.createElement('p')
  description.textContent = weather.weather[0].description
  weatherElement.append(description)

const temperature = document.createElement('p')
temperature.textContent = `${weather.main.temp} °C`

weatherElement.append(temperature)


}


//Render Date and Time

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

const timeString = `${hours}:${minutes}:${seconds}`;
document.querySelector('.clock').textContent = timeString;

function updateTime() {
  const time = new Date();
  const hoursUpdate = time.getHours();
  const minutesUpdate = time.getMinutes();
  const secondsUpdate = time.getSeconds();

  const timeString = `${hoursUpdate}:${minutesUpdate}:${secondsUpdate}`;
  document.querySelector('.clock').textContent = timeString;
}

setInterval(updateTime, 1000);



const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const dateInWords = today.toLocaleDateString('en-US', options);
document.querySelector('.date').textContent = dateInWords



const quotes = [
  {
    quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
    value: "Perseverance"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
    value: "Courage"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
    value: "Determination"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    value: "Hope"
  },
  {
    quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
    value: "Self-Belief"
  },
  {
    quote: "Fall seven times, stand up eight.",
    author: "Japanese Proverb",
    value: "Resilience"
  },
  {
    quote: "Perseverance is failing 19 times and succeeding the 20th.",
    author: "Julie Andrews",
    value: "Perseverance"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    value: "Belief"
  },
  {
    quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean",
    value: "Adaptability"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    value: "Patience"
  },
  {
    quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    author: "Steve Jobs",
    value: "Passion"
  },
  {
    quote: "If you can't fly, then run, if you can't run, then walk, if you can't walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
    value: "Perseverance"
  },
  {
    quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    author: "Winston S. Churchill",
    value: "Optimism"
  },
  {
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
    value: "Happiness"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    value: "Perseverance"
  },
  {
    quote: "Believe you can and you're halfway there.", 
    author: "Theodore Roosevelt", 
    value: "Perseverance"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.", 
    author: "Confucius", 
    value: "Determination"
  },
  {
    quote: "Our greatest glory is not in never falling, but in rising every time we fall.", 
    author: "Confucius", 
    value: "Resilience"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
    author: "Winston Churchill", 
    value: "Courage"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.", 
    author: "Thomas Edison", 
    value: "Perseverance"
  },
  {
    quote: "Keep your face always toward the sunshine - and shadows will fall behind you.", 
    author: "Walt Whitman", 
    value: "Optimism"
  },
  {
    quote: "When you feel like giving up, remember why you held on for so long in the first place.", 
    author: "Unknown", 
    value: "Motivation"
  },
  {
    quote: "Never give up on something that you can't go a day without thinking about.", 
    author: "Winston Churchill", 
    value: "Dedication"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.", 
    author: "Franklin D. Roosevelt", 
    value: "Belief"
  },
  {
    quote: "Perseverance is failing 19 times and succeeding the 20th.", 
    author: "Julie Andrews", 
    value: "Perseverance"
  },
  {
    quote: "The only way to do great work is to love what you do.", 
    author: "Steve Jobs", 
    value: "Passion"
  },
  {
    quote: "You just can't beat the person who never gives up.", 
    author: "Babe Ruth", 
    value: "Determination"
  },
  {
    quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", 
    author: "Brian Tracy", 
    value: "Self-belief"
  },
  {
    quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", 
    author: "Christian D. Larson", 
    value: "Self-belief"
  },
  {
    quote: "Fall seven times, stand up eight.", 
    author: "Japanese Proverb", 
    value: "Resilience"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.", 
    author: "Sam Levenson", 
    value: "Persistence"
  },
  {
    quote: "Success is stumbling from failure to failure with no loss of enthusiasm.", 
    author: "Winston Churchill", 
    value: "Perseverance"
  },
  {
    quote: "The only way to finish is to start.", 
    author: "Unknown", 
    value: "Initiative"
  },
  {
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", 
    author: "Zig Ziglar", 
    value: "Personal growth"
  },
  {
    quote: "If you can't fly, then run. If you can't run, then walk. If you can't walk, then crawl, but whatever you do, you have to keep moving forward.", 
    author: "Martin Luther King Jr.", 
    value: "Perseverance"
  }
]

currentQuoteIndex = 0

const quoteElement = document.querySelector('.quote')
const quote = document.createElement('p')
const author = document.createElement('p')
const value = document.createElement('p')

value.setAttribute("style", "font-style: italic;")

quote.textContent = ` "${quotes[currentQuoteIndex].quote}" `
author.textContent = `~ ${quotes[currentQuoteIndex].author}`
value.textContent = ` ${quotes[currentQuoteIndex].value} `

quoteElement.append(quote)
quoteElement.append(author)
quoteElement.append(value)

function changeQuote() {
  
  quote.textContent = ` "${quotes[currentQuoteIndex].quote}" `
  author.textContent = `~ ${quotes[currentQuoteIndex].author}`
  value.textContent = ` ${quotes[currentQuoteIndex].value} `
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length

}

setInterval(changeQuote, 1000)


//Main Quest
const quest = document.querySelector('.main')
const questHeader = document.querySelector('#quest-header')
const inputQuest = document.querySelector('#quest-input')


inputQuest.addEventListener('keypress', 
  function (e) {
    if(e.key === 'Enter'){
      const questName = document.createElement('h3')
      questName.setAttribute('id', 'quest-phrase')
      if(inputQuest.value !== ''){
        questName.textContent = inputQuest.value
        console.log(questName)
        localStorage.setItem('questName', questName.textContent) // Need to have the entire element appended
        quest.append(questName)
        questHeader.style.display = 'none'
        inputQuest.style.display = 'none'
      }
      else {
        questName.textContent = 'No Main Quest For Today'
        quest.append(questName)
      }
    }
  }
)
if(document.getElementById('quest-phrase')){
  const questPhrase = document.getElementById('quest-phrase')
  questPhrase.addEventListener('click', function(){
  console.log('clicked') //questPhrase is null, why?
}
)
}



//Task List
//Need to store tasks in an array in localstorage
const taskList = document.querySelector('.todo')
const inputTask = document.querySelector('#task')

inputTask.addEventListener('keypress', 
  function (e) {
    if(e.key === 'Enter'){
      if(inputTask.value !== ''){
        const task = document.createElement('li')
        task.textContent = inputTask.value
        taskList.append(task)
        inputTask.value = ''
      }
    
    }
  }
)

taskList.style.display = 'none'



function showList () {
  if(taskList.style.display === 'none') {
    taskList.style.display = 'block'
  }
  else {
    taskList.style.display = 'none'
  }
  console.log(taskList.style.display)
}

