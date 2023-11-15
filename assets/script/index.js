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

//Javascript for product page

const productsToSlide = document.querySelectorAll(".v-products-container .v-each-product");
const slideTogglers = document.querySelectorAll(".v-toggle-slide-container .v-slide-btn");



function handleEachToggler(event) {
	event.stopPropagation();
	const target = this.getAttribute("data-v-target");
	if (target) {
		allModals.forEach((modal) => {
			const attr = modal.getAttribute("data-v-id");
			if (target === attr && !modal.classList.contains("active")) {
				addActiveElement(modal);
			} else {
				removeActiveElement(modal);
			}
		});
	}
}


function slideInOut(currentSlide) {
	productsToSlide.forEach((slide, slideIndex) => {
		if (slideIndex === currentSlide) {
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
		}
	});
}

if (slideTogglers) {
	let currentSlide = 0;
	slideTogglers.forEach((slidetoggle) => {
		const where = slidetoggle.getAttribute("data-where");
		if (where === "v-next") {
			slidetoggle.addEventListener("click", function () {
				currentSlide = currentSlide < productsToSlide.length - 1 ? currentSlide + 1 : 0;
				slideInOut(currentSlide);
			});
		}
		if (where === "v-prev") {
			slidetoggle.addEventListener("click", function () {
				currentSlide = currentSlide > 0 ? currentSlide - 1 : productsToSlide.length - 1;
				slideInOut(currentSlide);
			});
		}
	});
}