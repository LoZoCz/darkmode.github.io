var darkMode = document.querySelector('.switchBox');

var headInfo = document.querySelector('.headInfo');
var firstBox = document.querySelector('.firstBox');
var secondBox = document.querySelector('.secondBox');
var secondGridBox = document.querySelector('.secondGridBox');
var back = document.querySelector('.back');

var fb1 = document.querySelector('.facebook1');
var tw1 = document.querySelector('.twitter1');
var in1 = document.querySelector('.instagram1');
var yt1 = document.querySelector('.youtube1');

var fb2 = document.querySelector('.fb2');
var tw2 = document.querySelector('.tw2');
var in2 = document.querySelector('.in2');
var yt2 = document.querySelector('.yt2');

var fb3 = document.querySelector('.fb3');
var tw3 = document.querySelector('.tw3');
var in3 = document.querySelector('.in3');
var yt3 = document.querySelector('.yt3');

var element = document.body;

function mode()
{
    element.classList.toggle('darkBG');
    back.classList.toggle('backDark');
    headInfo.classList.toggle('headInfoDark');
    fb1.classList.toggle('nameDark');
    tw1.classList.toggle('nameDark');
    in1.classList.toggle('nameDark');
    yt1.classList.toggle('nameDark');
    secondGridBox.classList.toggle('nameDark');
    fb1.classList.toggle('firstBoxDark');
    tw1.classList.toggle('firstBoxDark');
    in1.classList.toggle('firstBoxDark');
    yt1.classList.toggle('firstBoxDark');
    fb2.classList.toggle('secondBoxDark');
    tw2.classList.toggle('secondBoxDark');
    in2.classList.toggle('secondBoxDark');
    yt2.classList.toggle('secondBoxDark');
    fb3.classList.toggle('secondBoxDark');
    tw3.classList.toggle('secondBoxDark');
    in3.classList.toggle('secondBoxDark');
    yt3.classList.toggle('secondBoxDark');
}

darkMode.addEventListener('click', mode);