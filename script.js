function openPage(url) {
    const iframeContainer = document.getElementById('iframe-container');
    const iframe = document.getElementById('iframe');
    iframe.src = url;
    iframeContainer.style.display = 'block';
  }