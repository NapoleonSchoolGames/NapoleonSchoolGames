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


window.onload = function() {
  var gameButtons = document.getElementsByClassName("game-button");
  for (var i = 0; i < gameButtons.length; i++) {
      gameButtons[i].name = gameButtons[i].src.split('/')[2].split('.')[0].replace(/([A-Z])/g, ' $1').trim().toLowerCase();
  }
}

function searchGames() {
  var input, filter, gameButtons, i;
  input = document.getElementById('search-bar');
  filter = input.value.toLowerCase();
  gameButtons = document.getElementsByClassName("game-button");

  for (i = 0; i < gameButtons.length; i++) {
      if (gameButtons[i].name.indexOf(filter) > -1) {
          gameButtons[i].style.display = '';
      } else {
          gameButtons[i].style.display = 'none';
      }
  }
}