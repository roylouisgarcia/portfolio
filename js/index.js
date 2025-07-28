$(document).ready(function(){
    
    // Set default state - all project tabs hidden
    hideAllProjectTabs();
 
 $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Auto-hide mobile menu after 3 seconds on smaller devices
    if ($(window).width() <= 768) {
      setTimeout(function() {
        $('.navbar-collapse').collapse('hide');
      }, 3000);
    }

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      // Handle specialization section visibility
      if (hash === '#specialization') {
        // Show specialization section and its jumbotron
        $('#specialization').show('fast');
        $('.jumbotron-before-specialization').show('fast');
        // Hide all project tabs when going to specialization
        hideAllProjectTabs();
      } else if (hash === '#projects') {
        // Hide specialization section and its jumbotron when navigating to projects
        $('#specialization').hide('fast');
        $('.jumbotron-before-specialization').hide('fast');
        // Show Academic tab when going to projects
        showAcademicTab();
      } else {
        // Hide specialization section and its jumbotron when navigating to other sections
        $('#specialization').hide('fast');
        $('.jumbotron-before-specialization').hide('fast');
        // Hide all project tabs when going to other sections
        hideAllProjectTabs();
      }

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        window.location.hash = hash;
      });
    } else {
      // Handle external links (like COURSES) - hide all project tabs
      hideAllProjectTabs();
    }
     
    defaultAbout();
  });
    
    $("#books-toggle").click(function(){
        $(".books").toggle("fast", function(){}); 
    });
    
    $("#professionalDetailsbtn").click(function(){
        $("#professionalDetails").toggle("fast", function(){
            // Update button text based on visibility
            if ($("#professionalDetails").is(":visible")) {
                $("#professionalDetailsbtn").text("HIDE DETAILS");
            } else {
                $("#professionalDetailsbtn").text("CLICK HERE FOR MORE DETAILS");
            }
        }); 
    });
    
    $("#personalDetailsBtn").click(function(){
        $("#personalDetails").toggle("fast", function(){
            // Update button text based on visibility
            if ($("#personalDetails").is(":visible")) {
                $("#personalDetailsBtn").text("HIDE DETAILS");
            } else {
                $("#personalDetailsBtn").text("CLICK HERE FOR MORE DETAILS");
            }
        }); 
    });
    
  $("#link2Featured").click(function(){  
    $(".featured").show("fast", function(){
      // Initialize the featured slideshow if not already done
      if (!window.featuredInitialized) {
        initializeFeaturedSlideshow();
        window.featuredInitialized = true;
      }
    });  
    $(".academic").hide("fast", function(){});
    $(".professional").hide("fast", function(){});
    $(".personal").hide("fast", function(){});
    $(".certifications").hide("fast", function(){});
    $("#link2Featured").removeClass("btnNonActive");
    $("#link2Academic").addClass("btnNonActive");
    $("#link2Professional").addClass("btnNonActive");
    $("#link2Personal").addClass("btnNonActive");
    $("#link2Certifications").addClass("btnNonActive");  
  });    
    
  
  $("#link2Academic").click(function(){    
    $(".featured").hide("fast", function(){});  
    $(".academic").show("fast", function(){});
    $(".professional").hide("fast", function(){});
    $(".personal").hide("fast", function(){});
    $(".certifications").hide("fast", function(){});
    $("#link2Featured").addClass("btnNonActive");  
    $("#link2Academic").removeClass("btnNonActive");
    $("#link2Professional").addClass("btnNonActive");
    $("#link2Personal").addClass("btnNonActive");
    $("#link2Certifications").addClass("btnNonActive");  
  });

  $("#link2Professional").click(function(){
    $(".featured").hide("fast", function(){});      
    $(".academic").hide("fast", function(){});
    $(".professional").show("fast", function(){});
    $(".personal").hide("fast", function(){});
    $(".certifications").hide("fast", function(){});
    $("#link2Featured").addClass("btnNonActive");      
    $("#link2Academic").addClass("btnNonActive");
    $("#link2Professional").removeClass("btnNonActive");
    $("#link2Personal").addClass("btnNonActive");
    $("#link2Certifications").addClass("btnNonActive");       
  });

  $("#link2Personal").click(function(){    
    $(".featured").hide("fast", function(){});      
    $(".academic").hide("fast", function(){});
    $(".professional").hide("fast", function(){});
    $(".personal").show("fast", function(){});
    $(".certifications").hide("fast", function(){});
    $("#link2Featured").addClass("btnNonActive");      
    $("#link2Academic").addClass("btnNonActive");
    $("#link2Professional").addClass("btnNonActive");
    $("#link2Personal").removeClass("btnNonActive");
    $("#link2Certifications").addClass("btnNonActive");       
  });

  $("#link2Certifications").click(function(){    
    $(".featured").hide("fast", function(){});      
    $(".academic").hide("fast", function(){});
    $(".professional").hide("fast", function(){});
    $(".personal").hide("fast", function(){});
    $(".certifications").show("fast", function(){
      // Initialize the certifications slideshow if not already done
      if (!window.certificationsInitialized) {
        initializeCertificationsSlideshow();
        window.certificationsInitialized = true;
      }
    });
    $("#link2Featured").addClass("btnNonActive");      
    $("#link2Academic").addClass("btnNonActive");
    $("#link2Professional").addClass("btnNonActive");
    $("#link2Personal").addClass("btnNonActive");
    $("#link2Certifications").removeClass("btnNonActive");       
  });
    
  $("#associate").click(function () {
      $("#associate").css("opacity", "1");
      $("#bachelors").css("opacity", ".6");
      $("#graduate").css("opacity", ".6");
      $("#hartnell").show("fast", function () {});
      $("#csumb").hide("fast", function () {});
      $("#capella").hide("fast", function () {});
      hideAcademicProjects();
  });

  $("#bachelors").click(function () {
      $("#associate").css("opacity", ".6");
      $("#bachelors").css("opacity", "1");
      $("#graduate").css("opacity", ".6");  
      $("#hartnell").hide("fast", function () {});
      $("#csumb").show("fast", function () {});
      $("#capella").hide("fast", function () {});
      hideAcademicProjects();
  });

  $("#graduate").click(function () {
      $("#associate").css("opacity", ".6");
      $("#bachelors").css("opacity", ".6");
      $("#graduate").css("opacity", "1");  
      $("#hartnell").hide("fast", function () {});
      $("#csumb").hide("fast", function () {});
      $("#capella").show("fast", function () {});
      hideAcademicProjects();
  });
    
    
  $("#boyimage").click(function(){
      $("#adultimage").css("opacity", ".6");
      $("#teenagerimage").css("opacity", ".6");
      $("#boyimage").css("opacity", "1");
      $(".adult").hide("slow", function(){});
      $(".boy").show("slow", function(){});
      $(".teenager").hide("slow", function(){});
  });
  
    $("#teenagerimage").click(function(){
      $("#teenagerimage").css("opacity", "1");    
      $("#adultimage").css("opacity", ".6");
      $("#boyimage").css("opacity", ".6");    
      $(".adult").hide("slow", function(){});
      $(".boy").hide("slow", function(){});
      $(".teenager").show("slow", function(){});
  });
    $("#adultimage").click(function(){
      $("#adultimage").css("opacity", "1");    
      $("#boyimage").css("opacity", ".6");
      $("#teenagerimage").css("opacity", ".6");
      $(".adult").show("slow", function(){});
      $(".boy").hide("slow", function(){});
      $(".teenager").hide("slow", function(){});
    });
    
    $("#hartnellcoursesbtn").click(function(){
       $("#hartnellcourses").show("fast", function(){});
       $("#hartnellprojects").hide("fast", function(){});
       $("#hartnellcoursesbtn").addClass("totiebtnActive", function(){});
       $("#hartnellprojectsbtn").removeClass("totiebtnActive", function(){});      
    });
    
    $("#hartnellprojectsbtn").click(function(){
       $("#hartnellcourses").hide("fast", function(){});
       $("#hartnellprojects").show("fast", function(){});
       $("#hartnellcoursesbtn").removeClass("totiebtnActive", function(){});
       $("#hartnellprojectsbtn").addClass("totiebtnActive", function(){});            
    });
    
    $("#csumbcoursesbtn").click(function(){
       $("#csumbcourses").show("fast", function(){});
       $("#csumbprojects").hide("fast", function(){});
       $("#csumbcoursesbtn").addClass("totiebtnActive", function(){});
       $("#csumbprojectsbtn").removeClass("totiebtnActive", function(){});        
    });
    
    $("#csumbprojectsbtn").click(function(){
       $("#csumbcourses").hide("fast", function(){});
       $("#csumbprojects").show("fast", function(){});
       $("#csumbcoursesbtn").removeClass("totiebtnActive", function(){});
       $("#csumbprojectsbtn").addClass("totiebtnActive", function(){});           
    });
    
    $("#capellacoursesbtn").click(function(){
       $("#capellacourses").show("fast", function(){});
       $("#capellaprojects").hide("fast", function(){});
       $("#capellacoursesbtn").addClass("totiebtnActive", function(){});
       $("#capellaprojectsbtn").removeClass("totiebtnActive", function(){});       
    });
    
    $("#capellaprojectsbtn").click(function(){
       $("#capellacourses").hide("fast", function(){});
       $("#capellaprojects").show("fast", function(){});
       $("#capellacoursesbtn").removeClass("totiebtnActive", function(){});
       $("#capellaprojectsbtn").removeClass("totiebtnActive", function(){});          
    });    
    $("#nostradmsxbtn").click(function(){
       $("#nostradmsxdiv").show("fast", function(){});
       $("#redboxdiv").hide("fast", function(){});
       $("#nostradmsxbtn").addClass("totiebtnActive", function(){});
       $("#redboxbtn").removeClass("totiebtnActive", function(){});    
    });
    $("#redboxbtn").click(function(){
       $("#nostradmsxdiv").hide("fast", function(){});
       $("#redboxdiv").show("fast", function(){});
       $("#redboxbtn").addClass("totiebtnActive", function(){});
       $("#nostradmsxbtn").removeClass("totiebtnActive", function(){});          
    });
    
   $("#btn_angel").click(function(){
       $("#angellyrics").show("fast", function(){});
       $("#uulitinlyrics").hide("fast", function(){});
       $("#moonlyrics").hide("fast", function(){});         
    });
    
   $("#btn_uulitin").click(function(){
       $("#angellyrics").hide("fast", function(){});
       $("#uulitinlyrics").show("fast", function(){});
       $("#moonlyrics").hide("fast", function(){});    
    });
    
   $("#btn_moon").click(function(){
       $("#angellyrics").hide("fast", function(){});
       $("#uulitinlyrics").hide("fast", function(){});
       $("#moonlyrics").show("fast", function(){});     
    });        
 
    
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
    
    
   function defaultAbout(){
        $("#adultimage").css("opacity", "1");    
        $("#boyimage").css("opacity", "1");
        $("#teenagerimage").css("opacity", "1");
        $(".adult").hide("slow", function(){});
        $(".boy").hide("slow", function(){});
        $(".teenager").hide("slow", function(){});
   }
    
    function defaultProjects(){
        $(".featured").hide("slow", function(){});
        $(".academic").hide("slow", function(){}); // Hide Academic by default now
        $(".professional").hide("slow", function(){});
        $(".personal").hide("slow", function(){});
        $("#link2Featured").addClass("btnNonActive");
        $("#link2Academic").addClass("btnNonActive"); // Academic button inactive by default
        $("#link2Professional").addClass("btnNonActive");
        $("#link2Personal").addClass("btnNonActive"); 
        $("#hartnell").hide("fast", function () {});
        $("#csumb").hide("fast", function () {});
        $("#capella").hide("fast", function () {});
        $("#associate").css("opacity", "1");
        $("#bachelors").css("opacity", "1");
        $("#graduate").css("opacity", "1"); 
        hideFeaturedProjects();
        hideAcademicProjects();
        hideProProjects();
        hideLyricsProjects();
        hideSpecializationSection();
    }
    
    function hideSpecializationSection(){
        $("#specialization").hide("fast", function(){});
        $(".jumbotron-before-specialization").hide("fast", function(){});
    }
    
     function hideFeaturedProjects(){
        $("#nostradmsxdiv").hide("fast", function(){});
        $("#redboxdiv").hide("fast", function(){});
        $("#nostradmsxbtn").removeClass("totiebtnActive", function(){});
        $("#redboxbtn").removeClass("totiebtnActive", function(){});    
     }
    
    function hideAcademicProjects(){
        $("#hartnellprojects").hide("fast", function(){});
        $("#hartnellcourses").hide("fast", function(){});
        $("#csumbprojects").hide("fast", function(){});
        $("#csumbcourses").hide("fast", function(){}); 
        $("#capellaprojects").hide("fast", function(){});
        $("#capellacourses").hide("fast", function(){});
        $("#hartnellcoursesbtn").removeClass("totiebtnActive", function(){});
        $("#hartnellprojectsbtn").removeClass("totiebtnActive", function(){});     
        $("#csumbcoursesbtn").removeClass("totiebtnActive", function(){});
        $("#csumbprojectsbtn").removeClass("totiebtnActive", function(){});             
        $("#capellacoursesbtn").removeClass("totiebtnActive", function(){});
        $("#capellaprojectsbtn").removeClass("totiebtnActive", function(){});             

    }
    
     function hideProProjects(){
        $("#nostradmsxdiv").hide("fast", function(){});
        $("#redboxdiv").hide("fast", function(){});
        $("#nostradmsxbtn").removeClass("totiebtnActive", function(){});
        $("#redboxbtn").removeClass("totiebtnActive", function(){});    
     }

     // Click outside handler for professional project showcases
     $(document).on('click', function(e) {
        // Check if click is outside the showcase divs and buttons
        if (!$(e.target).closest('#nostradmsxdiv, #redboxdiv, #nostradmsxbtn, #redboxbtn').length) {
            // If either showcase is currently visible, hide them
            if ($("#nostradmsxdiv").is(":visible") || $("#redboxdiv").is(":visible")) {
                hideProProjects();
            }
        }
     });
    
     function hideLyricsProjects(){    
       $("#angellyrics").hide("fast", function(){});
       $("#uulitinlyrics").hide("fast", function(){});
       $("#moonlyrics").hide("fast", function(){});
     }

     function hideAllProjectTabs(){
        $(".featured").hide("fast", function(){});
        $(".academic").hide("fast", function(){});
        $(".professional").hide("fast", function(){});
        $(".personal").hide("fast", function(){});
        $(".certifications").hide("fast", function(){});
        $("#link2Featured").addClass("btnNonActive");
        $("#link2Academic").addClass("btnNonActive");
        $("#link2Professional").addClass("btnNonActive");
        $("#link2Personal").addClass("btnNonActive");
        $("#link2Certifications").addClass("btnNonActive");
        $("#hartnell").hide("fast", function () {});
        $("#csumb").hide("fast", function () {});
        $("#capella").hide("fast", function () {});
        $("#associate").css("opacity", "1");
        $("#bachelors").css("opacity", "1");
        $("#graduate").css("opacity", "1");
        hideFeaturedProjects();
        hideAcademicProjects();
        hideProProjects();
        hideLyricsProjects();
     }

     function showAcademicTab(){
        $(".featured").hide("fast", function(){});
        $(".academic").show("fast", function(){});
        $(".professional").hide("fast", function(){});
        $(".personal").hide("fast", function(){});
        $(".certifications").hide("fast", function(){});
        $("#link2Featured").addClass("btnNonActive");
        $("#link2Academic").removeClass("btnNonActive");
        $("#link2Professional").addClass("btnNonActive");
        $("#link2Personal").addClass("btnNonActive");
        $("#link2Certifications").addClass("btnNonActive");
        $("#hartnell").hide("fast", function () {});
        $("#csumb").hide("fast", function () {});
        $("#capella").hide("fast", function () {});
        $("#associate").css("opacity", "1");
        $("#bachelors").css("opacity", "1");
        $("#graduate").css("opacity", "1");
        hideFeaturedProjects();
        hideAcademicProjects();
        hideProProjects();
        hideLyricsProjects();
     }

