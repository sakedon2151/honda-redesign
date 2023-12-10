$(function(){

    // depth2
    $('.gnb').hover(function(){
        $('#header_dim').css({
            height: '1000px'
        });
    },function(){
        $('#header_dim').css({
            height: '100px'
        });
    });

    // index 
    $('#visual_control li').on('click', function(){
        var i = $(this).index();
        $('#visual_control li').removeClass('on');
        $(this).addClass('on');
        $('#bg_pic div').removeClass('on');
        $('#bg_pic div').eq(i).addClass('on');
        $('#visual_titleSVG li').removeClass('on');
        $('#visual_titleSVG li').eq(i).addClass('on');
        $('#visual li').removeClass('on');
        $('#visual li').eq(i).addClass('on');
    });

    // video
    let myVideo = $('.videoWrap').find('video');

    $('#video_control').on('click',function(){
        $('#video_control').fadeOut();
        $('#float_video').css({'display':'block'});
        $('.videoWrap').css({'display':'block'});
        
        $(myVideo).show();
    });
    $('.close').on('click',function(){
        $('#float_video').css({'display':'none'});
        $('.videoWrap').css({'display':'none'});
        $('#video_control').show();
        
        $(myVideo).pause();
    });

});