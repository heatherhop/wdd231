import { getWrestlerData, createWrestlerSpotlightCards } from "./wrestlerCard.mjs";

const wrestlerSpotlightContainer = document.querySelector("#spotlight");

document.addEventListener("DOMContentLoaded", async () => {
    if (wrestlerSpotlightContainer) {
        const wrestlers = await getWrestlerData();
        createWrestlerSpotlightCards(wrestlers, wrestlerSpotlightContainer);
    }
});
