**** position: absolute;


function quickMenu(){
                var offset = $(".quick-menu").offset(); //252
                var topPadding = 100;
                console.log($(window).scrollTop())
                $(window).scroll(function() {
                    if ($(window).scrollTop() > offset.top) {
                        $(".quick-menu").stop().animate({
                            'margin-top': $(window).scrollTop() - offset.top + topPadding
                        });
                    } else {
                        $(".quick-menu").stop().animate({
                            'margin-top': 0
                        });
                    };
                });
            }

            quickMenu();
