/**
 * Created by Thomas on 24/08/2015.
 */
$(window).on('scroll', function(){

    var scrollTop = $(this).scrollTop();

    /*
    var div1top = $('#div1').offset().top;
    var div2top = $('#div2').offset().top;
    var div3top = $('#div3').offset().top;
    var div4top = $('#div4').offset().top;
    */

    if (scrollTop >= 200){
        $('#info01').stop().animate({left:80}, 150);
    } else if (scrollTop < 200){
        $('#info01').stop().animate({left:'-100%'}, 250);
    }

    if (scrollTop >= $('#info01').offset().top){
        $('#info02').stop().animate({left:1300}, 150);
    } else if (scrollTop < $('#info01').offset().top){
        $('#info02').stop().animate({left:'100%'}, 150);
    }

    if (scrollTop >= $('#info02').offset().top){
        $('#info03').stop().animate({left: 80}, 150);
    } else if (scrollTop < $('#info02').offset().top){
        $('#info03').stop().animate({left:'-100%'}, 150);
    }

    if (scrollTop >= $('#info03').offset().top){
        $('#info04').stop().animate({left: 1300}, 150);
    } else if (scrollTop < $('#info03').offset().top){
        $('#info04').stop().animate({left:'100%'}, 150);
    }

    if (scrollTop >= $('#info04').offset().top + 200){
        $('#info05').stop().animate({left: 80}, 150);
    } else if (scrollTop < $('#info04').offset().top + 200){
        $('#info05').stop().animate({left:'-100%'}, 150);
    }

    if (scrollTop >= ($('#info05').offset().top + 300)) /*(scrollTop >= (div3top + (div3h / 2)))*/ {
        $('#info06').stop().animate({left: 1300}, 150);
    } else if (scrollTop < $('#info05').offset().top + 300){
        $('#info06').stop().animate({left:'100%'}, 150);
    }

    if (scrollTop >= $('#info06').offset().top + 200){
        $('#info07').stop().animate({left: 80}, 150);
    } else if (scrollTop < $('#info06').offset().top + 200){
        $('#info07').stop().animate({left:'-100%'}, 150);
    }

    if (scrollTop >= ($('#info07').offset().top + 400)){
        $('#info08').stop().animate({left: 1300}, 150);
    } else if (scrollTop < $('#info07').offset().top + 400){
        $('#info08').stop().animate({left:'100%'}, 150);
    }

    if (scrollTop >= $('#info08').offset().top){
        $('#info09').stop().animate({left: 80}, 150);
    } else if (scrollTop < $('#info08').offset().top){
        $('#info09').stop().animate({left:'-100%'}, 150);
    }
});

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('#end').show();
    } else {
        $('#end').hide();
    }
});

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
/*
        $('#rew').play();
*/
        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
/*
$('rewBtn').addEventListener('click', function(){
    $('rew').play();
});*/


    // $('.info01').animate({width:'toggle'}, 350);
    //transform()


// att göra:
// - kan wScroll jämföra med div2-scrollTop istället för att räkna pixlar?
// - infoblad flyger in från höger och vänster
// -

