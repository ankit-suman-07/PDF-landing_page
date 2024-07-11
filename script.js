document.addEventListener("DOMContentLoaded", () => {
    const details = "Merge pdfs and reduce the size using merge or compress PDF.";
    const features = [
        "Merge PDF", "Split PDF", "Compress PDF", "PDF to Word", "PDF to PowerPoint",
        "PDF to Excel", "Word to PDF", "PowerPoint to PDF", "Excel to PDF", "Edit PDF",
        "PDF to JPG", "JPG to PDF", "Sign PDF", "Watermark", "Rotate PDF",
        "HTML to PDF", "Unlock PDF", "Protect PDF", "Organize PDF", "PDF to PDF/A",
        "Repair PDF", "Page numbers", "Scan to PDF", "OCR PDF", "Compare PDF", "Redact PDF"
    ];

    // Select the parent div
    const featuresDiv = document.querySelector('.features-container');

    for (let i = 0; i <= 15; i++) {
        // Create a new child div
        const childDiv = document.createElement('div');
        childDiv.classList.add('feature');

        if(i <= 3) {
            const popular = document.createElement('div');
            popular.classList.add('popular-div');
            popular.textContent = "Popular";
            childDiv.appendChild(popular);
        }

        

        const featuresTop = document.createElement('div');
        featuresTop.classList.add('features-top');
        const featuresBottom = document.createElement('div');
        featuresBottom.classList.add('features-bottom');

        const logo = document.createElement('div');
        logo.classList.add("div-img");

        const desc = document.createElement('div');
        desc.classList.add("div-desc");
        desc.textContent = details;

        // Create an image element
        const img = document.createElement('img');
        img.src = "assets/" + i + ".png"; // Placeholder image, replace with your image source
        img.alt = features[i];

        // Create a heading element
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
        

        // Append the child div to the parent div
        featuresDiv.appendChild(childDiv);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");

    // Toggle mobile menu and hamburger icon
    hamburgerMenu.addEventListener("click", function () {
        hamburgerMenu.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    // Hide mobile menu and reset hamburger icon on menu item click
    const mobileLinks = document.querySelectorAll(".mobile-menu a");
    mobileLinks.forEach(link => {
        link.addEventListener("click", function () {
            hamburgerMenu.classList.remove("active");
            mobileMenu.classList.remove("active");
        });
    });
});
