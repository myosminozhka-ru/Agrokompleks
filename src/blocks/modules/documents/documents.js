import $ from 'jquery';
import SlimSelect from 'slim-select'

const DocumentBlock = class DocumentBlock {
    constructor() {}
    selectDoc() {
        new SlimSelect({
            select: '.documents__select',
            showSearch: false
          })
    }
    init() {
        this.selectDoc();
    }
}

export default DocumentBlock;