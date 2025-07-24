let currentSlideIndex = 0;
let slides = [];

// Image filenames array - moved outside for global access
const imageFilenames = [
    "images/ibm_specialization_ibmcybersecurityanalyst.jpg",
    "images/ibm_specialization_securityanalystfundamentals.jpg",
    "images/ibm_specialization_devopsandsoftwareengineering.jpg",
    "images/ibm_specialization_devopscloudandagilefoundations.jpg",
    "images/ibm_specialization_ibmdatawarehouseengineer.jpg",
    "images/imperialcollegelondon_specialization_mathematicsformachinelearning.jpg",
    "images/infosec_specialization_advpythonscripting4cybersecurity.jpg",
    "images/deeplearningai_specialization_nlp.jpg",
    "images/stanfordonline_specialization_machinelearning.jpg",
    "images/dukeuniversity_specialization_pythonbashandsql4dataengineering.jpg",
    "images/johnhopkinsuniversity_specialization_datascience.jpg"
];

// Certificate verification URLs - add the actual URLs for each certificate
const verificationUrls = {
    "images/ibm_specialization_ibmcybersecurityanalyst.jpg": "https://coursera.org/verify/specialization/TCBK8AVMN5BQ",
    "images/ibm_specialization_securityanalystfundamentals.jpg": "https://coursera.org/verify/specialization/4MFFATRXDHAB",
    "images/ibm_specialization_devopsandsoftwareengineering.jpg": "https://coursera.org/verify/specialization/WLTQLH326CS4",
    "images/ibm_specialization_devopscloudandagilefoundations.jpg": "https://coursera.org/verify/specialization/BDN6GQW9C2E2",
    "images/ibm_specialization_ibmdatawarehouseengineer.jpg": "https://coursera.org/verify/specialization/YD2GVW2SPMMM",
    "images/imperialcollegelondon_specialization_mathematicsformachinelearning.jpg": "https://coursera.org/verify/specialization/M2M2BFJGYGBY",
    "images/infosec_specialization_advpythonscripting4cybersecurity.jpg": "https://coursera.org/verify/specialization/3HSMQ7UJC34N",
    "images/deeplearningai_specialization_nlp.jpg": "https://coursera.org/verify/specialization/YLMRHXVTLD99",
    "images/stanfordonline_specialization_machinelearning.jpg": "https://coursera.org/verify/specialization/SBTRWCR5DS8W",
    "images/dukeuniversity_specialization_pythonbashandsql4dataengineering.jpg": "https://coursera.org/verify/specialization/5WTD6LEKYDVA",
    "images/johnhopkinsuniversity_specialization_datascience.jpg": "https://coursera.org/verify/specialization/LKJX5VJVGZ9V"
};

// Function to open verification URL
function openVerificationUrl(filename) {
    const url = verificationUrls[filename];
    if (url) {
        window.open(url, '_blank');
    } else {
        console.log('No verification URL found for:', filename);
    }
}

// Load images dynamically based on filenames
function loadSlides() {
    const slidesContainer = document.getElementById('slidesContainer');
    const thumbnailContainer = document.getElementById('thumbnailContainer');

    imageFilenames.forEach((filename, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slides');

        const img = document.createElement('img');
        img.src = filename;
        img.style.cursor = 'pointer';
        img.title = 'Click to verify certificate';
        img.onclick = () => openVerificationUrl(filename);
        slideDiv.appendChild(img);
        slidesContainer.appendChild(slideDiv);

        const thumb = document.createElement('img');
        thumb.src = filename;
        thumb.classList.add('thumb');
        thumb.style.cursor = 'pointer';
        thumb.title = 'Click to verify certificate or view slide';
        thumb.onclick = (event) => {
            // Check if Ctrl/Cmd key is pressed for verification, otherwise show slide
            if (event.ctrlKey || event.metaKey) {
                openVerificationUrl(filename);
            } else {
                setCurrentSlide(index);
            }
        };
        thumbnailContainer.appendChild(thumb);

        slides.push(slideDiv);
    });

    updateSlideCounter();
}

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlideIndex ? 'block' : 'none';
    });
    
    // Update thumbnail highlighting
    const thumbnails = document.querySelectorAll('.thumb');
    thumbnails.forEach((thumb, i) => {
        if (i === currentSlideIndex) {
            thumb.classList.add('current-thumb');
            // Check if this is a specialization certificate
            const filename = imageFilenames[i];
            if (filename.includes('specialization')) {
                thumb.classList.add('specialization');
            }
        } else {
            thumb.classList.remove('current-thumb');
            thumb.classList.remove('specialization');
        }
    });
    
    // Center the current thumbnail
    centerCurrentThumbnail();
    
    updateSlideCounter();
}

function centerCurrentThumbnail() {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    const thumbnails = document.querySelectorAll('.thumb');
    
    if (thumbnails.length > 0 && currentSlideIndex < thumbnails.length) {
        const currentThumbnail = thumbnails[currentSlideIndex];
        const containerWidth = thumbnailContainer.clientWidth;
        const thumbnailWidth = currentThumbnail.offsetWidth + 10; // Including margin
        
        // Calculate the position to center the current thumbnail
        const thumbnailOffsetLeft = currentThumbnail.offsetLeft;
        const scrollPosition = thumbnailOffsetLeft - (containerWidth / 2) + (thumbnailWidth / 2);
        
        // Smooth scroll to center the current thumbnail
        thumbnailContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function setCurrentSlide(index) {
    showSlide(index);
}

function updateSlideCounter() {
    document.getElementById('currentSlide').innerText = currentSlideIndex + 1;
    document.getElementById('totalSlides').innerText = slides.length.toString();
}

function goBack() {
    // Check if there's history to go back to
    if (window.history.length > 1) {
        window.history.back();
    } else {
        // Fallback: try to go to a common home page
        window.location.href = 'index.html';
    }
}

document.getElementById('nextBtn').onclick = nextSlide;
document.getElementById('prevBtn').onclick = prevSlide;
document.getElementById('goBackBtn').onclick = goBack;

window.onload = function() {
    loadSlides();
    showSlide(currentSlideIndex);
};
