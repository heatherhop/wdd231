const messageDisplay = document.querySelector("#visit-info .visit-message");

function getLastVisitDate() {
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    if (lastVisitDate) {
        return new Date(lastVisitDate);
    } else {
        return null;
    }
}

function saveCurrentVisitDate() {
    const now = new Date();
    localStorage.setItem('lastVisitDate', now.toISOString());
}

const lastVisitDate = getLastVisitDate();
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits > 0) {
    if (lastVisitDate) {
        const now = new Date();
        const timeDifference = now.getTime() - lastVisitDate.getTime();
        const millisecondsInOneDay = 24 * 60 * 60 * 1000;
        const timeDifferenceInDays = timeDifference / millisecondsInOneDay;
        const fullDays = Math.floor(timeDifferenceInDays);

        if (fullDays === 0) {
            messageDisplay.textContent = `Back so soon! Awesome!`
        } else if (fullDays === 1) {
                messageDisplay.textContent = `You last visited ${fullDays} day ago.`
        } else {
            messageDisplay.textContent = `You last visited ${fullDays} days ago.`
        }
    }
}
else {
    messageDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
saveCurrentVisitDate();
