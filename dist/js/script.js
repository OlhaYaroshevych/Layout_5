$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
        dots:true,
        slidesToShow:2,
        slidesToScroll:1,
		autoplay:false,
		autoplaySpeed: 15000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true
              }
            }
        ]
    });
});

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });



// //Підключення іншого файлу JS
//alert('Hello Gulp!');