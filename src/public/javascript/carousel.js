'use strict';
const shift = document.querySelectorAll('.shift');
const carouselBox = document.querySelector('.carousel__entire__box');
// 이것도 지금 process야!! 
shift.forEach((value,index) => {
    value.addEventListener('click', () => {
        // alert(index);
        carouselBox.style.cssText = 
        `transform : translateX(${-33.3333 * index}%);
        transition : all 0.5s;
        `;
    })
})