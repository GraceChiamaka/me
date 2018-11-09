/* 
* scripts for activating owl carousle plugin
* toggling overlays displays
* 
*/


$(document).ready(function(){
    const carouselOverlay = () => {
        $(".item").mouseover(function(e){
            $(this).find(".portfolio-overlay").show();
        })
        $(".item").mouseleave(function(){
            $(this).find(".portfolio-overlay").hide();
        })
    }
    function portfolioOverlay () {
        const thumbnail = document.getElementsByClassName('projects');
        const overlay = document.getElementsByClassName('.portfolio-overlay');
        $('.projects').mouseover(function(ev) {
            const target= $(ev.currentTarget).closest('.projects').find('.portfolio-overlay').show();
        });
        $('.projects').mouseleave(function(ev) {
            const target = $(ev.currentTarget).closest('.projects').find('.portfolio-overlay').hide();
        });
        
    }
    carouselOverlay();
    portfolioOverlay();

    $('.about-carousel').owlCarousel({
        center: true,
        items:3,
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
        autoplay:true,
        loop:true,
        center: true,
        margin:3,
        responsive:{
            400:{
                items:1
            },
            600:{
                items:3
            },
            767:{
                items:2
            }
        }
    });
   
});
