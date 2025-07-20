import { getMemberData, createMemberList } from "./members.mjs"

const randomSpotLight = document.querySelector("#spotlight");
randomSpotLight.classList.add('show');

async function displayRandomMember() {
    const members = await getMemberData();
    const filteredMembers = members.filter(member => {
        return member.membershipLevel === "Silver" || member.membershipLevel === "Gold"
    });

    const numDisplay = 3;
    const shuffledMembers = [...filteredMembers].sort(() => 0.5 - Math.random());
    const selectedMembers = shuffledMembers.slice(0, numDisplay);
    createMemberList(selectedMembers, randomSpotLight);
}

displayRandomMember();