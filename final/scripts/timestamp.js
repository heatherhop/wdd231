document.addEventListener("DOMContentLoaded", function () {
    const timestampInput = document.getElementById('timestamp');

    if (timestampInput) {
        const now = new Date();
        timestampInput.value = now.toISOString();
    }
});
