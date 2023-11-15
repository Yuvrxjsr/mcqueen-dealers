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

const dialog = select('.dialog');
const login = select('.login');
const submit = select('.submit');
const modalBg = select('.modal-bg');
const email = select('.email');
const password = select('.pass');

onEvent('click', login, () => {
    dialog.classList.remove('is-hidden');
    dialog.classList.add('is-visible');
    modalBg.classList.add('modal-bg-dark');
});

function removeDialog() {
    dialog.classList.remove('is-visible');
    dialog.classList.add('is-hidden');
    modalBg.classList.remove('modal-bg-dark');
    email.value = '';
    password.value = '';
}

onEvent('click', window, (event) => {
    if (event.target == modalBg) {
        removeDialog();
    }
});

onEvent('click', window, (event) => {
    if (event.target == submit) {
        if (email.value !== '' && password.value !== '') {
            removeDialog();
        }
    }
})

onEvent('load', window, () => {
    email.value = '';
    password.value = '';
});