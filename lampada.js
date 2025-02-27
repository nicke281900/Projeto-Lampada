const lamp = document.getElementById('lamp');
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const reviver= document.getElementById('reviver');

function isLampBroken(){
    return lamp.src.indexOf('quebrada')> -1;
}
function lampOn(){
    if(!isLampBroken()){
        lamp.src= './img/Esqueleto andando.jpg';
    }
}
function lampOff(){
    if(!isLampBroken()){
        lamp.src ='./img/esqueleto tocando guitarra.jpg';

    }
}
function lampBroken(){
    lamp.src = './img/esqueleto dançando.jpg';                
}
function reviverLamp(){
    lamp.src = './img/Esqueleto andando.jpg';                  
}
turnOn.addEventListener('click',lampOn);
turnOff.addEventListener('click',lampOff);
reviver.addEventListener('click',reviverLamp);
lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick',lampBroken);


   