// Certifications Slideshow functionality
let currentCertSlideIndex = 0;
let certSlides = [];
let certificationsData = [];
let certsProjectsMapping = {};

// Load and parse meta_html_css.txt to create title-to-image mapping
function loadCertsProjectsMapping() {
  return fetch('./meta_html_css.txt')
    .then(response => response.text())
    .then(content => {
      const lines = content.split('\n');
      let currentEntry = {};
      
      lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('Name:')) {
          // Save previous entry if complete
          if (currentEntry.name && currentEntry.app) {
            certsProjectsMapping[currentEntry.name.toLowerCase()] = currentEntry.app.replace('certs_project/', 'certs_projects/');
          }
          currentEntry = { name: line.substring(5).trim() };
        } else if (line.startsWith('app:')) {
          currentEntry.app = line.substring(4).trim();
        } else if (line.startsWith('url:')) {
          currentEntry.url = line.substring(4).trim();
        } else if (line === '' && currentEntry.name && currentEntry.app) {
          // End of entry
          certsProjectsMapping[currentEntry.name.toLowerCase()] = currentEntry.app.replace('certs_project/', 'certs_projects/');
          currentEntry = {};
        }
      });
      
      // Don't forget the last entry
      if (currentEntry.name && currentEntry.app) {
        certsProjectsMapping[currentEntry.name.toLowerCase()] = currentEntry.app.replace('certs_project/', 'certs_projects/');
      }
      
      console.log('Loaded certs projects mapping:', certsProjectsMapping);
      return certsProjectsMapping;
    })
    .catch(error => {
      console.error('Error loading meta_html_css.txt:', error);
      return {};
    });
}

