function openPage(url) {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.getElementById('iframe');
  const buttons = document.getElementById('game-selection')
  iframe.src = url;
  iframeContainer.style.display = 'block';
  buttons.style.display = 'none';
  
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) { 
    iframe.webkitRequestFullscreen(); // Safari
  } else if (iframe.msRequestFullscreen) { 
    iframe.msRequestFullscreen(); // IE11
  }
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeFullscreen();
  }
});

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen(); // Safari
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen(); // IE11
  }
  
  const iframeContainer = document.getElementById('iframe-container');
  const buttons = document.getElementById('game-selection')
  iframeContainer.style.display = 'none';
  buttons.style.display = 'block';
}