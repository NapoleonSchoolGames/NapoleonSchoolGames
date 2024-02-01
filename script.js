function openPage(url) {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.getElementById('iframe');
  const buttons = document.getElementById('game-selection')
  iframeContainer.style.display = 'block';
  buttons.style.display = 'none';
  if (iframe.src == url) {
    //nothing, it will fullscreen
  } else {
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
    console.log("pp");
  } else {
    const buttons = document.getElementById('game-selection')
    buttons.style.display = 'block';
  }
}

document.addEventListener("fullscreenchange", fullscreenchanged);