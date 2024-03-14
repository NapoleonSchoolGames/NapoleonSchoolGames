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
function openSWF(swf) {
  openPage(`./flash.html?swf=${swf}`);
}
function fullscreenchanged(event) {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.getElementById('iframe');
  const buttons = document.getElementById('game-selection') 
  if (document.fullscreenElement) {
  } else {
    buttons.style.display = 'block';
  }
}
document.addEventListener("fullscreenchange", fullscreenchanged);
/*
window.onload = function() {
    if(window.location.hostname !== '*napoleonschoolgames.github.io/NapoleonSchoolGames/*') {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
}
*/