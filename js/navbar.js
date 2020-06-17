let scroll = false;
let navbarHeight = 0;

$(window).scroll(function(e){ 
    let navbar = $('.homeNavbar'); 
    if(!scroll){
        navbarHeight = navbar.height() + 2 * parseInt(navbar.css("paddingTop"));
        scroll = true;
    }    
    // if ($(this).scrollTop() > 1000){ 
    //   $el.css({'position': 'fixed', 'top': '0px'}); 
    // }
    // if ($(this).scrollTop() < 200){
    //   $el.css({'position': 'static', 'top': '0px'}); 
    // } 

    console.log(navbarHeight);
    if($(this).scrollTop() >= ($(window).height() / 2) - navbarHeight){
        navbar.css("top", "0px");
        navbar.css("bottom", "initial");
        navbar.css("position", "fixed");
        navbar.css("font-size", "4vh");

    } else {
        navbar.css("bottom", "0px");
        navbar.css("top", "initial");
        navbar.css("position", "absolute");
        navbar.css("font-size", "5vh");

    }
  });