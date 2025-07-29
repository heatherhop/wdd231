const membershipLevels = [
    {
        level: 'Non-Profit Membership Level',
        description: 'This special membership is for non-profit organizations. We know you do important work for our community, so this level offers all the basic benefits at a lower cost. You will get to network, be listed in our directory, and get support for your mission',
        fee: '$35 Annual Membership'
    },
    {
        level: 'Bronze Membership Level',
        description: 'Our Bronze level is perfect for businesses just starting out or those looking for a basic way to get involved. You will get your business listed in our online directory, invitations to all our networking events, access to special member-only discounts, and our support and voice for local businesses.',
        fee: '$75 Annual Membership'
    },
    {
        level: 'Silver Membership Level',
        description: "Ready for a bit more? Our Silver level builds on Bronze with extra perks to help your business stand out. You will enjoy a more prominent spot in our directory, better opportunities to sponsor events(and sometimes at a discount!), more free tickets to Chamber events, and a chance to really boost your business's presence.",
        fee: '$125 Annual Membership'
    },
    {
        level: 'Gold Membership Level',
        description: "This is our top-tier Gold level for businesses that want maximum visibility and influence. If you're looking to be a leader in the community, this is for you! Gold members get the best placement in our business directory, mmajor branding opportunities at all Chamber events, exclusive invitations to high- level meetings and forums, priority for speaking engagements, extra promotion through our social media and newsletters, and more free passes to everything we do!",
        fee: '$175 Annual Membership'
    },
]

createMembershipCard(membershipLevels);

function createMembershipCard(membershipLevels) {
    const membershipLevelsContainer = document.querySelector("#levelCards");
    membershipLevelsContainer.innerHTML = "";
    membershipLevels.forEach(level => {
        let levelCard = document.createElement("li");
        levelCard.classList.add("levelCard");
        let name = document.createElement("h3");
        let fee = document.createElement("p");
        let btn = document.createElement("button");

        name.textContent = `${level.level}`;
        fee.textContent = `${level.fee}`;
        btn.textContent = "Learn More";

        levelCard.appendChild(name);
        levelCard.appendChild(fee);
        levelCard.appendChild(btn);
        membershipLevelsContainer.appendChild(levelCard);

        btn.addEventListener("click", () => {
            const modal = document.getElementById('level-details');
            if (!modal) {
                console.error("Modal element with ID 'level-details' not found.");
                return;
            }
            modal.innerHTML = `
            <button class="close-modal-button">❌</button>
            <h3>${level.level}</h3>
            <p>${level.description}</p>
            <p>${level.fee}</p>
            `;
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