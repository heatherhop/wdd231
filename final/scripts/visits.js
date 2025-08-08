const numVisitDisplay = document.querySelector("#numVisits");
const storageKey = "numVisits";

if (numVisitDisplay) {
    let numVisits = Number(window.localStorage.getItem(storageKey)) || 0;
    if (numVisits === 0) {
        numVisitDisplay.textContent = `Welcome to BMWC!`;
    }
    else if (numVisits === 1) {
        numVisitDisplay.textContent = `You have visited ${numVisits} time.`;
    } else {
        numVisitDisplay.textContent = `You have visited ${numVisits} times.`
    }

    numVisits++;
    localStorage.setItem(storageKey, numVisits);
} else {
    console.error("The element with ID 'numVisits' was not found on the page.")
}