
let likeCounter = document.querySelectorAll('.like-button__wrap-like-text').innerHTML;
let button = document.querySelectorAll('.like-button__wrap-button');
let like=likeCounter;

class Like{
    constructor(){
        this.increments = increment;
        this.init();
    }

    init(){
        console.log('init');
        this.buttons = button;
        this.likeCounter = this.like;      
        this._bindEventListenert();
    }

    _bindEventListenert(){
        this._LikeToggle = this._likeToggle.bind(this);        
        this.increments.addEventlistener('click', this._likeToggle);
        console.log('_bindEventListenert');
    }

    _likeToggle(){
        console.log('_likeToggle')
        if(this.like == this.likeCounter){
            this._like();
        }
        else{
            this._unlike();
        }
    }

    _like(){
        this.buttons.checked = true;
        this.like++;
        this.document.querySelector('.like-button__wrap-like-text').innerHTML=like;
    }

    _unlike(){
        this.buttons.checked = false;
        this.like--;
        this.document.querySelector('.like-button__wrap-like-text').innerHTML=like;
    }

    
}

export default Like;

/*
let increments = document.querySelectorAll('.like-button');
let likeCounter = document.querySelector('.like-button__wrap-like-text').innerHTML;
let button = document.querySelector('.like-button__wrap-button');
let like=likeCounter;

increments.forEach(function(increment){
    increments.addEventListener('click', function(){
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
*/
