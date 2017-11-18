// galleryScript

var current_album = gallery.albums[0]
var current_photo = gallery.albums[0].photos[0]

  $('#album-tab').click(function(){
		$(".nav .active").removeClass("active");
		$("#album-tab").addClass("active");
		
		  // Grab the template script
		  var theTemplateScript = $("#gallery-book").html();

		  // Compile the template
		  var theTemplate = Handlebars.compile(theTemplateScript);


		  // Pass our data to the template
		  var theCompiledHtml = theTemplate(gallery);

		  // Add the compiled html to the page
		  $('#content').html(theCompiledHtml);
		  
			$('.goPhotos').click(function(){
					$(".nav .active").removeClass("active");
					$("#photo-tab").addClass("active");
					
					var current = $(this).data("id");
					
					current_album = gallery.albums[current];
					$('#photo-tab').click();
			  });		  
		
  });
  
  $('#photo-tab').click(function(){
		$(".nav .active").removeClass("active");
		$("#photo-tab").addClass("active");
		
		  // Grab the template script
		  var theTemplateScript = $("#album-book").html();

		  // Compile the template
		  var theTemplate = Handlebars.compile(theTemplateScript);
		  
		  
		  // Pass our data to the template
		  var theCompiledHtml = theTemplate(current_album);

		  // Add the compiled html to the page
		  $('#content').html(theCompiledHtml);
		  
		  $('.goPhoto').click(function(){
					$(".nav .active").removeClass("active");
					$("#photo-tab").addClass("active");
					
					var current = $(this).data("id");
					current_photo = current_album.photos[current];
					
					  // Grab the template script
					  theTemplateScript = $("#photo-book").html();

					  // Compile the template
					  theTemplate = Handlebars.compile(theTemplateScript);
					  
					  
					  // Pass our data to the template
					  theCompiledHtml = theTemplate(current_photo);

					  // Add the compiled html to the page
					  $('#content').html(theCompiledHtml);
					  
					$('html, body').animate({
						scrollTop: $(".thumbnail").offset().top
					}, 500);
			  });		
		  
  });
  
  $('#slide-tab').click(function(){
		$(".nav .active").removeClass("active");
		$("#slide-tab").addClass("active");
		
		  // Grab the template script
		  var theTemplateScript = $("#slide-book").html();

		  // Compile the template
		  var theTemplate = Handlebars.compile(theTemplateScript);
		  
		  
		  // Pass our data to the template
		  var theCompiledHtml = theTemplate(current_album);

		  // Add the compiled html to the page
		  $('#content').html(theCompiledHtml);

		showSlides(slideIndex);	
  });
  
  
  
			var slideIndex = 1;
			function plusSlides(n) {
			  showSlides(slideIndex += n);
			}

			function currentSlide(n) {
			  showSlides(slideIndex = n);
			}

			function showSlides(n) {
			  var i;
			  var slides = document.getElementsByClassName("mySlides");
			  var dots = document.getElementsByClassName("dot");
			  if (n > slides.length) {slideIndex = 1} 
			  if (n < 1) {slideIndex = slides.length}
			  for (i = 0; i < slides.length; i++) {
				  slides[i].style.display = "none"; 
			  }
			  for (i = 0; i < dots.length; i++) {
				  dots[i].className = dots[i].className.replace(" active", "");
			  }
			  slides[slideIndex-1].style.display = "block"; 
			  dots[slideIndex-1].className += " active";
			}
  
			