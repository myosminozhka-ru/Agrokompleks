import $ from 'jquery';
import 'slick-carousel';

const BlockTerms = class BlockTerms {
    constructor() {}
    slickTerms() {
        // if ( window.matchMedia('(max-width : 1023px)').matches ) {
        //     $('.js_slider_spec').slick({
        //         slidesToShow: 3,
        //         slidesToScroll: 1,
        //         infinite: false,
        //         arrows: true,
        //         dots: true,
        //         responsive: [
        //           {
        //             breakpoint: 750,
        //             settings: {
        //               slidesToShow: 2
        //             }
        //           },
        //         ]
        //     });
        // }
    }
    tabsTerms() {
        $('.tabs__contents').on('click', '.tabs__content:not(.active)', function() {
            $(this)
              .addClass('active').siblings().removeClass('active')
              .closest('.tabs').find('.tabs__caption li').removeClass('active').hide(500).eq($(this).index()).addClass('active').show(500);
        });
    }
    init() {
        this.slickTerms();
        this.tabsTerms();
    }
}

export default BlockTerms;