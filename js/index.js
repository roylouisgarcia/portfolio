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
    
  $("#link2Featured").click(function(){  
    $(".featured").show("fast", function(){});  
    $(".academic").hide("fast", function(){});
    $(".professional").hide("fast", function(){});
    $(".personal").hide("fast", function(){});
    $("#link2Featured").removeClass("btnNonActive");
    $("#link2Academic").addClass("btnNonActive");
    $("#link2Professional").addClass("btnNonActive");
    $("#link2Personal").addClass("btnNonActive");  
  });    
    
  
  $("#link2Academic").click(function(){    
    $(".featured").hide("fast", function(){});  
    $(".academic").show("fast", function(){});
    $(".professional").hide("fast", function(){});
    $(".personal").hide("fast", function(){});
    $("#link2Featured").addClass("btnNonActive");  
    $("#link2Academic").removeClass("btnNonActive");
    $("#link2Professional").addClass("btnNonActive");
    $("#link2Personal").addClass("btnNonActive");  
  });

  $("#link2Professional").click(function(){
    $(".featured").hide("fast", function(){});      
    $(".academic").hide("fast", function(){});
    $(".professional").show("fast", function(){});
    $(".personal").hide("fast", function(){});
    $("#link2Featured").addClass("btnNonActive");      
    $("#link2Academic").addClass("btnNonActive");
    $("#link2Professional").removeClass("btnNonActive");
    $("#link2Personal").addClass("btnNonActive");       
  });

  $("#link2Personal").click(function(){    
    $(".featured").hide("fast", function(){});      
    $(".academic").hide("fast", function(){});
    $(".professional").hide("fast", function(){});
    $(".personal").show("fast", function(){});
    $("#link2Featured").addClass("btnNonActive");      
    $("#link2Academic").addClass("btnNonActive");
    $("#link2Professional").addClass("btnNonActive");
    $("#link2Personal").removeClass("btnNonActive");       
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
        $("#link2Featured").addClass("btnNonActive");
        $("#link2Academic").addClass("btnNonActive");
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
     }

     function showAcademicTab(){
        $(".featured").hide("fast", function(){});
        $(".academic").show("fast", function(){});
        $(".professional").hide("fast", function(){});
        $(".personal").hide("fast", function(){});
        $("#link2Featured").addClass("btnNonActive");
        $("#link2Academic").removeClass("btnNonActive");
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
     }

});


// Hide .adult, .teenager, .boy when clicking outside #about
$(document).on('mousedown touchstart', function(event) {
  var $about = $('#about');
  if ($about.length && !$about.is(event.target) && $about.has(event.target).length === 0) {
    $('.adult, .teenager, .boy').hide('slow');
  }
});