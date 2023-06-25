
$(document).ready(function(){
    $(".icon-box").on('click', function() {
        $(this).find('.icon').css({
            'top': '20px',
            'right': 'calc(50% - 40px)',
            'width': '80px',
            'height': '80px',
            'border-radius': '50%',
            'border': '3px solid rgb(255, 255, 255)'
        });
        $(this).find('.icon .fa').css({
            'font-size': '40px'
        });
        $(this).find('.text').css({
            'top': '100px',
            'opacity': '1'
        });
    });
});
