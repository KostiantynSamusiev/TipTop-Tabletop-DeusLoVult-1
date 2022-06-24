let explenationContainer = document.querySelectorAll('.explanation');
let questionCOntainer = document.querySelectorAll('.custom-select');
let arrow = document.querySelectorAll('.dropdown-arrow');


//  Carousel
  $(function() {
      $('.carousel_slicker').slick({
        centerMode: true,
        dots: true,
        centerPadding: '200px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerMode: false,
              dots: false    
            }
          },
          {
            breakpoint: 1024,
            settings: {
              centerPadding: '100px'    
            }
          }
        ]
      });

  });



  
 //  Add css class to oped dropdown
for (let i=0; i<questionCOntainer.length; i++){
  questionCOntainer[i].onclick = function () {
    explenationContainer[i].classList.toggle('is-active');
    arrow[i].classList.toggle('rotate');
   

  };
}

  