// Function to find matching image for a project title
function findImageForTitle(title) {
  const lowerTitle = title.toLowerCase();
  
  // Direct title matches
  for (const [mappedTitle, imagePath] of Object.entries(certsProjectsMapping)) {
    if (lowerTitle === mappedTitle) {
      return imagePath;
    }
  }
  
  // Specific matches for Meta/Coursera HTML CSS project
  if (lowerTitle.includes('meta') && (lowerTitle.includes('html') || lowerTitle.includes('css'))) {
    return 'certs_projects/readme_wholepicture.jpg'; // Use the Little Lemon image for Meta HTML/CSS
  }
  
  // Specific matches based on project keywords
  if (lowerTitle.includes('python') && lowerTitle.includes('windows')) {
    return 'certs_projects/00_helloworld_code.png'; // Generic programming image
  }
  
  if (lowerTitle.includes('android') && lowerTitle.includes('court')) {
    return 'certs_projects/Capture.PNG'; // Generic mobile app image
  }
  

  
  // Ultimate fallback - use a generic project image
  return 'certs_projects/meta_web_development.png';
}

// Function to get additional project information for Read More content
function getAdditionalProjectInfo(title) {
  const lowerTitle = title.toLowerCase();
  
  // Match based on project title keywords
  if (lowerTitle.includes('meta') && (lowerTitle.includes('html') || lowerTitle.includes('css'))) {
    return `
      <h4 style="color: #007bff; margin-bottom: 15px; text-align: left;">Technologies Used</h4>
      <p style="text-align: left; font-size: inherit; line-height: inherit;"><strong>HTML5, CSS3, Flexbox, Grid Layout</strong></p>
      
      <h4 style="color: #007bff; margin-bottom: 15px; margin-top: 20px; text-align: left;">Key Features</h4>
      <ul style="margin-left: 20px; text-align: left; font-size: inherit; line-height: inherit;">
        <li>Responsive design</li>
        <li>Semantic HTML</li>
        <li>Modern CSS techniques</li>
      </ul>
      
      <h4 style="color: #007bff; margin-bottom: 15px; margin-top: 20px; text-align: left;">Learning Outcomes</h4>
      <p style="text-align: left; font-size: inherit; line-height: inherit;">Advanced CSS selectors, animations, and responsive web design principles</p>
    `;
  }
  
  if (lowerTitle.includes('python') && lowerTitle.includes('windows')) {
    return `
      <h4 style="color: #007bff; margin-bottom: 15px; text-align: left;">Technologies Used</h4>
      <p style="text-align: left; font-size: inherit; line-height: inherit;"><strong>Python, Windows API, ctypes library</strong></p>
      
      <h4 style="color: #007bff; margin-bottom: 15px; margin-top: 20px; text-align: left;">Key Features</h4>
      <ul style="margin-left: 20px; text-align: left; font-size: inherit; line-height: inherit;">
        <li>Direct system calls</li>
        <li>Process management</li>
        <li>Native Windows integration</li>
      </ul>
      
      <h4 style="color: #007bff; margin-bottom: 15px; margin-top: 20px; text-align: left;">Learning Outcomes</h4>
      <p style="text-align: left; font-size: inherit; line-height: inherit;">Low-level programming, system architecture, API interaction</p>
    `;
  }
  
  if (lowerTitle.includes('android') && lowerTitle.includes('court')) {
    return `
      <h4 style="color: #007bff; margin-bottom: 15px; text-align: left;">Technologies Used</h4>
      <p style="text-align: left; font-size: inherit; line-height: inherit;"><strong>Java, Android SDK, XML Layouts</strong></p>
      
      <h4 style="color: #007bff; margin-bottom: 15px; margin-top: 20px; text-align: left;">Key Features</h4>
      <ul style="margin-left: 20px; text-align: left; font-size: inherit; line-height: inherit;">
        <li>Interactive UI</li>
        <li>State management</li>
        <li>Basketball scoring system</li>
      </ul>
      
      <h4 style="color: #007bff; margin-bottom: 15px; margin-top: 20px; text-align: left;">Learning Outcomes</h4>
      <p style="text-align: left; font-size: inherit; line-height: inherit;">Mobile app development, Android lifecycle, UI/UX design</p>
    `;
  }
  
  // Default content for other projects
  return `
    <h4 style="color: #007bff; margin-bottom: 15px; text-align: left;">Project Details</h4>
    <p style="text-align: left; font-size: inherit; line-height: inherit;">This project showcases various programming concepts and technologies. Click "View on GitHub" to explore the source code and learn more about the implementation details.</p>
    
    <h4 style="color: #007bff; margin-bottom: 15px; margin-top: 20px; text-align: left;">Explore More</h4>
    <p style="text-align: left; font-size: inherit; line-height: inherit;">Visit the GitHub repository to see the complete codebase, documentation, and additional project information.</p>
  `;
}

