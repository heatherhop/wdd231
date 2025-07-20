const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `© <span>${today.getFullYear()} | Heather Hopkins | Utah, USA</span>`

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `<span>Last Modification: ${document.lastModified}</span>`