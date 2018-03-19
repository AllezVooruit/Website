;(function() {
    'use strict';
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.mobile__menu__button').addEventListener('click', () => {
        console.log(document.querySelector('.mobile__menu__button').innerHTML);
        if(document.querySelector('.mobile__menu__button').innerHTML == '<p>MENU</p>') {
            document.querySelector('.mobile__menu__button').innerHTML = 'SLUITEN';
        }  

        if(document.querySelector('.mobile__menu__button').innerHTML == '<p>SLUITEN</p>') {
            document.querySelector('.mobile__menu__button').innerHTML = 'MENU';
        }
        document.querySelector('.mobile__menu').classList.toggle('open');
    })
});
})();