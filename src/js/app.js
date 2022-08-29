import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';

import FirstBlock from '../blocks/modules/first_block/first_block.js';
import BlockSpec from '../blocks/modules/block_spec/block_spec.js';

$(function () {
    const firstBlock = new FirstBlock();
    const blockSpec = new BlockSpec();

    firstBlock.init();
    blockSpec.init();
})