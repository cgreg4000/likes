var likes_1 = document.querySelector('#likes-1');
var likes_2 = document.querySelector('#likes-2');
var likes_3 = document.querySelector('#likes-3');

var counter_1 = 0;
var counter_2 = 0;
var counter_3 = 0;



function increment_1(){
    counter_1 ++;
    likes_1.innerText = counter_1;
}

function increment_2(){
    counter_2 ++;
    likes_2.innerText = counter_2;
}

function increment_3(){
    counter_3 ++;
    likes_3.innerText = counter_3;
}