// Parse mooc_projects.txt content into structured data
function parseMoocProjectsData(content) {
  const projects = [];
  const lines = content.split('\n');
  let currentProject = {};
  
  lines.forEach(line => {
    line = line.trim();
    
    if (line === '') {
      // Empty line might indicate end of project
      if (currentProject.title && currentProject.githubUrl && currentProject.image1) {
        projects.push({...currentProject});
      }
      // Reset for potential new project
      if (Object.keys(currentProject).length > 3) {
        currentProject = {};
      }
    } else if (line.includes(':')) {
      const colonIndex = line.indexOf(':');
      const key = line.substring(0, colonIndex).trim().toLowerCase();
      const value = line.substring(colonIndex + 1).trim();
      
      if (key === 'title') {
        // Start of new project
        if (currentProject.title && currentProject.githubUrl && currentProject.image1) {
          projects.push({...currentProject});
        }
        currentProject = { title: value };
      } else if (key === 'github url') {
        currentProject.githubUrl = value;
      } else if (key === 'image 1') {
        currentProject.image1 = value;
      } else if (key === 'image 2') {
        currentProject.image2 = value;
      } else if (key === 'description') {
        currentProject.description = value;
      } else if (key === 'actual site') {
        currentProject.actualSite = value;
      } else if (key === 'read more' || key === 'read more:') {
        currentProject.readMore = value;
      }
    }
  });
  
  // Don't forget the last project
  if (currentProject.title && currentProject.githubUrl && currentProject.image1) {
    projects.push(currentProject);
  }
  
  console.log('Parsed projects:', projects);
  return projects;
}

