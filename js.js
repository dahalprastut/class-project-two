

// for button click change color of container 1

// document.getElementsByClassName('container')[0].style="background:red";
// document.getElementsByClassName('container')[0].children[0].style="color:#fff";

// function changeColor(){
//     document.getElementsByClassName('container')[0].style="bacckground:#fff";
//     document.getElementsByClassName('container')[0].children[0].style="color:#000";
// }


// // for button click change color of container 2
// document.getElementsByClassName('container')[1].style="background:red";
// document.getElementsByClassName('container')[1].children[0].style="color:#fff";


// function changeColorOfTwo(){
//     document.getElementsByClassName('container')[1].style="bacckground:#fff";
//     document.getElementsByClassName('container')[1].children[0].style="color:#000";
// }

// // add border
// function clickForBorder(){
//     document.getElementsByClassName('container-two')[0].classList.add('border');
// }


// // remove border
// function removeBorder(){
//     document.getElementsByClassName('container-two')[0].classList.remove('border');
// }



// function forFirstItemAddInArray(itemNumber){

//         var cart = [];
//         // objects in jsd
//         var product = [{
//             Name:'laptop',
//             model:'acer'
//         },  {
//             Name:'mobile',
//             model:'htc'
//         },{
//             Name:'TV',
//             model:'LG'
//         }];


//     cart.push(product[itemNumber]);
//     var className = `for-product-${itemNumber+1}`;
//     document.getElementsByClassName(className)[0].innerHTML =  `Name : ${JSON.stringify(cart[itemNumber])}`;

// }   


// function changeBackgroundColor(){
//     var r=Math.floor(Math.random()*255);
//     var g=Math.floor(Math.random()*255);
//     var b=Math.floor(Math.random()*255);
//     var a=Math.random();
//     document.getElementsByClassName('container')[0].style=`background:rgba(${r},${g},${b},${a})`;
//     console.log(document.getElementsByClassName('container')[0],`rgba(${r},${g},${b},${a})`);
// }

// function runOnClick(){
//     setInterval(function(){
//         changeBackgroundColor() 
//     },5000);
// }


// // setInterval(function(){
// //     //Code will run from here

// // }, duration)


// document.getElementsByClassName('container-two')[0].innerHTML='<h1>this</h1>';

// function forMargin(){


//         document.getElementsByClassName('box')[0].style=`margin-left:70vw`;
//         setTimeout(function(){
//             document.getElementsByClassName('box')[0].style=`margin-right:70vw`;

//         },5000) 



// }
// var move = document.querySelector('.box');

// move.onclick = function(){
//         forMargin();
// }


// function changeColor(){
//     var r= Math.floor(Math.random()*255);
//     var g= Math.floor(Math.random()*255);
//     var b= Math.floor(Math.random()*255);
//     var a= Math.random();
//     document.getElementsByClassName('color-change')[0].parentElement.style=`background:rgba(${r},${g},${b},${a})`;
// }

// var colorChange = document.querySelector('.color-change');

// colorChange.onclick =function(){
//     setInterval(function(){
//         // for(i=0;i<=100;i++){
//             changeColor();

//         // }
//     },500);
// }


// var leftClick= document.querySelector('.left-top');
// var rightClick= document.querySelector('.right-top');
// var leftBottomClick= document.querySelector('.left-bottom');
// var changes =document.querySelector('.changes');

// leftClick.onclick = function() {
//     changes.add('box-three');
//     changes.remove('box-one');
//     changes.remove('box-two');
// }

// rightClick.onclick = function(){
//     changes.remove('box-three');
//     changes.add('box-one');
//     changes.remove('box-two');
// }

// leftBottomClick.onclick = function(){
//     changes.remove('box-three');
//     changes.remove('box-one');
//     changes.add('box-two');
// }



// creating new element in html and append



// var noOfPerson = Number(prompt('enter how many numbers you want to enter?'));

// if(isNaN(noOfPerson) !=true){
//     for(i=1; i <=noOfPerson ; i++){
//         var personName = prompt(`enter the ${i} person name`);
//         var division = document.createElement('div');
//         var header = document.createElement('h1');
//         header.innerText=`${personName}`;
//         division.appendChild(header);
//         document.body.appendChild(division);
//     }


// }else{
//     alert('please enter a number');
// }



// for to do

// var ask=document.querySelector('.addToDo');
// var click=0;
// ask.onclick = function(){

//         var askForDo = prompt('what do you want to add in todo');

//         var forRow =document.createElement('tr');


//         var forTableData = document.createElement('td');


//         var removeButton = document.createElement('td');

//         var button = document.createElement('button');
//         button.innerText=`remove`;

//         for(i=0 ; i <= click ; i++){         //when clicked gives onclick attribute            

//             var attributeCreate=document.createAttribute('onclick');
//             attributeCreate.value = `remove(${i})`;
//             button.setAttributeNode(attributeCreate);

//         }


//         removeButton.appendChild(button);

//         forTableData.innerText=`${askForDo}`;

