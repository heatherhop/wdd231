// const members = [
//     {
//         business: 'The Depot, LLC',
//         memberSince: '2010',
//         url: 'https://www.alreporter.com/wp-content/uploads/2024/11/AdobeStock_513675449-scaled-e1732711866605.webp',
//         email: 'info@gmail.com',
//         phone: '(435) 245-0002',
//         address1: '400 N 456 E',
//         address2: 'Hyrum, UT 84048',
//         website: 'www.thedepot.com',
//     },
//     {
//         business: 'Maverick',
//         memberSince: '2017',
//         url: 'https://www.alreporter.com/wp-content/uploads/2024/11/AdobeStock_513675449-scaled-e1732711866605.webp',
//         email: 'info@gmail.com',
//         phone: '(435) 245-0063',
//         address1: '500 N 200 W',
//         address2: 'Hyrum, UT 84048',
//         website: 'www.maverick.com',
//     },
//     {
//         business: 'Arctic Circle',
//         memberSince: '2024',
//         url: 'https://www.alreporter.com/wp-content/uploads/2024/11/AdobeStock_513675449-scaled-e1732711866605.webp',
//         email: 'info@gmail.com',
//         phone: '(435) 245-9512',
//         address1: '963 N Center',
//         address2: 'Hyrum, UT 84048',
//         website: 'www.arctic-circle.com',
//     },
//     {
//         business: 'The Apple Station, LLC',
//         memberSince: '2024',
//         url: 'https://www.alreporter.com/wp-content/uploads/2024/11/AdobeStock_513675449-scaled-e1732711866605.webp',
//         email: 'info@gmail.com',
//         phone: '(435) 245-7892',
//         address1: '360 N Scenic View',
//         address2: 'Hyrum, UT 84048',
//         website: 'www.theapplestation.com',
//     },
//     {
//         business: 'Country Corner',
//         memberSince: '2018',
//         url: 'https://www.alreporter.com/wp-content/uploads/2024/11/AdobeStock_513675449-scaled-e1732711866605.webp',
//         email: 'info@gmail.com',
//         phone: '(435) 245-0352',
//         address1: '777 Lane Ave',
//         address2: 'Hyrum, UT 84048',
//         website: 'www.countrycorner.com',
//     },
//     {
//         business: "Orion's Grocery",
//         memberSince: '2002',
//         url: 'https://www.alreporter.com/wp-content/uploads/2024/11/AdobeStock_513675449-scaled-e1732711866605.webp',
//         email: 'info@gmail.com',
//         phone: '(435) 245-0050',
//         address1: '707 Orion Way',
//         address2: 'Hyrum, UT 84048',
//         website: 'www.kentsgrocery.com',
//     },
// ]
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