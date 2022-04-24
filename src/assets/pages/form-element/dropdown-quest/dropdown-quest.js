let incAdult = document.getElementById('increment-adult');
let decAdult = document.getElementById('decrement-adult');
let adult = 0;

let incChild = document.getElementById('increment-child');
let decChild = document.getElementById('decrement-child');
let child=0;

let incInfant = document.getElementById('increment-infant');
let decInfant = document.getElementById('decrement-infant');
let infant = 0;

let clear = document.getElementById('button-clear');
let accept = document.getElementById('button-accept')

let allQuest = 0;
var div = document.getElementById('button-clear');

incAdult.addEventListener('click', function(){
    adult++
    allQuest++
    check();
    document.querySelector('#adult').innerHTML = adult
    div.style.visibility='visible';
})

decAdult.addEventListener('click', function(){
    if(adult > 0){
        adult--
        allQuest--
        document.querySelector('#allQuest').innerHTML = allQuest + ' гостя'
        document.querySelector('#adult').innerHTML = adult
    }
    else
        return 0
})

incChild.addEventListener('click', function(){
    allQuest++
    child++
    check();
    document.querySelector('#allQuest').innerHTML = allQuest + ' гостя';
    document.querySelector('#child').innerHTML = child;
    div.style.visibility='visible';
})

decChild.addEventListener('click', function(){
    if(child > 0){
        child--
        allQuest--
        document.querySelector('#allQuest').innerHTML = allQuest + ' гостя';
        document.querySelector('#child').innerHTML = child;
    }
    else
        return 0
})

incInfant.addEventListener('click', function(){
    infant++
    if(infant==1){
        document.querySelector('#allQuest').innerHTML = allQuest + ' гостя, ' + infant + ' младенец';
    }
    else
        document.querySelector('#allQuest').innerHTML = allQuest + ' гостя, ' + infant + ' младенцев';
    document.querySelector('#infant').innerHTML = infant
    div.style.visibility='visible';
})

decInfant.addEventListener('click', function(){
    if(infant > 0){
        infant--
        allQuest--
        document.querySelector('#allQuest').innerHTML = allQuest  + ' гостя'
        document.querySelector('#infant').innerHTML = infant
    }
    else
        return 0
})

function check(){
    if(allQuest==1){
        document.querySelector('#allQuest').innerHTML = allQuest + ' гость'
    }
    else
        document.querySelector('#allQuest').innerHTML = allQuest + ' гостей'
}

clear.addEventListener('click', function(){
    adult= 0;
    document.querySelector('#adult').innerHTML = adult
    child=0;
    document.querySelector('#child').innerHTML = child
    infant=0;
    document.querySelector('#infant').innerHTML = infant
    allQuest=0;
    document.querySelector('#allQuest').innerHTML = allQuest
    if(allQuest==0){
        document.querySelector('#allQuest').innerHTML = 'Сколько гостей';
    }    
})

accept.addEventListener('click', function(){
    allQuest = adult + child + infant;
    document.querySelector('#allQuest').innerHTML = allQuest + ' гостя';
})