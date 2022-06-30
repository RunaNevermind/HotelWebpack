import './like-button.scss';

let increments = document.querySelectorAll('.like-button[id*="_"]');
let likeCounter = document.querySelector('.like-button__wrap-like-text').innerHTML;
let button = document.querySelector('.like-button__wrap-button');
let like=likeCounter;

increments.forEach(function(increment){
    increment.addEventListener('click', function(){
        console.log(increment.id)
        if(like==likeCounter){
            like++;         
            button.checked=true;
            document.querySelector('.like-button__wrap-like-text').innerHTML=like;
        }
        else{
            like--;
            button.checked=false;
            document.querySelector('.like-button__wrap-like-text').innerHTML=like;
        }
    });
});
   
 