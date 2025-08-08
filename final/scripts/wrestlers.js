const file = 'data/wrestlers.json';
const wrestlerSpotlightContainer = document.querySelector("#spotlight");

async function getWrestlerData() {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const data = await response.json();
            return data.wrestlers;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("There is a problem with your fetch operation:", error);
    }
};

const createWrestlerSpotlightCards = (wrestlers, container) => {
    container.innerHTML = "";

    wrestlers.forEach(wrestler => {
        let wrestlerCard = document.createElement("section");
        wrestlerCard.classList.add("wrestlerCard");
        let name = document.createElement("h3");
        let years = document.createElement("p");
        years.classList.add("years");
        let favorite = document.createElement("p");
        favorite.classList.add("favorite");
        let image = document.createElement("img");
        let btn = document.createElement("button");


        name.innerHTML = `${wrestler.firstName} ${wrestler.lastName}`;
        years.innerHTML = `<strong>Years in Wrestling:</strong> ${wrestler.yearsWrestled}`;
        favorite.innerHTML = `<strong>Favorite Thing About Wrestling:</strong> ${wrestler.favoriteThing}`;
        btn.innerHTML = `<strong>More on ${wrestler.firstName}`;
        image.setAttribute("src", wrestler.wrestlerImage);
        image.setAttribute("alt", `${wrestler.firstName} ${wrestler.lastName}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "200");

        wrestlerCard.appendChild(name);
        wrestlerCard.appendChild(years);
        wrestlerCard.appendChild(favorite);
        wrestlerCard.appendChild(image);
        wrestlerCard.appendChild(btn);

        container.appendChild(wrestlerCard);

        btn.addEventListener("click", () => {
            const modal = document.getElementById('wrestler-bio');
            if (!modal) {
                console.error("Modal element with ID 'wrestler-bio' not found.");
                return;
            }
            modal.innerHTML = `
            <button class="close-modal-button">❌</button>
            <h3>${wrestler.firstName} ${wrestler.lastName}</h3>
            <img src=${wrestler.wrestlerImage} alt=${wrestler.firstName} ${wrestler.lastName}, width=200, height=200>
            <p>${wrestler.bio}</p>`;
            modal.showModal();
            
            const closeModal = document.querySelector('.close-modal-button');
            if (closeModal) {
                closeModal.addEventListener("click", () => {
                    modal.close();
                });
            } else {
                console.warn("Close modal button not found within the modal content.");
            }
            
        });
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    if (wrestlerSpotlightContainer) {
        const wrestlers = await getWrestlerData();
        createWrestlerSpotlightCards(wrestlers, wrestlerSpotlightContainer);
    }
});

