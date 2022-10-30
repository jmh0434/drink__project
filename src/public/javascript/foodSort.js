'use strict';
const food = document.querySelectorAll('.food > span');
const foodName = ['fish', 'meat', 'jungoal', 'cheese', 'salad'];
food.forEach((value, index) => {
    value.addEventListener('click', () => {
        foodFetch(foodName[index]); // 각 음식 이름을 전달해줌..!
    })
})
// result 라우터에 데이터를 fish를 주면 돼!!!! => 그리고 req.query받아주면 돼!!!
async function foodFetch(foodName){
    try{
        let data = await fetch(`/drink?food=${foodName}`);
        let result = data;
        console.log(`fetch 결과 >> ${result}`);
    }catch(err){
        return console.log(err);
    }
}