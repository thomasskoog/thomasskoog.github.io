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

    if (scrollTop >= ($('#info05').offset().top + 300)) { /*(scrollTop >= (div3top + (div3h / 2)))*/
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
