if($(window).load()){
    setTimeout(function(){
        $(".gauge").animate({ width: '39vh' }, "50");
        setTimeout(function(){
            $("#before").css({
                "opacity": "0"
            });
            $("#done").css({
                "opacity": "1"
            });
            if(!!document.getElementById('intro1')==false){
                $("header").append('<h1 class="intro" style="opacity: 1;" id="intro1"><i id="dancing-script">Carpe diem</i><br>오늘에 최선을 다해라</h1>');
            };
            if(!!document.getElementById('intro2')==false){
                $("header").append('<h1 class="intro" style="opacity: 0;" id="intro2">Thanks to your visit<br>Have a nice day</h1>');
            };
        }, 400);
        setTimeout(function(){
            $(window).scrollTop(0);
            $(".loading").fadeOut();
        }, 1000)
    }, 500)
}
else{
    $(".gauge").animate({ width: '10vh' }, "1000");
}