let likeCounter = '.like-button__wrap-like-text';
let checked = '.like-button__wrap-button';
let color = '.like-button__wrap-like';
class Like{
    constructor(increment){
        this.increment = increment;  
        this.init();
    }

    init(){
        this.likeCounter = parseInt(this.increment.querySelector(likeCounter).innerText);
        this.checked = this.increment.querySelector(checked).checked;
        this.color=this.increment.querySelector(color);
        this._bindEventListenert();
    }

    _bindEventListenert(){
        console.log(document.querySelector('.like-button__wrap-like-text').style)
        this.increment.addEventListener('click', () => this._likeToggle(this.increment,this.likeCounter,this.checked));        
        this._LikeToggle = this._likeToggle.bind(this);
    }

    _likeToggle(){
        if(this.checked===true){
            this.color.classList.remove('_icon-favorite');
            this.color.classList.add('_icon-favorite-border');
            this.color.classList.add('like-button__wrap-like');
            this.color.classList.remove('like-button__wrap-like__checked');
            document.querySelector(likeCounter).style.color='$darkshade-half';
            this.likeCounter--;
            this.increment.querySelector(likeCounter).innerHTML=this.likeCounter;
            this.checked=false;
        }
        else{ 
            this.color.classList.remove('_icon-favorite-border');
            this.color.classList.add('_icon-favorite');
            this.color.classList.add('like-button__wrap-like__checked');
            this.color.classList.remove('like-button__wrap-like');
            document.querySelector(likeCounter).style.color='$purple';
            this.likeCounter++;
            this.increment.querySelector(likeCounter).innerHTML=this.likeCounter;
            this.checked=true;
        }
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
