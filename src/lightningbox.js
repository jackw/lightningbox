const extend = require('lodash/extend');
const { addElement, removeElement } = require('./utils');

const MODAL_CLASS = 'lb-modal';
const MODAL_IMAGE_CLASS = 'lb-modal-image';
const MODAL_CLOSE_CLASS = 'lb-modal-close';
const MODAL_NEXT_CLASS = 'lb-modal-next';
const MODAL_PREV_CLASS = 'lb-modal-prev';

module.exports = {
    MODAL_CLASS,
    MODAL_IMAGE_CLASS,
    MODAL_CLOSE_CLASS,
    MODAL_NEXT_CLASS,
    MODAL_PREV_CLASS,
    getElements,
    registerCallbackOnElements,
    openModal
};

function registerCallbackOnElements (selector, callback, event='click') {
    const elements = getElements(selector);

    if (elements.length) {
        [...elements].forEach(element => element.addEventListener(
            event,
            () => callback(element, elements)
        ));
    }
}

function getElements (selector) {
    return document.querySelectorAll(selector);
}

function openModal (element, elements=[]) {
    const html = getModalHtml(element, elements);

    addElement(html);
}

function getModalHtml (element, elements) {
    return `
        <div class="${ MODAL_CLASS }"></div>
    `;
}