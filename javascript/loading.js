$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

if($(window).load()){
    setTimeout(function(){
        $(".gauge").animate({ width: '39.4vh' }, "50");
        setTimeout(function(){
            $("#before").css({
                "opacity": "0"
            });
            $("#done").css({
                "opacity": "1"
            });
        }, 400);
        setTimeout(function(){
            $(".loading").fadeOut();
        }, 1000)
    }, 500)
}
else{
    $(".gauge").animate({ width: '10vh' }, "1000");
}