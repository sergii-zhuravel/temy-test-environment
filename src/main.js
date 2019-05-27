'use strict';
/*
const countryInfo = document.querySelector('#country').value;

alert (countryInfo);

function stateChek (countryInfo) {
    if (countryInfo === 'non-selected') {
        document.querySelector('#state').disabled = false;
    }
}
*/
const countryValue = document.querySelector('#country').value;
const countryInput = document.querySelector('#country');

const stateValue = document.querySelector('#state').value;
const stateInput = document.querySelector('#state');

countryInput.addEventListener('change', function (event) {
    if (countryValue !== '') {
        document.querySelector('#state').disabled = false;
    }
}); 

stateInput.addEventListener('change', function (event) {
    if (stateValue !== '') {
        document.querySelector('#city').disabled = false;
    }
}); 
