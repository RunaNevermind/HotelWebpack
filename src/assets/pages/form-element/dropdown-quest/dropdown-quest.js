import'./dropdown-quest.scss';
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
var buttonClear = document.getElementById('button-clear');


incAdult.addEventListener('click', function(){
    adult++
    allQuest++
    check();
    document.querySelector('#adult').innerHTML = adult
    buttonClear.style.visibility='visible';
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
    document.querySelector('#child').innerHTML = child;
    buttonClear.style.visibility='visible';
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
    inf();
    document.querySelector('#infant').innerHTML = infant;
    buttonClear.style.visibility='visible';
})

decInfant.addEventListener('click', function(){
    if(infant == 1){
        infant--
        document.querySelector('#infant').innerHTML = infant;        
        inf();
    }
    else{
        inf()
        return document.querySelector('#allQuest').innerHTML = allQuest + ' гостя';
    }
        

})

function check(){
    if(allQuest==1){
        document.querySelector('#allQuest').innerHTML = allQuest + ' гость'
    }
    else
        document.querySelector('#allQuest').innerHTML = allQuest + ' гостей'
}

function inf(){
    switch(infant){
        case'1':{
            document.querySelector('#infant').innerHTML = infant;            
            document.querySelector('#allQuest').innerHTML = allQuest + ' гостя, ' + infant + ' младенец';
            break;
        };
        case'0':{
            document.querySelector('#infant').innerHTML = 0;
            document.querySelector('#allQuest').innerHTML = allQuest + ' гостя';
            break;
        };
        default:{
            document.querySelector('#infant').innerHTML = infant;            
            document.querySelector('#allQuest').innerHTML = allQuest + ' гостя, ' + infant + ' младенцев';
            break;
        }
    };
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
    allQuest = adult + child;
    document.querySelector('#allQuest').innerHTML = allQuest + ' гостя';
})