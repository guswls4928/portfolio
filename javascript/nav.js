function gohome(){
    $(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow"); 
    });
}
$(document).ready(function(){
    var windowheigh = window.innerHeight;
    $(".li-home").click(function(){
        $(function(){
            $("html, body").animate({ scrollTop: 0 }, "slow"); 
        });
    });
    $(".li-about").click(function(){
        $(function(){
            $("html, body").animate({ scrollTop: windowheigh*1.5}, "slow"); 
        });
    });
    $(".li-project").click(function(){
        $(function(){
            $("html, body").animate({ scrollTop: 0 }, "slow"); 
        });
    });
    $(".li-contact").click(function(){
        $(function(){
            $("html, body").animate({ scrollTop: 0 }, "slow"); 
        });
    });
});