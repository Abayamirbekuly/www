// app.js
const apiUrl = "https://akabab.github.io/superhero-api/api/all.json";

document.getElementById("generate-heroes").addEventListener("click", async () => {
  const heroContainer = document.getElementById("hero-container");
  heroContainer.innerHTML = ""; // Очистить контейнер перед новой генерацией

  try {
    const response = await fetch(apiUrl);
    const heroes = await response.json();

    // Случайным образом выбираем 10 героев
    const randomHeroes = heroes.sort(() => 0.5 - Math.random()).slice(0, 10);

    randomHeroes.forEach((hero) => {
      const heroCard = document.createElement("div");
      heroCard.classList.add("hero-card");

      heroCard.innerHTML = `
        <img src="${hero.images.md}" alt="${hero.name}">
        <h2>${hero.name}</h2>
        <p><b>Full Name:</b> ${hero.biography.fullName || "N/A"}</p>
        <p><b>Power:</b> ${hero.powerstats.power}</p>
        <p><b>Combat:</b> ${hero.powerstats.combat}</p>
        <p><b>Intelligence:</b> ${hero.powerstats.intelligence}</p>
        <p><b>Speed:</b> ${hero.powerstats.speed}</p>
        <p><b>Strength:</b> ${hero.powerstats.strength}</p>
        <p><b>Durability:</b> ${hero.powerstats.durability}</p>
        <p><b>Publisher:</b> ${hero.biography.publisher}</p>
        <p><b>First Appearance:</b> ${hero.biography.firstAppearance || "Unknown"}</p>
        <p><b>Aliases:</b> ${hero.biography.aliases.join(", ")}</p>
      `;

      heroContainer.appendChild(heroCard);
    });
  } catch (error) {
    console.error("Error fetching superhero data:", error);
    heroContainer.innerHTML = `<p>Failed to load superhero data. Please try again.</p>`;
  }
});
    