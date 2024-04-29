//init functions
function loadGames() {
  const gameSelectionDiv = document.getElementById('game-selection');
  fetch('./json/games.json')
    .then(response => response.json())
    .then(games => {
      games.forEach(game => {
        const img = document.createElement('img');
        img.className = 'game-button';
        img.src = `./images/${game.name}.jpg`;
        img.alt = `${game.name}`;
        img.addEventListener('click', function() {
          if (game.flash) {
            loadFlash(`${game.name}.swf`);
          } else {
            loadGame(`./games/${game.name}/index.html`);
          }
        });
        gameSelectionDiv.appendChild(img);
      });
    })
    .catch(error => alert('Error fetching games:', error));
}

//news functions
async function generateNews() {
  const response = await fetch('./json/news.json');
  const newsData = await response.json();
  const newsContainer = document.getElementById('news-container');
  //for all news "Blocks" call createNewsElement with the title/content, then appends it.
  newsData.forEach(news => {
    const newsElement = createNewsElement(news.title, news.content);
    newsContainer.appendChild(newsElement);
  });
}
function createNewsElement(title, content) {
  const element = document.createElement('div');
  element.classList.add('news');
  //create element
  const titleElement = document.createElement('h2');
  //add content
  titleElement.textContent = title;
  //add class
  titleElement.classList.add('news-title');
  const contentElement = document.createElement('span');
  contentElement.textContent = content;
  contentElement.classList.add('news-content');
  element.appendChild(titleElement);
  element.appendChild(contentElement);
  return element;
}

//game  opening functions
//loadGame/loadFlash calls loadPopup, which calls openPage
function loadGame(url) {
  loadPopup(url)
}
function loadFlash(swf) {
  loadGame(`./flash.html?swf=${swf}`)
}
function loadPopup(url) {
  var popups = 2
  var popup = Math.floor(Math.random() * (popups - 1));
  if (popup == 0) {
    var title = "popup1"
    var text = "popup1"
    var icon = "success"
  }
  if (popup == 1) {
    var title = "popup2"
    var text = "popup2"
    var icon = "question"
  }
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didDestroy: openPage(url)
  });
}
function openPage(url) {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.getElementById('iframe');
  const buttons = document.getElementById('game-selection')
  //Hide buttons on call
  buttons.style.display = 'none';
  const currentSrc = new URL(iframe.src, window.location).href;
  const targetSrc = new URL(url, window.location).href;
  //Set iframe
  if (currentSrc !== targetSrc) {
    iframe.src = url;
  }
  //fullscreen
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) { 
    iframe.webkitRequestFullscreen(); 
  } else if (iframe.msRequestFullscreen) { 
    iframe.msRequestFullscreen();
  }
}

//user functions
function searchGames() {
  var input, filter, gameButtons, i;
  input = document.getElementById('search-bar');
  filter = input.value.toLowerCase().replace(/\s+/g, '');
  gameButtons = document.getElementsByClassName("game-button");
  //check if the text matches any game's image name (triggers on keyUp)
  for (i = 0; i < gameButtons.length; i++) {
      if (gameButtons[i].src.indexOf(filter) > -1) {
          gameButtons[i].style.display = '';
      } else {
          gameButtons[i].style.display = 'none';
      }
  }
}
function fullscreenchanged(event) {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.getElementById('iframe');
  const buttons = document.getElementById('game-selection') 
  //if not fullscreen, show buttons
  if (document.fullscreenElement) {
  } else {
    buttons.style.display = 'block';
  }
}


window.onerror = function(message, source, lineno, colno, error) {
  alert("Error: " + message + "\nLine: " + lineno + "\nColumn: " + colno + "\nSource: " + source);
  return true;
}