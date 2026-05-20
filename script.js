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

// create a card for an episode
function createEpisodeCard(episode) {
  const card = document.createElement("section");
  card.classList.add("episode-card");

  const title = document.createElement("h2");
  title.textContent = episode.name;
  card.appendChild(title);

  return card;
}

// start the app
window.onload = setup;
