// function imgDiv(divNumber) {
//     return document.getElementById(divNumber);
// }
// update total
function updateTotal() {
    const shippingCharge = Number(shippingField.innerText);
    const productPrice = Number(price.innerText);
    total.innerText = shippingCharge + productPrice;
}

const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

// const desc = document.getElementById('desc');
// const price = document.getElementById('price');

const img = document.getElementById('art');
const free = document.getElementById('free');
const express = document.getElementById('express');
const shippingField = document.getElementById('shipping');
const total = document.getElementById('total');

function isContain(element) {
    return element.classList.contains('selected');
}

div1.addEventListener('click', function () {
    if (!isContain(div1)) {
        div1.classList.add('selected');
        div2.classList.remove('selected');
        div3.classList.remove('selected');
    }
    img.src = 'images/1.jpg';
    desc.innerText = 'First-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quia, asperiores eius consequuntur, nesciunt minus ad dignissimos esse ut, distinctio tempore molestiae aspernatur ratione reiciendis?';
    price.innerText = '750';
    updateTotal()
})
div2.addEventListener('click', function () {
    if (!isContain(div2)) {
        div1.classList.remove('selected');
        div2.classList.add('selected');
        div3.classList.remove('selected');
    }
    img.src = 'images/2.jpg';
    desc.innerText = 'Second-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quia, asperiores eius consequuntur, nesciunt minus ad dignissimos esse ut, distinctio tempore molestiae aspernatur ratione reiciendis?';
    price.innerText = '550';
    updateTotal()
})
div3.addEventListener('click', function () {
    if (!isContain(div3)) {
        div1.classList.remove('selected');
        div2.classList.remove('selected');
        div3.classList.add('selected');
    }
    img.src = 'images/3.jpg';
    desc.innerText = 'Third-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quia, asperiores eius consequuntur, nesciunt minus ad dignissimos esse ut, distinctio tempore molestiae aspernatur ratione reiciendis?';
    price.innerText = '330';
    updateTotal()
})

free.addEventListener('click', function () {
    if (!isContain(free)) {
        free.classList.add('selected');
        express.classList.remove('selected');
    }
    shippingField.innerText = '5';
    updateTotal()
})
express.addEventListener('click', function () {
    if (!isContain(express)) {
        free.classList.remove('selected');
        express.classList.add('selected');
    }
    shippingField.innerText = '30';
    updateTotal()
})
console.log(desc, price);