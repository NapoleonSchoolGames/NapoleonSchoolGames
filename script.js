function openPage(url) {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.getElementById('iframe');
  const buttons = document.getElementById('game-selection')
  iframeContainer.style.display = 'block';
  buttons.style.display = 'none';
  const currentSrc = new URL(iframe.src, window.location).href;
  const targetSrc = new URL(url, window.location).href;
  if (currentSrc !== targetSrc) {
    iframe.src = url;
  }
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) { 
    iframe.webkitRequestFullscreen(); // Safari
  } else if (iframe.msRequestFullscreen) { 
    iframe.msRequestFullscreen(); // IE11
  }
}
function fullscreenchanged(event) {
  if (document.fullscreenElement) {
    //
  } else {
    const buttons = document.getElementById('game-selection')
    buttons.style.display = 'block';
  }
}

document.addEventListener("fullscreenchange", fullscreenchanged);

document.getElementById("search-input").addEventListener("input", searchGames);

function searchGames() {
  const searchValue = document.getElementById("search-input").value.toLowerCase();
  const gameButtons = document.querySelectorAll(".game-button");

  gameButtons.forEach((button) => {
    button.style.display = "none";
  });

  gameButtons.forEach((button) => {
    const imgSrc = button.getAttribute("src");
    const fileName = imgSrc.split("/").pop().toLowerCase();

    if (fileName.includes(searchValue)) {
      button.style.display = "block";
    }
  });
}