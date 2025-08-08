const file = 'data/coaches.json';
const coachesSpotlightContainer = document.querySelector("#coach-spotlight");

async function getCoachesData() {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const data = await response.json();
            return data.coaches;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("There is a problem with your fetch operation:", error);
        return [];
    }
};

const createCoachesSpotlightCards = (coaches, container) => {
    container.innerHTML = "";
    const coach = coaches[0];
    let coachesCard = document.createElement("section");

    coachesCard.classList.add("coachesCard");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let bio = document.createElement("p");
    

    name.innerHTML = `${coach.firstName} ${coach.lastName}`;
    bio.innerHTML = ` ${coach.bio}`;
    image.setAttribute("src", coach.wrestlerImage);
    image.setAttribute("alt", `Coach ${coach.firstName} ${coach.lastName}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "200");
    image.setAttribute("height", "200");

    coachesCard.appendChild(image);
    coachesCard.appendChild(name);
    coachesCard.appendChild(bio);
    container.appendChild(coachesCard);
};

document.addEventListener("DOMContentLoaded", async () => {
    if (coachesSpotlightContainer) {
        const coaches = await getCoachesData();

        if (coaches && coaches.length > 0) {
            const now = new Date();
            const startOfYear = new Date(now.getFullYear(), 0, 1);
            const daysSinceYearStarted = (now - startOfYear) / (1000 * 60 * 60 * 24);
            const currentWeek = Math.floor(daysSinceYearStarted / 7);
            const coachIndex = currentWeek % coaches.length;
            const weeklyCoach = [coaches[coachIndex]];

            createCoachesSpotlightCards(weeklyCoach, coachesSpotlightContainer);
        }
    }
});

