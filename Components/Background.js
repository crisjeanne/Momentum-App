export function backgroundRender() {
  const backgroundElement = document.getElementById("background");
const API_KEY = "zMNHk6yPZSTnmuIyhOGAyeDHqFx3Jufaiz17JYeeMmz7hASzXPyhLot5"
const API_URL = "https://api.pexels.com/v1/search?query=nature&orientation=dark-landscape&per_page=1"
  function updateBackgroundImage() {
    fetch(
      API_URL,
      {
        headers: {
          Authorization:
            API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const backgroundImageUrl = data.photos[0].src.landscape;
        backgroundElement.style.backgroundImage = `url(${backgroundImageUrl})`;
        console.log(data)
      });
  }

  updateBackgroundImage();

  setInterval(updateBackgroundImage, 60000);
}
