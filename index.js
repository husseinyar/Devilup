$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
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
  })
  
  const Freelancers = document.getElementById("Freelancers")
  Freelancers.addEventListener("click", function() {
    document.getElementById("servicepag").style.display = "block";
    document.getElementById("main").style.display = "none";
  
    document.getElementById("consultantsClick").style.display = "none";

  });


  const backtoService  = document.getElementById("backtoService")

  backtoService.addEventListener("click", function() {
    document.getElementById("servicepag").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementById("consultantsClick").style.display = "block";
    document.getElementById("froms-consultants").style.display = "none";
  });

  const consultantsClick = document.getElementById("consultantsClick");

  consultantsClick.addEventListener("click", function() {
    document.getElementById("main").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("froms-consultants").style.display = "block";
    document.getElementById("consultantsClick").style.display = "none";
    
  });
  function myFunction() {
    
    document.getElementById("froms-consultant").submit();

    alert("Tanks you for yor time")

  }