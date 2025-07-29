document.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    const myMembershipResults = new URLSearchParams(queryString);

    const resultsContainer = document.querySelector('#results');

    if (resultsContainer) {
        resultsContainer.innerHTML = `
<p class="thankyou">Thank you!</p>
<p>We have received your application and are happy to have you join the Hyrum Chamber of Commerce.</p>
<p>Here are your membership details:</p>
<br>
<ul>
<li><strong>Membership Level:</strong> <span class="result">${myMembershipResults.get("membership-level")}</span></p>
<li><strong>Name:</strong> <span class="result">${myMembershipResults.get("first")} ${myMembershipResults.get("last")}</span></p>
<li><strong>Title:</strong> <span class="result">${myMembershipResults.get("title")}</span></p>
<li><strong>Organization:</strong> <span class="result">${myMembershipResults.get("organization")}</span></p>
<li><strong>Phone:</strong> <span class="result">${myMembershipResults.get("phone")}</span></p>
<li><strong>Email:</strong> <span class="result">${myMembershipResults.get("email")}</span></p>
<li><strong>Your Business Description:</strong> <span class="result">${myMembershipResults.get("description")}</span></p>
</ul>
<br>
<p> We'll be in touch with your shortly to finalize your membership and welcome you aboard!</p>
<br>
<p><a href="index.html">Return to Home Page</a></p>
`;
    } else {
        console.error("The element with ID 'results' was not found on the page.");
    }
});