// Load certifications data from mooc_projects.txt
function loadCertificationsData() {
  console.log('Loading certifications data...');
  
  // First load the certs projects mapping
  loadCertsProjectsMapping()
    .then(() => {
      // Then load the mooc projects data
      return fetch('./mooc_projects.txt');
    })
    .then(response => {
      console.log('Fetch response:', response);
      return response.text();
    })
    .then(content => {
      console.log('File content loaded, length:', content.length);
      certificationsData = parseMoocProjectsData(content);
      console.log('Loaded certifications data:', certificationsData);
      loadCertSlides();
    })
    .catch(error => {
      console.error('Error loading mooc_projects.txt:', error);
    });
}

// Load slides dynamically based on parsed data
function loadCertSlides() {
  const slidesContainer = document.getElementById('certificationsSlides');
  const thumbnailContainer = document.getElementById('certThumbnailContainer');
  
  if (!slidesContainer || !thumbnailContainer) {
    console.error('Certifications slideshow containers not found');
    return;
  }

  console.log('Loading certification slides:', certificationsData.length, 'projects');

  // Clear existing content
  slidesContainer.innerHTML = '';
  thumbnailContainer.innerHTML = '';
  certSlides = [];

  certificationsData.forEach((project, index) => {
    // Find the appropriate local image for this project
    const localImage = findImageForTitle(project.title);
    console.log(`Project "${project.title}" mapped to image: ${localImage}`);
    
    // Create slide
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('cert-slides');

    // Create slide content
    const slideContent = document.createElement('div');
    slideContent.classList.add('cert-slide-content');
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;
    titleElement.style.textAlign = 'center';
    titleElement.style.marginBottom = '15px';
    titleElement.style.color = '#333';
    titleElement.style.fontSize = '20px';
    titleElement.style.fontWeight = 'bold';
    
    // Add responsive styling for titles on smaller devices
    titleElement.style.cssText += `
      @media (max-width: 768px) {
        font-size: 14px !important;
        margin-bottom: 10px !important;
      }
      @media (max-width: 480px) {
        font-size: 12px !important;
        margin-bottom: 8px !important;
      }
    `;
    
    slideContent.appendChild(titleElement);

    const img = document.createElement('img');
    img.src = localImage; // Use local image instead of project.image1
    img.style.cursor = 'pointer';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.title = 'Click to view GitHub repository';
    img.onerror = function() {
      console.error('Failed to load image:', localImage);
      // Create a placeholder if image fails to load
      const placeholder = document.createElement('div');
      placeholder.style.width = '300px';
      placeholder.style.height = '200px';
      placeholder.style.backgroundColor = '#f0f0f0';
      placeholder.style.display = 'flex';
      placeholder.style.alignItems = 'center';
      placeholder.style.justifyContent = 'center';
      placeholder.style.margin = '0 auto';
      placeholder.style.border = '2px dashed #ccc';
      placeholder.style.borderRadius = '8px';
      placeholder.textContent = 'Image not available';
      placeholder.style.cursor = 'pointer';
      placeholder.onclick = () => window.open(project.githubUrl, '_blank');
      img.parentNode.replaceChild(placeholder, img);
    };
    img.onclick = () => window.open(project.githubUrl, '_blank');
    slideContent.appendChild(img);
    
    const descElement = document.createElement('p');
    descElement.textContent = project.description;
    descElement.style.marginTop = '20px';
    descElement.style.textAlign = 'justify';
    descElement.style.lineHeight = '1';
    descElement.style.fontSize = '12px';
    descElement.style.color = '#555';
    
    // Add responsive styling for smaller devices
    descElement.style.cssText += `
      @media (max-width: 768px) {
        font-size: 12px !important;
        line-height: 1 !important;
        text-align: left !important;
        padding: 0 12px !important;
      }
      @media (max-width: 480px) {
        font-size: 13px !important;
        line-height: 1.4 !important;
        padding: 0 5px !important;
      }
    `;
    
    slideContent.appendChild(descElement);
    
    // Add GitHub link button and Read More button
    const linkContainer = document.createElement('div');
    linkContainer.classList.add('project-btn-container');
    
    const githubLink = document.createElement('a');
    githubLink.href = project.githubUrl;
    githubLink.target = '_blank';
    githubLink.textContent = 'View on GitHub';
    githubLink.classList.add('project-btn', 'project-btn-github');
    
    const readMoreBtn = document.createElement('button');
    readMoreBtn.textContent = 'Read More';
    readMoreBtn.classList.add('project-btn', 'project-btn-readmore');
    
    linkContainer.appendChild(githubLink);
    linkContainer.appendChild(readMoreBtn);
    slideContent.appendChild(linkContainer);

    // Create the Read More content div (initially hidden)
    const readMoreContent = document.createElement('div');
    readMoreContent.classList.add('cert-read-more-content');
    readMoreContent.style.display = 'none';
    readMoreContent.style.marginTop = '20px';
    readMoreContent.style.padding = '20px';
    readMoreContent.style.backgroundColor = '#f8f9fa';
    readMoreContent.style.border = '1px solid #dee2e6';
    readMoreContent.style.borderRadius = '8px';
    readMoreContent.style.lineHeight = '1.6';
    
    // Add responsive styling for smaller devices
    readMoreContent.style.cssText += `
      @media (max-width: 768px) {
        padding: 15px 10px !important;
        font-size: 14px !important;
        line-height: 1.5 !important;
      }
      @media (max-width: 480px) {
        padding: 10px 5px !important;
        font-size: 13px !important;
        line-height: 1.4 !important;
      }
    `;
    
    // Get additional info for this project
    const additionalInfo = getAdditionalProjectInfo(project.title);
    readMoreContent.innerHTML = additionalInfo;
    
    slideContent.appendChild(readMoreContent);
    
    // Add click event to toggle the read more content
    readMoreBtn.onclick = function() {
      if (readMoreContent.style.display === 'none') {
        readMoreContent.style.display = 'block';
        readMoreBtn.textContent = 'Show Less';
      } else {
        readMoreContent.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
      }
    };
    
    slideDiv.appendChild(slideContent);
    slidesContainer.appendChild(slideDiv);

    // Create thumbnail using the same local image
    const thumb = document.createElement('img');
    thumb.src = localImage; // Use local image for thumbnail too
    thumb.classList.add('cert-thumb');
    thumb.style.cursor = 'pointer';
    thumb.title = project.title + ' - Click to view slide or Ctrl+Click for GitHub';
    thumb.onerror = function() {
      console.error('Failed to load thumbnail:', localImage);
      // Create a simple text thumbnail if image fails
      const textThumb = document.createElement('div');
      textThumb.classList.add('cert-thumb');
      textThumb.style.width = '80px';
      textThumb.style.height = '60px';
      textThumb.style.backgroundColor = '#f0f0f0';
      textThumb.style.display = 'flex';
      textThumb.style.alignItems = 'center';
      textThumb.style.justifyContent = 'center';
      textThumb.style.border = '2px solid #ccc';
      textThumb.style.borderRadius = '5px';
      textThumb.style.fontSize = '10px';
      textThumb.style.color = '#666';
      textThumb.style.cursor = 'pointer';
      textThumb.title = project.title + ' - Click to view slide or Ctrl+Click for GitHub';
      textThumb.textContent = project.title.substring(0, 8) + '...';
      textThumb.onclick = (event) => {
        if (event.ctrlKey || event.metaKey) {
          window.open(project.githubUrl, '_blank');
        } else {
          setCurrentCertSlide(index);
        }
      };
      thumb.parentNode.replaceChild(textThumb, thumb);
    };
    thumb.onclick = (event) => {
      if (event.ctrlKey || event.metaKey) {
        window.open(project.githubUrl, '_blank');
      } else {
        setCurrentCertSlide(index);
      }
    };
    thumbnailContainer.appendChild(thumb);

    certSlides.push(slideDiv);
  });

  console.log('Loaded', certSlides.length, 'certification slides');
  updateCertSlideCounter();
  
  // Show first slide
  if (certSlides.length > 0) {
    showCertSlide(0);
  }
}

