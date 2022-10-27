'use strict';
alert('detailFetch');
const idArr = [];
const drinkBox = document.querySelectorAll('.drink__result__box');


drinkBox.forEach((value, index) => {
    idArr.push(value.getAttribute('data-id'));
    value.addEventListener('click', () => {
        // alert(idArr[index]);
        detailFetch(idArr[index]);
    })
})

async function detailFetch(id){
    try{
        let idData = await fetch(`/drink/${id}`);
        console.log(`id >> ${idData}`);
        let redirect = window.location.href = `/drink/${id}`;
        return redirect;
    }catch(err){
        return console.log(err);
    }
}
