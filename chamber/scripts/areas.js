const areaFile = 'data/areas.json';
const areasContainer = document.querySelector("#areas-container");

async function fetchAreaData() {
    try {
        const response = await fetch(areaFile);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayAreas(data.areas);
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
        throw error;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    if (areasContainer) {
        fetchAreaData();
    }
});

const displayAreas = (areas) => {
    areasContainer.innerHTML = "";

    areas.forEach((area) => {
        let areaCard = document.createElement("section");
        areaCard.classList.add("areaCard");

        let name = document.createElement("h2");
        name.textContent = `${area.areaName}`;

        let address = document.createElement("address");
        address.textContent = `${area.areaAddress}`;

        let description = document.createElement("p");
        description.textContent = `${area.areaDescription}`;

        let image = document.createElement("img");
        image.setAttribute("src", area.image);
        image.setAttribute("alt", area.areaName);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "300");
        image.setAttribute("height", "200");

        areaCard.appendChild(name);
        areaCard.appendChild(address);
        areaCard.appendChild(description);
        areaCard.appendChild(image);

        areasContainer.appendChild(areaCard);
    })
}
