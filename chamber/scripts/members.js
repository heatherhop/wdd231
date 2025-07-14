const file = 'data/members.json';
const memberList = document.querySelector("#members");

async function getMemberData() {
    const response = await fetch(file);
    const data = await response.json();
    createMemberList(data.members);
}

getMemberData();

const createMemberList = (members) => {

    // memberList.innerHTML = "";
    members.forEach(member => {
        let memberCard = document.createElement("section");
        memberCard.classList.add("memberCard");
        let business = document.createElement("h3");
        let date = document.createElement("p");
        let level = document.createElement("p");
        let businessImage = document.createElement("img");
        let email = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("p");

        business.textContent = `${member.business}`;
        date.innerHTML = `<strong>Member Since:</strong> ${member.memberSince}`;
        level.innerHTML = `<strong>Membership Level:</strong> ${member.membershipLevel}`;
        businessImage.setAttribute("src", "images/place-holder.webp");

        businessImage.setAttribute("alt", `${member.business} logo`);
        businessImage.setAttribute("loading", "lazy");
        businessImage.setAttribute("width", "200");
        businessImage.setAttribute("height", "112");
        businessImage.setAttribute("data-src", member.image);
        email.innerHTML = `<strong>Email:</strong> ${member.email}`;
        phone.innerHTML = `<strong>Phone:</strong> ${member.phone}`;
        url.innerHTML = `<strong>Website:</strong> ${member.website}`;

        memberCard.appendChild(business);
        memberCard.appendChild(date);
        memberCard.appendChild(level);
        memberCard.appendChild(businessImage);
        memberCard.appendChild(email);
        memberCard.appendChild(phone);
        memberCard.appendChild(url);

        memberList.appendChild(memberCard)
    });
}

function lazyLoadImage(img) {
    if (img.dataset.src) { // Check if data-src exists
        img.src = img.dataset.src; // Swap the actual image
        img.removeAttribute("data-src"); // Remove data-src once loaded
        // Optional: Remove loading="lazy" if you don't want the browser to re-evaluate it
        // img.removeAttribute("loading");
    }
}

// Example of setting up the observer (integrate this into your script after image creation)
const lazyLoadOptions = {
    rootMargin: '0px 0px 100px 0px', // Load images when they are 100px from viewport
    threshold: 0 // As soon as any part of the image is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            lazyLoadImage(entry.target);
            observer.unobserve(entry.target); // Stop observing once loaded
        }
    });
}, lazyLoadOptions);

// After creating each businessImage, add it to the observer
observer.observe(businessImage);

const gridBtn = document.querySelector('#grid-Btn');
const memberGrid = document.querySelector('#members');

gridBtn.addEventListener('click', () => {
    gridBtn.classList.toggle('show');
    memberGrid.classList.toggle('show');
});