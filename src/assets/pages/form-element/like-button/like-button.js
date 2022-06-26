import './like-button.scss';

let increment = document.querySelector('.like-button__wrap');
let likeCounter = document.querySelector('.like-button__wrap__like__text').innerHTML;
let button = document.querySelector('.like-button__wrap__button');

document.querySelector('.like-button__wrap__like__text').innerHTML=likeCounter;
let like=likeCounter;
increment.addEventListener('click', function(){
    if(like==likeCounter){
        like++;         
        button.checked=true;
        return document.querySelector('.like-button__wrap__like__text').innerHTML=like;
    }
    else{
        like--;
        button.checked=false;
        return document.querySelector('.like-button__wrap__like__text').innerHTML=like;
    }
})    
