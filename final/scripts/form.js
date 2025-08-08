document.addEventListener('DOMContentLoaded', () => {

    const queryString = window.location.search;
    const newsletterSignupResults = new URLSearchParams(queryString);

    const resultsContainer = document.querySelector('#results');

    if (resultsContainer) {
        resultsContainer.innerHTML = `
<p class="thankyou">Thank you!</p>
<p>We have received your request and are happy to have you join our Bear Mountain Wrestling Club newsletter.</p>
<p>Here are your request details:</p>
<br>
<ul>
<li><strong>Name:</strong> <span class="result">${newsletterSignupResults.get("first")} ${newsletterSignupResults.get("last")}</span></li>
<li><strong>Email:</strong> <span class="result">${newsletterSignupResults.get("email")}</span></li>
<li><strong>Addition Information Requested:</strong> <span class="result">${newsletterSignupResults.get("description")}</span></li>
<li><strong>Submission Timestamp:</strong> <span class="result">${new Date(newsletterSignupResults.get("timestamp")).toLocaleDateString()} ${new Date(newsletterSignupResults.get("timestamp")).toLocaleTimeString()}</span></li>
</ul>
<br>
<p>You'll receive our newsletter shortly!</p>
<br>
<p><a href="index.html">Return to Home Page</a></p>
`;
    } else {
        console.error("The element with ID 'results' was not found on the page.");
    }
});