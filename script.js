function openPage(url) {
    const iframeContainer = document.getElementById('iframe-container');
    const iframe = document.getElementById('iframe');
    iframe.src = url;
    iframeContainer.style.display = 'block';
    
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) { 
      iframe.webkitRequestFullscreen(); // Safari
    } else if (iframe.msRequestFullscreen) { 
      iframe.msRequestFullscreen(); // IE11
    }
  }
  
  // Close fullscreen if ESC key is pressed
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
    iframeContainer.style.display = 'none';
  }