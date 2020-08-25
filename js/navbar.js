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

    // console.log($(this).scrollTop())
    // console.log(($(window).height() / 2) - navbarHeight);
    // console.log(screen.availHeight - (navbarHeight * 2))
    if($(this).scrollTop() >= (screen.availHeight - (navbarHeight * 2))){
        navbar.css("top", "0px");
        navbar.css("bottom", "initial");
        navbar.css("position", "fixed");
        navbar.css("font-size", "4vh");
        navbar.css("box-shadow", "0 0 10px var(--dark-bg-shadow)")

    } else {
        navbar.css("bottom", "0px");
        navbar.css("top", "initial");
        navbar.css("position", "absolute");
        navbar.css("font-size", "5vh");
        navbar.css("box-shadow", "0 0 10px var(--dark-bg-3)")
    }


  });