

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

function forMargin(){
    
    
        document.getElementsByClassName('box')[0].style=`margin-left:70vw`;
        setTimeout(function(){
            document.getElementsByClassName('box')[0].style=`margin-right:70vw`;

        },5000) 
            
    

}

function runOnClick(){
        forMargin();
}


function changeColor(){
    var r= Math.floor(Math.random()*255);
    var g= Math.floor(Math.random()*255);
    var b= Math.floor(Math.random()*255);
    var a= Math.random();
    document.getElementsByClassName('color-change')[0].parentElement.style=`background:rgba(${r},${g},${b},${a})`;
}

function clicked(){
    setInterval(function(){
        // for(i=0;i<=100;i++){
            changeColor();
            
        // }
    },500);
}
