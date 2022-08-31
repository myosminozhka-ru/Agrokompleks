import $ from 'jquery';
import 'slick-carousel';

const FirstBlock = class FirstBlock {
    constructor() {}
    slickFirst() {
        $('.js_slider_first').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            adaptiveHeight: true,
            dots: true
        });
    }
    init() {
        this.slickFirst();
    }
}

export default FirstBlock;