import './like-button.scss';

let increment = document.querySelector('.like-button');
let likeCounter = document.querySelector('.like-button__wrap__like').value;

increment.addEventListener('click', function(){
    console.log(likeCounter)    
    likeCounter++;
    document.querySelector('.like-button__wrap__like').innerHTML=likeCounter;
})

