;(function() {
    'use strict';
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.mobile__menu__button').addEventListener('click', () => {
        document.querySelector('.mobile__menu').classList.toggle('open');
    })
});
})();