//         forRow.appendChild(forTableData);
//         forRow.appendChild(removeButton);
//         selectTable= document.querySelector('table');
//         selectTable.appendChild(forRow);
//         click=click+1;


//     }   

//     function remove(i){           //selects from document eg remove(0)
//         document.querySelector('table').children[i].innerHTML='';
//     }


// ---------------


// var ask = document.querySelector('button');
// var show = document.querySelector('button.ShowToDo');
// var formButton= document.querySelector('.form-button');

// document.querySelector('form').onsubmit = function(test){   //prevents the default on form
//     test.preventDefault();
// }
// var question =function(){
//     // var question = document.querySelector('#form-input').value;
//     // console.log(question);

//     document.querySelector('.for-form').classList.add('for-shown-form');
//     var question = document.querySelector('#form-input');
//     var value = question.value;
//     question.value = '';
//     // console.log(question)
//     return value;
// } 
// ask.onclick= question;

// formButton.onclick=function(){

//     var forRow = document.createElement('tr');
//     var forColumn= document.createElement('td');
//     var forRemove = document.createElement('td');
//     var forHide = document.createElement('td');
//     var forHideButton = document.createElement('button');


//     var selectTable = document.querySelector('table');
//     forColumn.innerText= question();
//     forHideButton.innerText='Hide';
//     forRemoveButton= document.createElement('button');
//     forRemoveButton.innerText='Remove';


//     var button = document.createAttribute('onclick');
//     button.value=`remove(this)`;
//     forRemoveButton.setAttributeNode(button);

//     var buttonHide = document.createAttribute('onclick');
//     buttonHide.value = `hide(this)`;
//     forHideButton.setAttributeNode(buttonHide);
//     forRemove.appendChild(forRemoveButton);
//     forRow.appendChild(forColumn);
//     forRow.appendChild(forRemove);
//     selectTable.appendChild(forRow);
//     forHide.appendChild(forHideButton);
//     forRow.appendChild(forHide);

// }


// function hide(i){
//    i.parentElement.parentElement.classList.toggle('hidden');
//    document.querySelector('body').classList.remove('shown');

// }


// function remove(i){
//     // document.querySelector('table').children[i].innerHTML='';
//     i.parentElement.parentElement.innerHTML='';
//     console.log(i.parentElement.parentElement);
// }

// show.onclick = function(){
//     document.querySelector('body').classList.toggle('shown');
// }


// window.onscroll = function(event){

// console.log(event);
//     // if(event.path[1].scrollY > 100){
//     //     // document.querySelector('.color').classList.add('color-change');
//     //     var r=Math.floor(Math.random()*255);
//     //     var g=Math.floor(Math.random()*255);
//     //     var b=Math.floor(Math.random()*255);
//     //     var a=Math.random();
//     //     document.querySelector('.color').style=`background:rgba(${r},${g},${b},${a})`;
//     // }

//     // if(event.path[1].scrollY < 100){
//     //     document.querySelector('.color').style=`background:red`;
//     // }
//     // if(event.path[1].scrollY >=600){
//     //     document.querySelector('.color').style=`background:red`;
//     // }
// }




// var a = 'prastut';
// console.log('my name is' + a);
// console.log(`my name is ${a}`);


// event refrence

// strings mdn..includes..split

// var a ='hello my dear ravi';
// var b= 'hello';
// console.log(a.concat(b));





// ---------

// document.querySelector('form').onsubmit = function(event){
//     event.preventDefault();
//     var text = document.querySelector('textarea').value;
//     var search = document.querySelector('input').value;
//     var newLine =text.split(' ');
//     if(text.includes(search)){
//         for(var i = 0 ; i < newLine.lenght ; i++){
//             const element = newLine[i];
//             var data = element;
//             document.body.innerHTML += '<p>' + data + '</p>';
//         }
//     }
// }

// ---------


// document.querySelector('form').onsubmit=function(event){
//     event.preventDefault();
//     var search = document.querySelector('input').value;
//     var text = document.querySelector('.for-text-area p').innerText;
//     var splitText = text.split(' ');
//     var count= 0;
//     for (var i=0 ; i<splitText.length ; i++){
//         if(search == splitText[i]){
//             count= count+1;
//         }
//     }

//     document.querySelector('form').innerHTML+='<h4> total number of search found = ' + count + '</h4>';


// ---------------------------------------------

// var selectBox = document.querySelector('.for-box') //selects for-box class
// var selectBody = document.body;
// window.addEventListener('resize', function (event) {
//     var windowHeight = event.path[0].outerHeight;
//     var windowWidth = event.path[0].outerWidth;

//     var randomValue = () => Math.floor(Math.random() * 255);

//     console.log('window height', windowHeight)

//     var transparancy = Math.random();

//     if (windowHeight > 500) {
//         selectBox.style = `left:0%;background:green`;
//     } else {
//         selectBox.style = `top:0px;left:50%`;
//     }



//     if (windowWidth < 700) {
//         selectBody.style = `background:rgba(${randomValue()},${randomValue()},${randomValue()},${transparancy})`;
//     } else {
//         selectBody.style = `background:blue`;
//     }

