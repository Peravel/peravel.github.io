$(document).ready(function () {
    //$('.latest-articles').find('img').each(function () {
    //    var t = this.width / this.height > 1 ? 'wide' : 'tall';
    //    $(this).addClass(t)
    //}),
        $('.count').each(function () {
            var t = Math.floor(100 * Math.random() + 1);
            $(this).text(t)
        }),
        $('.like_button').one('click', function () {
            var t = $(this).parent().find('.count');
            t.html(1 * t.html() + 1);
            var a = $(this).parent().find('.like-counter');
            $(a).removeClass('fa-heart-o'),
                $(a).addClass('fa-heart')
        }),
        $('.like_button').on('click', function () {
            event.preventDefault()
        }),
        $('li a.share-trigger').on('click', function () {
            $('.share-dropdown').toggleClass('is-open'),
                event.preventDefault()
        }),
        $('.show-search').on('click', function () {
            $('.search-wrapper').addClass('is-visible')
        }),
        $('.hide-search').on('click', function () {
            $('.search-wrapper').removeClass('is-visible'),
                $('.search-wrapper input').removeClass('is-selected')
        }),
        $('.search-wrapper input').on('click', function () {
            $(this).addClass('is-selected')
        }),
        $('.search-wrapper input').keypress(function (t) {
            13 === t.which && window.alert('Ready for implementation.')
        }),
        $('.bar').width('0%'),
        $('.bar').waypoint(function () {
            $('.bar').each(function () {
                var t = $(this).data('percentage');
                $(this).animate({
                    width: t
                }, {
                        duration: 2000,
                        easing: 'easeOutExpo'
                    })
            })
        }, {
                offset: '85%'
            });
    var t = '0';
    $('.stats-number').text(t),
        $('.stats-number').waypoint(function () {
            $('.stats-number').each(function () {
                var t = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: t.attr('data-stop')
                }, {
                        duration: 5000,
                        easing: 'swing',
                        step: function (a) {
                            t.text(Math.ceil(a))
                        }
                    })
            }),
                this.destroy()
        }, {
                offset: '75%'
            }),
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var t = $(this.hash);
                if (t = t.length ? t : $('[name=' + this.hash.slice(1) + ']'), t.length) return $('html,body').animate({
                    scrollTop: t.offset().top
                }, 2000),
                    !1
            }
        }),
        $('.nav-toggle').click(function () {
            $(this).toggleClass('active'),
                $('.navicon').toggleClass('fixed'),
                $('.primary-nav-wrapper').toggleClass('open'),
                event.preventDefault()
        }),
        $('.primary-nav-wrapper li a').click(function () {
            $('.nav-toggle').toggleClass('active'),
                $('.navicon').toggleClass('fixed'),
                $('.primary-nav-wrapper').toggleClass('open')
        }),
        $('.wp1').waypoint(function () {
            $('.wp1').addClass('animated fadeInUp')
        }, {
                offset: '80%'
            }),
        $('.wp2').waypoint(function () {
            $('.wp2').addClass('animated fadeInUp')
        }, {
                offset: '95%'
            }),
        $('.wp3').waypoint(function () {
            $('.wp3').addClass('animated fadeInUp')
        }, {
                offset: '95%'
            }),
        $('.wp4').waypoint(function () {
            $('.wp4').addClass('animated fadeInUp')
        }, {
                offset: '75%'
            }),
        $('.wp5').waypoint(function () {
            $('.wp5').addClass('animated fadeIn')
        }, {
                offset: '75%'
            }),
        $('.wp6').waypoint(function () {
            $('.wp6').addClass('animated fadeIn')
        }, {
                offset: '75%'
            }),
        $('.wp7').waypoint(function () {
            $('.wp7').addClass('animated fadeIn')
        }, {
                offset: '75%'
            }),
        $('.wp8').waypoint(function () {
            $('.wp8').addClass('animated fadeIn')
        }, {
                offset: '75%'
            }),
        Modernizr.touch && $('figure').bind('touchstart touchend', function (t) {
            $(this).toggleClass('hover')
        })
});
