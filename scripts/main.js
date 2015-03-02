var t = $("#anchor-point").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > t)
    {   
        $('#voice2').css({"border-bottom":"2px solid #f4f5f8"});
        $('#voice3').css({"border-bottom":"2px solid #2e375b"});
    }
});