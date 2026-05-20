// initialize application when DOM is loaded
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

// populate the page with episode cards
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");

  // clear existing content
  rootElem.innerHTML = "";

  // create and append a card for each episode
  episodeList.forEach((episode) => {
    const card = createEpisodeCard(episode);
    rootElem.appendChild(card);
  });
}

function createEpisodeCard(episode) {
  const card = document.createElement("section");
  card.classList.add("episode-card");

  const season = String(episode.season).padStart(2, "0");
  const number = String(episode.number).padStart(2, "0");
  const episodeCode = `S${season}E${number}`;

  const title = document.createElement("h2");
  title.textContent = `${episode.name} - ${episodeCode}`;
  card.appendChild(title);

  return card;
}

// start the app
window.onload = setup;
