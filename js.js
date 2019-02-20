

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

// var widthOfImg = document.querySelector('img').width;
// var assignWidth = widthOfImg;
// var images =  document.querySelectorAll('img');
// b = (images.length-4)*widthOfImg;
// console.log(widthOfImg);
// widthOfImg= widthOfImg- 480;


// var dragger = function(event){
//     console.log('event Screen X postion',event.screenX)
//     console.log('Screen X ',screenXPosition)
//     if(event.screenX < screenXPosition){
//         widthOfImg = widthOfImg + assignWidth;
//         if (widthOfImg > b){
//             widthOfImg =b;
//         }
//         document.querySelector('ul').style = `margin-left:-${widthOfImg}px`;



//     }else{
//         widthOfImg = widthOfImg - assignWidth;
//         if(widthOfImg < 0){
//             widthOfImg = 0;
//         }
//         document.querySelector('ul').style = `margin-left:-${widthOfImg}px`;




//     }


// };
// var screenXPosition = 0;
// for(var i = 0 ; i < images.length ; i++){

//     console.log(i);
//     document.querySelectorAll('img')[i].ondragstart = function(event){
//         screenXPosition = event.screenX;
//     };
//     document.querySelectorAll('img')[i].ondragend = dragger


//     // document.querySelectorAll('img')[i].onclick = function(){
//     //     document.querySelectorAll('img')[i].style='transform:scale(2)';
//     // }

// }







//to do list



// // get list in class
// document.querySelector('button').onclick = function(){

//      getData = prompt('enter the first to do list');
//      var firstList = new ToDo().getToDO(getData);

// }
// class ToDo{
//     getToDO(getData){
//         return this.getData;
//     }
// }

// // create object

// // append in html

// var selectBody = document.querySelector('body');
// var insertParagraph = document.createElement('p');
// insertParagraph.innerText = `${getData}`
// selectBody.appendChild(insertParagraph);



// ask for proompt






// class Person {
//     constructor(){
//         this.name ;
//         this.age;
//     }
// }


// var ram = new Person();
// ram.name='ram'

// var test={
//     name:'ram',
// }

// console.log('test',test);


// console.log(ram);



// --------------------------


// class student {
//     constructor(name, grade, phone, section){
//         this.name= name;
//         this.grade= grade;
//         this.phone= phone;
//         this.section = section;
//     }
// }

// class section {
//     constructor(){
//         this.studentsArray = [];
//     }

//     enrollStudents(name, grade, phone, section){
//         var studentToEnroll = new student(name, grade, phone, section);
//         this.studentsArray.push(studentToEnroll);
//     }

//     findViaRoll(no){
//         console.log(this.studentsArray[no]);
//     }
// }


// student1 = new section();
// student2 = new section();
// student3 = new section();

// student1.enrollStudents('prastut' , 12, 9870000000, 'B');
// student2.enrollStudents('hary' , 19, 987000500, 'B');
// student3.enrollStudents('putter' , 10, 98989898, 'D');

// console.log(student1);



// ---------------------------------

// class Books{
//     constructor(name, id, author, price){
//         this.name= name;
//         this.id= id;
//         this.author= author;
//         this.price= price;
//     }
// }

// class Library{
//     constructor(name){
//         this.booksArray=[];
//         this.name=name;
//     }

//     addBooks(name, id, author, price){
//         var addBooks = new Books(name, id, author, price);
//         this.booksArray.push(addBooks);
//     }

//     removeBooks(no){
//         // console.log(this.booksArray);
//         // var number= prompt('enter which array number book you want to remove');
//         this.removedBookArray= this.booksArray.splice(no, 1);
//         console.log(this.removedBookArray);
//         console.log('this is a list of books', this.booksArray);
//     }
// }

// var library1= new Library('a');
// library1.addBooks('Harry Potter', 129, 'JK Rowling', 399);
// library1.addBooks('The Alchemist' , 222, 'Paulo Coelho', 299);
// var library2= new Library('b');
// library2.addBooks('Think And Grow Rich', 122, 'Napoleon Hill', 699);
// library2.addBooks('Harry Potter', 129, 'JK Rowling', 399);
// var library3= new Library('c');
// library3.addBooks('The Law of Success', 125, 'Napoleon Hill', 499);
// library3.addBooks('Harry Potter', 129, 'JK Rowling', 399);


// --------------------------------------------

// class Student{
//     constructor(name,phone,address){
//         this.name=name;
//         this.phone=phone;
//         this.address=address;
//     }
// }

// class Institute{
//     constructor(name){
//         this.name=name;
//         this.studentArray=[];
//     }

//     enroll(name,phone,address){
//         var addStudent=new Student(name,phone,address);
//         this.studentArray.push(addStudent);
//     }
// }

// var institute1= new Institute('Half Tone');
// institute1.enroll('prastut',98000000,'baneshwor');
// institute1.enroll('casm',98000000,'sunakoti');

// var institute2 = new Institute('Broad Way');
// institute2.enroll('samar' , 988888488, 'pepsicola');
// institute2.enroll('prashil' , 988888488, 'gaushala');

// -----------------------------


// var Person = function(name, address,yearOfBirth){
//     this.name=name;
//     this.address=address;
//     this.yearOfBirth = yearOfBirth;
// }

// Person.getAge = function(){
//     return 2019-this.yearOfBirth;
// }  




