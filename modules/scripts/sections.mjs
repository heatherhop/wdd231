export function setSectionSelection(courseData) {
    const sectionSelect = document.querySelector("#sectionNumber");
    courseData.sections.forEach((section) => {
        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = `${section.sectionNumber}`;
        sectionSelect.appendChild(option);
    });
};