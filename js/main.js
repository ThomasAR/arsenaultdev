$(document).ready(function() {
    $("#navbarPlaceholder").load("/navbar/navbar.html");

    var controller = new ScrollMagic.Controller(
        {
            // addIndicators: true
        }
    );

    new ScrollMagic.Scene({
        triggerElement: '#about-me-bio',
        duration: 1000,
        offset: 500
    })
        // .setPin("#home-polygon")
        .setClassToggle("#about-me-bio", "invisible")
        .addTo(controller)

    console.log(controller)
})

$(window).scroll(function(e){ 
    $(".cube").css("margin-top", `-${$(this).scrollTop()}`);
    })