// var person1= new Person('prastut' , 'gaushala', 1998);


// -----------------------game start here-------------------



// var dice;
// var currentValue = 0;
// var playerScore = [0,0];
// var activePlayer = 0;
// var roll = document.querySelector('.roll');
// var save = document.querySelector('.save');
// var diceValueDisplayer = document.querySelector('.dice-value');
// var currentValueSelector = document.querySelector('.current-value');
// document.querySelector('.player1').classList.add('active');



// // click on roll dice to display dice value
// roll.addEventListener('click', function () {


//     // put random value of dice in a variable

//     dice = Math.ceil(Math.random() * 6);
//     console.log(dice);

//     // update UI with dice value
//     diceValueDisplayer.innerText = dice;

//     // add the value in another variable

//     currentValue += dice;

//     // update UI with added value
//     currentValueSelector.innerText = currentValue;

// });


// // if save is pressed 

// save.addEventListener('click', function(){

//     // save the current value to main value
//     playerScore[activePlayer]+=currentValue;

//     // make the value of UI and current dice value to 0
//     var mainValue = document.querySelector('#main-value-id-'+activePlayer);
//     mainValue.innerText=playerScore[activePlayer];


//     // change active player
//     if(activePlayer == 0){
//         activePlayer = 1;
//     }else{
//         activePlayer = 0;
//     }


//     // // change active player UI
//     document.querySelector('.player1').classList.toggle('active');
//     document.querySelector('.player2').classList.toggle('active');



//     // set the value of current value to 0

//     currentValue = 0;
//     currentValueSelector.innerText = currentValue;

//     // set the value of dice to 0

//     dice = 0;
//     diceValueDisplayer.innerText = dice;



// });

// --------------------------------------------------------



// to do using class


// class ToDo {
//     constructor(task, status = true) {
//         this.task = task;
//         this.status = status;
//     }
// }

// class TaskList {
//     constructor() {
//         this.taskArray = [];
//     }

//     getTask(task, status) {
//         var todo = new ToDo(task, status);
//         this.taskArray.push(todo);
//         return this;
//     }

//     repopulate() {
//         document.querySelector('table').innerHTML='';        
//         for (var i = 0; i < this.taskArray.length ; i++){
//             var item = this.taskArray[i];
//             var selectTask = item.task;
//             this.changeInUI(selectTask,i)
//         }
   
//     }

//     changeInUI(task,i){
//         var selectTable = document.querySelector('table');
//         var forRow = document.createElement('tr');
//         var forColumn = document.createElement('td');
//         var forSecondColumn = document.createElement('td');
//         var forButton = document.createElement('button');
//         forButton.innerText = 'remove';
//         forButton.setAttribute('onclick',`remove(${i})`)
//         forColumn.innerText = task;
//         forSecondColumn.appendChild(forButton);
//         forRow.appendChild(forColumn);
//         forRow.appendChild(forSecondColumn);
//         selectTable.appendChild(forRow);

//     }

//     removeFunction(index){
//         // when clicked removes the same tr
//         this.taskArray.splice(index,1);
//         return this;

//     }

// }



// selectButton = document.querySelector('button');
// obj1 = new TaskList();
// selectButton.onclick= function(){
//     var askQuestion = prompt('what do you want to add in ToDo?');
//     obj1.getTask(askQuestion).repopulate();

// }




// var remove = function(index){
//     obj1.removeFunction(index).repopulate();
// }



// -----------------------------------------



class ToDo {
    constructor(task){
        this.task = task;
    }
}

class TaskList {
    // make array store the tasks

    constructor(){
        this.taskArray = [];
        if(localStorage.getItem('items')){
            this.taskArray = JSON.parse(localStorage.getItem('items'));

        }
    }
    
    addInArray(task){
        var todo = new ToDo(task);
        this.taskArray.push(todo);
        localStorage.setItem('items' , JSON.stringify(this.taskArray));
        return this;
    }
    
    removeArray(index){
        this.taskArray.splice(index , 1);
        localStorage.setItem('items' , JSON.stringify(this.taskArray));
        return this;
    }

    // change the data
    
    repopulate(){
        document.querySelector('table').innerHTML='';
        for (var i = 0 ; i < this.taskArray.length ; i++){
            var item = this.taskArray[i];
            var selectTask = item.task;
            this.changeUI(selectTask , i);
        }
    }
    
    // display task1 in UI
    changeUI(selectTask , i){
        var selectTable = document.querySelector('table');
        var forRow = document.createElement('tr');
        var forColumn = document.createElement('td');
        var forSecondColumn = document.createElement('td');
        var forButton = document.createElement('button');
        forButton.innerText = 'Remove';
        forButton.setAttribute('onclick' , `remove(${i})`);
        forSecondColumn.appendChild(forButton);
        forColumn.innerText = selectTask;
        forRow.appendChild(forColumn);
        forRow.appendChild(forSecondColumn);
        selectTable.appendChild(forRow);
    }


}

var ButtonSelector = document.querySelector('button');
var task1 = new TaskList();

window.onload = ()=>{
    task1.repopulate();
}
var remove = function(index){
    task1.removeArray(index).repopulate();
}

ButtonSelector.onclick = function(){
    var ask = prompt('enter your To Do list');
    task1.addInArray(ask).repopulate();
}

















