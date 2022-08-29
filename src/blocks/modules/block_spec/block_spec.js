import $ from 'jquery';
import 'slick-carousel';

const BlockSpec = class BlockSpec {
    constructor() {}
    slickSpec() {
        // $('.js_slider_spec').slick({
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     infinite: false,
        //     arrows: true,
        //     adaptiveHeight: true,
        //     dots: true
        // });
    }
    init() {
        this.slickSpec();
    }
}

export default BlockSpec;