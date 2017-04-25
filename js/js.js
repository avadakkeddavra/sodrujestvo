$(document).ready(function(){
    $('.slider-nav > a').on('click',function(e){
        e.preventDefault();
        var slide = $(this).attr('href').slice(1);
        console.log(slide);
        $('.slider-nav > a').removeClass('active');
        $(this).addClass('active');
        
        $('.slide').hide();
        $('#'+slide).fadeIn('slow');
    })
})