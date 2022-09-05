import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';

import FirstBlock from '../blocks/modules/first_block/first_block.js';
import BlockSpec from '../blocks/modules/block_spec/block_spec.js';
import BlockTerms from '../blocks/modules/block_terms/block_terms.js';
import DocumentBlock from '../blocks/modules/documents/documents.js';

$(function () {
    const firstBlock = new FirstBlock();
    const blockSpec = new BlockSpec();
    const blockTerms = new BlockTerms();
    const documentBlock = new DocumentBlock();

    firstBlock.init();
    blockSpec.init();
    blockTerms.init();
    documentBlock.init();
})