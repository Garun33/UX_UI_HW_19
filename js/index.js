$(document).ready(function(){
    var left = $(".fadeonload").offset().left;
  $(".fadeonload").css({left: '-250px'});
    $(".fadeonload").animate({left: left},'slow');
    // $(".fadeonload").animate({left: '250px'});
    // $(".fadeonload").each(function(i) {
    //     $(this).animate({"opacity":"1", "margin-left":"0px"}, 1000);
    // });
    $(".button1").click(function(){
        $(".Title1").animate({fontSize:'28px'});
        $(".WorkImage1").animate({backgroundColor:'#7aa0ca'});

    })
    $(".button2").click(function(){
        $(".Title2").animate({fontSize:'28px'});
        $(".WorkImage2").animate({backgroundColor:'#83b2b9;'});

    })

    $(".button3").click(function(){
        $(".Title3").animate({fontSize:'28px'});
        $(".WorkImage3").animate({backgroundColor:'#7eaac5;'});

    })
  });