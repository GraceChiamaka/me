$(document).ready(function(){
    $('.about-carousel').owlCarousel({
       
        center: true,
        items:1,
        autoplay:true,
        loop:true,
        margin:3,
        responsive:{
            600:{
                items:1
            }
        }
    });

    $('.portfolio-carousel').owlCarousel({
        items:3,
        autoplay:false,
        loop:false,
        nav:false,
        margin:10,
        responsive:{
            400:{
                items:1
            },
            600:{
                items:3
            }
        }

    });

    $(".item").mouseover(function(e){
        $(this).find(".portfolio-overlay").show();
    })
    $(".item").mouseleave(function(){
        $(this).find(".portfolio-overlay").hide();
    })
});
