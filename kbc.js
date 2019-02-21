class Kbc {
    constructor(question , answers , correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    // UI displayer

    displayUI(){
        document.querySelector('.question').innerText = this.question;
        document.querySelector('#a-0').innerText = this.answers[0];
        document.querySelector('#b-1').innerText = this.answers[1];
        document.querySelector('#c-2').innerText = this.answers[2];
        document.querySelector('#d-3').innerText = this.answers[3];
       

    }

    checker(pathFinder , path){
        if(pathFinder == this.answers[this.correct]){
            setTimeout(function(){
                path.style='background:green';
                setTimeout(function(){
                    nextQuestion();
                    path.style='background:#fff';
                },1000);
            },2000);
        }
        else{
            path.style = 'background:red';
            nextQuestion();
        }
    }

 
}

// list of questions
var q1 = new Kbc('Who is the founder of SpaceX?' , ['A . Elon Musk' , 'B. Jeff Bezos' , 'C . Larry Page' , 'D. Jack Dorsey'] , 0);
var q2 = new Kbc('What is my name?' , ['A . Hiralal Tamang' , 'B. Prastut Dahal' , 'C . Jim Logan' , 'D. Kp Oli'] , 1);
var q3 = new Kbc('Where is HalfTone located?' , ['A . Bhaisepatti' , 'B. Kumaripati' , 'C . Ratnapark' , 'D. Dillibazar'] , 3);

// chose random question


var nextQuestion = function(){

    var questions= [q1,q2,q3];
    var number = Math.floor(Math.random()* questions.length);

    questions[number].displayUI();



    // for checking

    for (var i = 0 ; i < 4 ; i++){

        document.querySelectorAll('button')[i].onclick = function(e){
            var path = e.path[0];
            
            var pathFinder = e.path[0].innerText;
            questions[number].checker(pathFinder, path);
        }
    }


}

nextQuestion();