/*
==============================
:: VILLEs kodsnutt ::
=========================

 $(window).on('scroll', function () {

 var windowHeight = $(window).height();
 var windowWidth = $(window).width();

 // Funkande kod nedan!

 $('.skillClass').each(function()
 {
 var scrollTop = $(window).scrollTop(),
 elementOffsetTop = $(this).offset().top,
 distanceTop   = (elementOffsetTop - scrollTop);
 var elementHeight = $(this).innerHeight(); // Höjden på elementet. I det här fallet Den vita diven som ska flyga in
 var distanceBottom = (windowHeight - (distanceTop+elementHeight));


 /* var animationSpeed = distanceBottom/4;
 var endValue = $(this).find('.skillLevel').html()*10;

$("#distanceBottom").html(distanceBottom);

if(distanceBottom>100) // Hur långt från botten ska animationen börja?!
{
    //$(this).find('.mySkill').addClass("animatedSkill-Bar");
    $(this).find('.mySkill').css({"width": jQuery(this).attr('data-percent'), "transition":"width 2s ease-in-out;"});
    //        $(this).css({"opacity":$opacity, "margin-left":$scrollInFromRight});
}
else if(distanceBottom<-100)
{
    $(this).find('.mySkill').css({"width":0});
}
});

// Nedan är animation för erfarenhetsbarsen som flyger in!

if(windowWidth>560) // Animationen såg för taskig ut på smartphones.
{
    // Scrolla in Diven från Vänster

    $('.slide-left').each(function()
    {
        var scrollTop = $(window).scrollTop(),
            elementOffsetTop = $(this).offset().top,
            distanceTop   = (elementOffsetTop - scrollTop);
        var elementHeight = $(this).innerHeight(); // Höjden på elementet. I det här fallet Den vita diven som ska flyga in
        var distanceBottom = (windowHeight - (distanceTop+elementHeight));
        var $opacity = (distanceBottom+50)/200; // Täljaren bestämmer när på inscrollet som diven ska visas och nämnaren hur snabbt animationen ska gå.

        if($opacity>= 0.999)
        {
            $opacity = 0.999; // Flaggan försvinner av jätteoklar anledning när opacity sätts till 1. Kan bero på position absolute?
        }

        var $scrollInFromLeft = (distanceBottom-200)*2; // Öka till cirka (distanceBottom-200)*4;

        if(windowWidth<1025 && $scrollInFromLeft>=0)
        {
            $scrollInFromLeft = 0;
        }
        if($scrollInFromLeft>=15)
        {
            $scrollInFromLeft = 15;
        }
        $(this).css({"opacity":$opacity, "margin-left":$scrollInFromLeft});
    });
    // Scrolla in Diven från Höger
    $('.slide-right').each(function()
    {
        var scrollTop = $(window).scrollTop(),
            elementOffsetTop = $(this).offset().top,
            distanceTop   = (elementOffsetTop - scrollTop);
        var elementHeight = $(this).innerHeight(); // Höjden på elementet. I det här fallet Den vita diven som ska flyga in
        var distanceBottom = (windowHeight - (distanceTop+elementHeight));
        var $opacity = (distanceBottom+50)/200; // Täljaren bestämmer när på inscrollet som diven ska visas och nämnaren hur snabbt animationen ska gå.

        if($opacity>= 0.999)
        {
            $opacity = 0.999; // Flaggan försvinner av jätteoklar anledning när opacity sätts till 1.
        }

        var $scrollInFromRight = ((distanceBottom-200)*2)*-1;

        if(windowWidth<1025 && $scrollInFromRight<=0)
        {
            $scrollInFromRight = 0;
        }
        if($scrollInFromRight<=63 && windowWidth>=1025)
        {
            $scrollInFromRight = 63;
        }
        $(this).css({"opacity":$opacity, "margin-left":$scrollInFromRight});
    });
    // Animera ikonens opacity
    $('.fadeIn-Icon').each(function()
    {
        var scrollTop = $(window).scrollTop(),
            elementOffsetTop = $(this).offset().top,
            distanceTop   = (elementOffsetTop - scrollTop);
        var elementHeight = $(this).innerHeight(); // Höjden på elementet. I det här fallet Den vita diven som ska flyga in
        var distanceBottom = (windowHeight - (distanceTop+elementHeight));
        var $opacity = (distanceBottom)/280; // Täljaren bestämmer när på inscrollet som diven ska visas och nämnaren hur snabbt animationen ska gå.
        $(this).css({"opacity":$opacity});
    });

} // End if statment för att kolla skärmbredd
});

});

==============================
*/


/*
// /slidetoggle
$('.slide-left-right-toggle').click(function(){
    $('.fx4').animate({width:'toggle'}, 350);
});

//slide in from right
$('.slideinright').click(function(){
    $('.fx5').animate({left:0}, 350);
});

//slide in from left
$('.slideinleft').click(function(){
    $('.fx6').animate({left: 0}, 350);
});
*/


/*
==============================
*/


/*
$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    $('#tape').css({
        'transform' : 'translate(0px, ' + wScroll / 1.5 +'%)'
    });
});
*/