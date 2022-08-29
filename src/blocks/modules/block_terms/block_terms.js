import $ from 'jquery';
import 'slick-carousel';

const BlockTerms = class BlockTerms {
    constructor() {}
    slickTerms() {
        if ( window.matchMedia('(max-width : 1023px)').matches ) {
            $('.sl_js_for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.sl_js_nav'
              });
              $('.sl_js_nav').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.sl_js_for',
                dots: true,
                // centerMode: true,
                // focusOnSelect: true,
                variableWidth: true
              });
        }
    }
    tabsTerms() {
        if ( window.matchMedia('(min-width : 1024px)').matches ) {
            $('.tabs__contents').on('click', '.tabs__content:not(.active)', function() {
                $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.tabs').find('.tabs__caption li').removeClass('active').hide(500).eq($(this).index()).addClass('active').show(500);
            });
        };
    }
    init() {
        this.slickTerms();
        this.tabsTerms();
    }
}

export default BlockTerms;