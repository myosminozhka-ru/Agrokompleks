import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';

import FirstBlock from '../blocks/modules/first_block/first_block.js';

$(function () {
    const firstBlock = new FirstBlock();

    firstBlock.init();
})