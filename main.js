let aboutSet =  $('#about').offset().top;

$(window).scroll(function(){
    let wScroll = $(window).scrollTop();

    if(wScroll > aboutSet -50) {
        $('#navbar').css('backgroundColor', 'red')
    } else {
        $('#navbar').css('backgroundColor', 'transparent')
    }
    
})