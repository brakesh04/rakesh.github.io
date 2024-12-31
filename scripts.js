document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Display current date
    const currentDateElement = document.getElementById("current-date");
    const currentDate = new Date().toLocaleDateString();
    currentDateElement.textContent = `Current Date: ${currentDate}`;
});
