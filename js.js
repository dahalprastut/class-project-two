

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

var ask=document.querySelector('.addToDo');
var click=0;
ask.onclick = function(){
    
        var askForDo = prompt('what do you want to add in todo');

        var forRow =document.createElement('tr');
     
        
        var forTableData = document.createElement('td');
        
        
        var removeButton = document.createElement('td');
        
        var button = document.createElement('button');
        button.innerText=(`remove`);

        for(i=0 ; i <= click ; i++){         //when clicked gives onclick attribute            
            
            var attributeCreate=document.createAttribute('onclick');
            attributeCreate.value = `remove(${i})`;
            button.setAttributeNode(attributeCreate);

        }


        removeButton.appendChild(button);

        forTableData.innerText=`${askForDo}`;
        
        forRow.appendChild(forTableData);
        forRow.appendChild(removeButton);
        selectTable= document.querySelector('table');
        selectTable.appendChild(forRow);
        click=click+1;
    
        
    }   

    function remove(i){           //selects from document eg remove(0)
        document.querySelector('table').children[i].innerHTML='';
    }


    // ---------------


// var add= document.querySelector('.addToDo');

//  add.onclick = function (){
//     var things = prompt('Enter to do thing');
//      document.querySelector
//  }



