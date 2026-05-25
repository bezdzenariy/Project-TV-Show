// feetch epizodes from API
async function fetchEpisodes() {
  const rootElem = document.getElementById('root');

  try {
    // show loading message
    rootElem.innerHTML = '<p>Loading episodes...</p>';

    // Fetch data from API
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
    if (!response.ok) throw new Error("Failed to fetch episodes");
    
    const episodes = await response.json();
    makePageForEpisodes(episodes);
  } catch (error) {
    
    // Show error message to user
    rootElem.innerHTML = `<p style="color: red;">Error loading episodes: ${error.message}</p>`;
    console.error(error);
  }
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

// сreate individual episode card
function createEpisodeCard(episode) {
  const card = document.createElement("section");
  card.classList.add("episode-card");

  const season = String(episode.season).padStart(2, "0");
  const number = String(episode.number).padStart(2, "0");
  const episodeCode = `S${season}E${number}`;

  const title = document.createElement("h2");
  title.textContent = `${episode.name} - ${episodeCode}`;
  card.appendChild(title);

  const img = document.createElement("img");
  img.src = episode.image?.medium || "";
  img.alt = `${episode.name} cover`;
  card.appendChild(img);

  const summary = document.createElement("div");
  summary.classList.add("episode-summary");
  summary.innerHTML = episode.summary;
  card.appendChild(summary);

  return card;
}

// start the app
window.onload = setup;