// });

// var initialScale = 1;
// window.addEventListener('keyup', function (event) {
//     console.log(event);
//     var keyCode = event.keyCode;
//     if (keyCode == 17) {
//         initialScale += 0.5
//         selectBox.style = `transform:scale(${initialScale})`;
//     }

//     if (keyCode == 18) {
//         event.preventDefault();
//         initialScale -= 0.5;
//         if (initialScale <= 0) {

//             initialScale = 0;
//         }
//         selectBox.style = `transform:scale(${initialScale})`;
//     }

// });

// var selectForm = document.querySelector('input');

// selectForm.addEventListener('keyup', function (event){
//     if (event.keyCode == 16) {
//         selectBody.style='background:black';
//     }
//     if (event.keyCode == 20) {
//         selectBody.style='background:#fff';
//     }
// });

// ---------------------


// var Laptop = function(model , ram , cost){
//     this.model = model;
//     this.ram = ram;
//     this.cost = cost;

// }

// Laptop.prototype.name = 'smith';

// var acer = new Laptop(2018,'8gb' , 80000);
// console.log(acer);
// console.log(acer.name);


// var Person = function (name, sex, yearOfBirth) {
//     this.name = name;
//     this.sex = sex;
//     this.yearOfBirth = yearOfBirth;

// }

// Person.prototype.age=function(){
//     console.log(2019-this.yearOfBirth);
// }

// var john = new Person('john', 'male' , 1990);
// var jane = new Person('jane', 'female' , 1989);
// console.log(john.age());
// console.log(jane.age());


// var years = [2013, 1990, 1980, 1969];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calcAge(el) {
//     return 2019 - el;
// }

// function isFullAge(el){
//     return el>=18;
// }

// var ages = arrayCalc(years, calcAge);
// var isFull = arrayCalc(ages,isFullAge);
// console.log(ages);
// console.log(isFull);



// function getJobQuestion(job){
//     if (job=='designer'){
//         return function(name){
//             console.log(name + ' do you know something about UI desgn?');
//         }
//     }else if(job=='painter'){
//         return function(name){
//             console.log('can you show me the paintings that you\'ve made please ' + name + '?');
//         }
//     }
// }

// var firstPerson = getJobQuestion('designer');
// var secondPerson = getJobQuestion('painter');
// firstPerson('john');
// secondPerson('Vincent'); 


// (function(a,b){
//     var sum;
//     sum= a+b;
//     console.log(sum);
// })(4,5);


// function interviewQuestion(job){
//     var a = 'is a';
//     if(job=='designer'){
//         return function(name){
//             console.log(name + ' ' + a + ' ' + job);
//         }

//     }
// }

// interviewQuestion('designer')('prastut');




// var obj = {
//     number: 5
// };


// function sum(b){
//     return b + this.number;
// }

// var bound = sum.bind(obj);
// console.log(bound(4));


// --------------------

// (function(){
//     var Question = function (question, answers, correctAnswer) {
//         this.question = question;
//         this.answers = answers;
//         this.correctAnswer = correctAnswer;
//     }
    
//     //method for asking question
//     Question.prototype.logQuestion = function(){
//         console.log(this.question);
//         for(var i=0 ; i < this.answers.length ; i++){
//             console.log(`${i} ${this.answers[i]}`);
//         }
    
//     }
    
//     //method for checking question
//     Question.prototype.forCheck = function(userAnswer){
//         if(userAnswer == this.correctAnswer){
//             console.log('you are correct');
//         }else{
//             console.log(`you are wrong. the correct answer is ${this.correctAnswer}`);
//         }
//     }
    
//     var question1 = new Question('what is my name?', ['prastut', 'harihar'], 0);
//     var question2 = new Question('what is my favourite band?', ['pearl jam', 'bon jovi', 'pink floyd'], 0);
//     var arrayForQuestion = [question1 , question2];
    

//     function nextQuestion(){
    
//         // for asking question in console
//         var number = Math.floor(Math.random()*arrayForQuestion.length);
//         arrayForQuestion[number].logQuestion();
        
//         // for user answer
//         var userAnswer =prompt('what is the correct answer number?');
//         if(userAnswer!=='exit'){
//             arrayForQuestion[number].forCheck(parseInt(userAnswer));
//             nextQuestion();
//         }
//     }
   
//     nextQuestion();

    
// })();

// -------------------


// document.querySelector('.btn').addEventListener('click' , function(event){
//     console.log('event',event);
//     console.log('window',event.path[5].scrollY);
//     console.log('event.path[5].scrollY',event.path[5].scrollY   );
//     window.scrollY = 100;
//     console.log(event);
// });

var a = document.querySelector('img').width;
console.log(a);
var dragger = function(event){
    event.preventDefault();
    document.querySelector('ul').style = `margin-left:-${a}px`;

    a = a + 390;
  
    console.log(a);

};
var images =  document.querySelectorAll('img');
for(var i = 0 ; i < images.length ; i++){

    document.querySelectorAll('img')[i].ondragend = dragger

    console.log('index',i);
}



