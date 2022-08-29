import $ from 'jquery';
import 'slick-carousel';

const BlockSpec = class BlockSpec {
    constructor() {}
    slickSpec() {
        if ( window.matchMedia('(max-width : 1023px)').matches ) {
            $('.js_slider_spec').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                arrows: true,
                dots: true,
                responsive: [
                  {
                    breakpoint: 750,
                    settings: {
                      slidesToShow: 2
                    }
                  },
                ]
            });
        }
    }
    init() {
        this.slickSpec();
    }
}

export default BlockSpec;