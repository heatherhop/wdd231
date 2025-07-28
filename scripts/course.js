const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

createCourseList(courses);

function createCourseList(courses) {
    const courseListElement = document.querySelector("#courses");
    courseListElement.innerHTML = "";
    courses.forEach(course => {
        let item = document.createElement("li");
        // item.classList.add("item");
        item.textContent = `${course.subject} ${course.number}`;
        courseListElement.appendChild(item);
        if (course.completed === true) {
            item.classList.add('completed');
            let checkmarkSpan = document.createElement("span");
            checkmarkSpan.classList.add('checkmark');
            checkmarkSpan.innerHTML = '&#10003;';
            item.appendChild(checkmarkSpan);
            item.addEventListener("click", () => {
                showCourseDetails(course);
            });
        }
    })
};

function calcTotalCredits(courses) {
    return courses.reduce((accumulator, currentCourse) => {
        return accumulator + currentCourse.credits
    }, 0);
};

const allCourses = document.querySelector('#all');
const cseCourses = document.querySelector('#cse');
const wddCourses = document.querySelector('#wdd');
const totalDisplay = document.querySelector('#total');

allCourses.addEventListener("click", () => {
    createCourseList(courses)
    const currentTotal = calcTotalCredits(courses);
    totalDisplay.innerHTML = `The total credits for courses listed above is ${currentTotal}`;

});

cseCourses.addEventListener("click", () => {
    let cse = courses.filter(course => course.subject === 'CSE');
    createCourseList(cse);
    const currentTotal = calcTotalCredits(cse);
    totalDisplay.innerHTML = `The total credits for courses listed above is ${currentTotal}`;

});

wddCourses.addEventListener("click", () => {
    let wdd = courses.filter(course => course.subject === 'WDD');
    createCourseList(wdd);
    const currentTotal = calcTotalCredits(wdd)
    totalDisplay.innerHTML = `The total credits for courses listed above is ${currentTotal}`;
});

document.addEventListener("DOMContentLoaded", () => {
    createCourseList(courses);
    const initialTotal = calcTotalCredits(courses);
    totalDisplay.innerHTML = `The total credits for courses listed above is ${initialTotal}`;
});

const modal = document.getElementById("course-details");

function showCourseDetails(course) {
    modal.innerHTML = '';
    modal.innerHTML = `
    <button class="close-modal-button">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies:</strong> ${course.technology}</p>
    `;
    modal.showModal();
    const closeModal = document.querySelector('.close-modal-button');
    closeModal.addEventListener("click", () => {
        modal.close();
    });
}