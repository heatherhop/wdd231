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
        businessImage.setAttribute("src", member.image);
        businessImage.setAttribute("alt", `${member.business} logo`);
        businessImage.setAttribute("loading", "lazy");
        businessImage.setAttribute("width", "200");
        businessImage.setAttribute("height", "115");
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

const gridBtn = document.querySelector('#grid-Btn');
const memberGrid = document.querySelector('#members');

gridBtn.addEventListener('click', () => {
    gridBtn.classList.toggle('show');
    memberGrid.classList.toggle('show');
});