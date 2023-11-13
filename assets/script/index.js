'use strict';

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function selectById(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
    return[...parent.querySelectorAll(selector)];
}

function create(element, parent = document) {
    return parent.createElement(element);
}

function print(...args) {
    console.log(args.join(', '));
}

const show = select('.showBtn');
const box = select('.two');
const show1 = selectById('showIcon');

onEvent('click', show, () => {
    if (box.style.display = 'none') {
        box.style.display = 'flex';
    } else {
        show1.classList.remove('fa-solid fa-arrow-down');
        show1.classList.add('fa-solid fa-arrow-up');
    }
});