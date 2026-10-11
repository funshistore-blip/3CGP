// Select the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Check whether a theme was previously saved
const savedTheme = localStorage.getItem("theme");

// Apply the saved theme when the page loads
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Update the theme button text
function updateThemeButton() {
    const isDarkMode = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDarkMode
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";

    themeToggle.setAttribute(
        "aria-label",
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
    );
}

// Initialize the button text
updateThemeButton();

// Toggle between light and dark themes
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    // Save the selected theme
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Update the button text
    updateThemeButton();
});

// Add functionality to the Buy Now buttons
const buyButtons = document.querySelectorAll(".buy-button");

buyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const productCard = button.closest(".product-card");
        const productName = productCard.querySelector("h3").textContent;
        const productPrice = productCard.querySelector(".price").textContent;

        alert(
            "You selected: " +
            productName +
            "\nPrice: " +
            productPrice
        );
    });
});
