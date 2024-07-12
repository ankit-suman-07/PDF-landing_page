// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Define a constant string for the details of each feature
    const details = "Merge pdfs and reduce the size using merge or compress PDF.";

    // Define an array of feature names
    const features = [
        "Merge PDF", "Split PDF", "Compress PDF", "PDF to Word", "PDF to PowerPoint",
        "PDF to Excel", "Word to PDF", "PowerPoint to PDF", "Excel to PDF", "Edit PDF",
        "PDF to JPG", "JPG to PDF", "Sign PDF", "Watermark", "Rotate PDF",
        "HTML to PDF", "Unlock PDF", "Protect PDF", "Organize PDF", "PDF to PDF/A",
        "Repair PDF", "Page numbers", "Scan to PDF", "OCR PDF", "Compare PDF", "Redact PDF"
    ];

    // Select the parent div where the features will be appended
    const featuresDiv = document.querySelector('.features-container');

    // Loop through the first 16 features
    for (let i = 0; i <= 15; i++) {
        // Create a new child div for each feature
        const childDiv = document.createElement('div');
        childDiv.classList.add('feature');

        // If the feature index is 3 or less, add a "Popular" badge
        if (i <= 3) {
            const popular = document.createElement('div');
            popular.classList.add('popular-div');
            popular.textContent = "Popular";
            childDiv.appendChild(popular);
        }

        // Create a div for the top part of the feature
        const featuresTop = document.createElement('div');
        featuresTop.classList.add('features-top');

        // Create a div for the bottom part of the feature
        const featuresBottom = document.createElement('div');
        featuresBottom.classList.add('features-bottom');

        // Create a div for the logo/image
        const logo = document.createElement('div');
        logo.classList.add("div-img");

        // Create a div for the description
        const desc = document.createElement('div');
        desc.classList.add("div-desc");
        desc.textContent = details;

        // Create an image element and set its source and alt text
        const img = document.createElement('img');
        img.src = "assets/" + i + ".png"; // Placeholder image, replace with your image source
        img.alt = features[i];

        // Create a heading element for the feature name
        const heading = document.createElement('h3');
        heading.textContent = features[i];

        // Append the image and description to the logo div
        logo.appendChild(img);
        featuresTop.appendChild(logo);
        featuresTop.appendChild(desc);

        // Append the heading to the featuresBottom div
        featuresBottom.appendChild(heading);

        // Append featuresTop and featuresBottom to the child div
        childDiv.appendChild(featuresTop);
        childDiv.appendChild(featuresBottom);

        // Add click event listener to redirect to demo.html
        childDiv.addEventListener('click', () => {
            window.location.href = 'demo.html';
        });

        // Append the child div to the parent div
        featuresDiv.appendChild(childDiv);
    }
});

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the hamburger menu element
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    // Select the mobile menu element
    const mobileMenu = document.querySelector(".mobile-menu");

    // Add click event listener to the hamburger menu to toggle the active class
    hamburgerMenu.addEventListener("click", function () {
        hamburgerMenu.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    // Select all links within the mobile menu
    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    // Add click event listeners to each link to close the mobile menu on click
    mobileLinks.forEach(link => {
        link.addEventListener("click", function () {
            hamburgerMenu.classList.remove("active");
            mobileMenu.classList.remove("active");
        });
    });
});