function showCertSlide(index) {
  console.log('showCertSlide called with index:', index, 'certSlides.length:', certSlides.length);
  
  if (index >= certSlides.length) {
    currentCertSlideIndex = 0;
  } else if (index < 0) {
    currentCertSlideIndex = certSlides.length - 1;
  } else {
    currentCertSlideIndex = index;
  }

  console.log('Setting currentCertSlideIndex to:', currentCertSlideIndex);

  certSlides.forEach((slide, i) => {
    slide.style.display = i === currentCertSlideIndex ? 'block' : 'none';
  });
  
  // Update thumbnail highlighting
  const thumbnails = document.querySelectorAll('.cert-thumb');
  console.log('Found', thumbnails.length, 'certification thumbnails');
  
  thumbnails.forEach((thumb, i) => {
    if (i === currentCertSlideIndex) {
      thumb.classList.add('current-cert-thumb');
      console.log('Highlighting certification thumbnail', i);
    } else {
      thumb.classList.remove('current-cert-thumb');
    }
  });
  
  updateCertSlideCounter();
}

function nextCertSlide() {
  showCertSlide(currentCertSlideIndex + 1);
}

function prevCertSlide() {
  showCertSlide(currentCertSlideIndex - 1);
}

function setCurrentCertSlide(index) {
  showCertSlide(index);
}

