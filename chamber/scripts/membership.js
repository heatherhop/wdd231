const membershipLevels = [
    {
        level: 'Non-Profit Membership Level',
        description: '',
        fee: ''
    },
    {
        level: 'Bronze Membership Level',
        description: '',
        fee: ''
    },
    {
        level: 'Silver Membership Level',
        description: '',
        fee: ''
    },
    {
        level: 'Gold Membership Level',
        description: '',
        fee: ''
    },
]

createMembershipInfoCard(membershipInfo);

function createMembershipInfoCard(membershipInfo) {
    const membershipLevelContainer = document.querySelector("#levelInfo");
    membershipLevelContainer.innerHTML = "";
    membershipLevels.forEach(level => {
        let levelCard = document.createElement("li");
        levelCard.classList.add("levelCard");
        let name = document.createElement("h3");
        let btn = document.createElement("button");
        name.innerHTML = `${level.level}`;
        button.innerHTML = "Learn More";
        levelCard.appendChild(name);
        levelCard.appendChild(btn);
        btn.addEventListener("click", () => {
            showMembershipDetails(level);
        });
    });
}

function showMembershipDetails(membershipLevels)