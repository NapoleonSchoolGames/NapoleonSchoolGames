function openPage(url) {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.getElementById('iframe');
  const buttons = document.getElementById('game-selection')
  iframeContainer.style.display = 'block';
  buttons.style.display = 'none';
  const currentSrc = new URL(iframe.src, window.location).href;
  const targetSrc = new URL(url, window.location).href;
  
  if (currentSrc !== targetSrc) {
    iframe.src = url; // Only update the src if it's different.
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