function updateCertSlideCounter() {
  const currentSlideEl = document.getElementById('certCurrentSlide');
  const totalSlidesEl = document.getElementById('certTotalSlides');
  if (currentSlideEl && totalSlidesEl) {
    currentSlideEl.innerText = currentCertSlideIndex + 1;
    totalSlidesEl.innerText = certSlides.length.toString();
  }
}

// Initialize the certifications slideshow
function initializeCertificationsSlideshow() {
  console.log('Initializing certifications slideshow');
  
  // Load the data and slides
  loadCertificationsData();
}

// Featured slideshow variables
let currentFeaturedSlideIndex = 0;
let featuredSlides = [];

// Featured projects data - based on the original static grid layout
const featuredProjectsData = [
  {
    title: "Rhythm Brown Box",
    image: "./images/featured/drummachine.png",
    url: "https://roylouisgarcia.github.io/portfolio/portfolioentries/currentprojects/rhythmbrownbox/"
  },
  {
    title: "Recorded Bliss",
    image: "./images/featured/recordedbliss.png",
    url: "https://roylouisgarcia.github.io/portfolio/portfolioentries/rb/"
  },
  {
    title: "Summer Beads",
    image: "./images/featured/summerbeads.png",
    url: "https://roylouisgarcia.github.io/portfolio/portfolioentries/personal/summerbeads/"
  },
  {
    title: "Rock Paper Scissors",
    image: "./images/featured/rockerpaperscissors.png",
    url: "https://roylouisgarcia.github.io/portfolio/portfolioentries/currentprojects/rockpaperscissors/"
  },
  {
    title: "Heathwood Hardware Inc. (HHI)",
    image: "./images/featured/hhi.png",
    url: "https://roylouisgarcia.github.io/portfolio/portfolioentries/academic/hhi/index.html"
  },
  {
    title: "Flames Calculator - Input",
    image: "./images/featured/flames.png",
    url: "https://roylouisgarcia.github.io/portfolio/portfolioentries/currentprojects/flames/"
  },
  {
    title: "Flames Calculator - Results ",
    image: "./images/featured/flames2.png",
    url: "https://roylouisgarcia.github.io/portfolio/portfolioentries/currentprojects/flames/"
  },
  {
    title: "League of Legends - LUA template generator for LeaguePedia",
    image: "./images/featured/form2lua.png",
    url: "https://roylouisgarcia.github.io/portfolio/portfolioentries/personal/form2lua/"
  }
];

// Load featured slides dynamically
function loadFeaturedSlides() {
  const slidesContainer = document.getElementById('featuredSlides');
  const thumbnailContainer = document.getElementById('featuredThumbnailContainer');
  
  if (!slidesContainer || !thumbnailContainer) {
    console.error('Featured slideshow containers not found');
    return;
  }

  console.log('Loading featured slides:', featuredProjectsData.length, 'projects');

  // Clear existing content
  slidesContainer.innerHTML = '';
  thumbnailContainer.innerHTML = '';
  featuredSlides = [];

  featuredProjectsData.forEach((project, index) => {
    // Create slide
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('featured-slides');

    // Create slide content
    const slideContent = document.createElement('div');
    slideContent.classList.add('featured-slide-content');
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;
    titleElement.style.textAlign = 'center';
    titleElement.style.marginBottom = '15px';
    titleElement.style.color = '#333';
    titleElement.style.fontSize = '20px';
    titleElement.style.fontWeight = 'bold';
    
    // Add responsive styling for titles on smaller devices
    titleElement.style.cssText += `
      @media (max-width: 768px) {
        font-size: 14px !important;
        margin-bottom: 10px !important;
      }
      @media (max-width: 480px) {
        font-size: 12px !important;
        margin-bottom: 8px !important;
      }
    `;
    
    slideContent.appendChild(titleElement);

    const img = document.createElement('img');
    img.src = project.image;
    img.style.cursor = 'pointer';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.title = 'Click to view project';
    img.onerror = function() {
      console.error('Failed to load image:', project.image);
      // Create a placeholder if image fails to load
      const placeholder = document.createElement('div');
      placeholder.style.width = '300px';
      placeholder.style.height = '200px';
      placeholder.style.backgroundColor = '#f0f0f0';
      placeholder.style.display = 'flex';
      placeholder.style.alignItems = 'center';
      placeholder.style.justifyContent = 'center';
      placeholder.style.margin = '0 auto';
      placeholder.style.border = '2px dashed #ccc';
      placeholder.style.borderRadius = '8px';
      placeholder.textContent = 'Image not available';
      placeholder.style.cursor = 'pointer';
      placeholder.onclick = () => window.open(project.url, '_blank');
      img.parentNode.replaceChild(placeholder, img);
    };
    img.onclick = () => window.open(project.url, '_blank');
    slideContent.appendChild(img);
    
    // Add link button
    const linkContainer = document.createElement('div');
    linkContainer.style.textAlign = 'center';
    linkContainer.style.marginTop = '20px';
    
    const projectLink = document.createElement('a');
    projectLink.href = project.url;
    projectLink.target = '_blank';
    projectLink.textContent = 'View Project';
    projectLink.style.display = 'inline-block';
    projectLink.style.padding = '10px 20px';
    projectLink.style.backgroundColor = '#007bff';
    projectLink.style.color = 'white';
    projectLink.style.textDecoration = 'none';
    projectLink.style.borderRadius = '5px';
    projectLink.style.transition = 'background-color 0.3s ease';
    projectLink.onmouseover = () => projectLink.style.backgroundColor = '#0056b3';
    projectLink.onmouseout = () => projectLink.style.backgroundColor = '#007bff';
    
    linkContainer.appendChild(projectLink);
    slideContent.appendChild(linkContainer);
    
    slideDiv.appendChild(slideContent);
    slidesContainer.appendChild(slideDiv);

    // Create thumbnail
    const thumb = document.createElement('img');
    thumb.src = project.image;
    thumb.classList.add('featured-thumb');
    thumb.style.cursor = 'pointer';
    thumb.title = project.title + ' - Click to view slide or Ctrl+Click to open project';
    thumb.onerror = function() {
      console.error('Failed to load thumbnail:', project.image);
      // Create a simple text thumbnail if image fails
      const textThumb = document.createElement('div');
      textThumb.classList.add('featured-thumb');
      textThumb.style.width = '80px';
      textThumb.style.height = '60px';
      textThumb.style.backgroundColor = '#f0f0f0';
      textThumb.style.display = 'flex';
      textThumb.style.alignItems = 'center';
      textThumb.style.justifyContent = 'center';
      textThumb.style.border = '2px solid #ccc';
      textThumb.style.borderRadius = '5px';
      textThumb.style.fontSize = '10px';
      textThumb.style.color = '#666';
      textThumb.style.cursor = 'pointer';
      textThumb.title = project.title + ' - Click to view slide or Ctrl+Click to open project';
      textThumb.textContent = project.title.substring(0, 8) + '...';
      textThumb.onclick = (event) => {
        if (event.ctrlKey || event.metaKey) {
          window.open(project.url, '_blank');
        } else {
          setCurrentFeaturedSlide(index);
        }
      };
      thumb.parentNode.replaceChild(textThumb, thumb);
    };
    thumb.onclick = (event) => {
      if (event.ctrlKey || event.metaKey) {
        window.open(project.url, '_blank');
      } else {
        setCurrentFeaturedSlide(index);
      }
    };
    thumbnailContainer.appendChild(thumb);

    featuredSlides.push(slideDiv);
  });

  console.log('Loaded', featuredSlides.length, 'featured slides');
  updateFeaturedSlideCounter();
  
  // Show first slide
  if (featuredSlides.length > 0) {
    showFeaturedSlide(0);
  }
}

function showFeaturedSlide(index) {
  console.log('showFeaturedSlide called with index:', index, 'featuredSlides.length:', featuredSlides.length);
  
  if (index >= featuredSlides.length) {
    currentFeaturedSlideIndex = 0;
  } else if (index < 0) {
    currentFeaturedSlideIndex = featuredSlides.length - 1;
  } else {
    currentFeaturedSlideIndex = index;
  }

  console.log('Setting currentFeaturedSlideIndex to:', currentFeaturedSlideIndex);

  featuredSlides.forEach((slide, i) => {
    slide.style.display = i === currentFeaturedSlideIndex ? 'block' : 'none';
  });
  
  // Update thumbnail highlighting
  const thumbnails = document.querySelectorAll('.featured-thumb');
  console.log('Found', thumbnails.length, 'featured thumbnails');
  
  thumbnails.forEach((thumb, i) => {
    if (i === currentFeaturedSlideIndex) {
      thumb.classList.add('current-featured-thumb');
      console.log('Highlighting featured thumbnail', i);
    } else {
      thumb.classList.remove('current-featured-thumb');
    }
  });
  
  updateFeaturedSlideCounter();
}

function nextFeaturedSlide() {
  showFeaturedSlide(currentFeaturedSlideIndex + 1);
}

function prevFeaturedSlide() {
  showFeaturedSlide(currentFeaturedSlideIndex - 1);
}

function setCurrentFeaturedSlide(index) {
  showFeaturedSlide(index);
}

function updateFeaturedSlideCounter() {
  const currentSlideEl = document.getElementById('featuredCurrentSlide');
  const totalSlidesEl = document.getElementById('featuredTotalSlides');
  if (currentSlideEl && totalSlidesEl) {
    currentSlideEl.innerText = currentFeaturedSlideIndex + 1;
    totalSlidesEl.innerText = featuredSlides.length.toString();
  }
}

// Initialize the featured slideshow
function initializeFeaturedSlideshow() {
  console.log('Initializing featured slideshow');
  
  // Load the featured slides
  loadFeaturedSlides();
}

});


// Hide .adult, .teenager, .boy when clicking outside #about
$(document).on('mousedown touchstart', function(event) {
  var $about = $('#about');
  if ($about.length && !$about.is(event.target) && $about.has(event.target).length === 0) {
    $('.adult, .teenager, .boy').hide('slow');
  }
});