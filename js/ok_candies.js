
init()

// setInterval(init, 6000)




//createCandies()
var score = 0


function init() {

    
    var random2;
    var candies={};

    //var rand = []
    var box = document.getElementById("box");
    var container = document.getElementById("container");
    //var rotated = false;
    var grade = 0;
    var nb=10;
    var max_punct=90;
    var interv;

    var nivel=0;
    //console.log(random)
  //  var random = Math.floor(Math.random() * 10) + 1

    function create_candies(){
        var y = 100;
        candies={};
        container.innerHTML="";

        for (var x = 0; x < nb; x++) {
        
            var candy={ id : x};
            var randImg=Math.floor(Math.random() * 8) +1;
            candy.rand = Math.floor(Math.random() * max_punct) + 1;
            
            y = y + 100;
            
            var element = document.createElement("div");   
            element.classList.add("box");
            element.style.left = y + "px";
           // element.innerHTML = "<img src='img/c"+randImg+".png'>"
            if(nivel==0){
                element.innerHTML = "<img src='img/c1.png'>";
            }else if(nivel==1){
                 element.innerHTML = "<img src='img/c3.png'>";
            }
            else if(nivel==2){
                 element.innerHTML = "<img src='img/c4.png'>";
            }else if(nivel==3){
                 element.innerHTML = "<img src='img/c5.png'>";
            }
            else if(nivel==4){
                 element.innerHTML = "<img src='img/c6.png'>";
            }
            else if(nivel==5){
                 element.innerHTML = "<img src='img/c7.png'>";
            }else if(nivel==6){
                 element.innerHTML = "<img src='img/c8.png'>";
            }else if(nivel==7){
                 element.innerHTML = "<img src='img/c9.png'>";
            }else if(nivel==8){
                 element.innerHTML = "<img src='img/c10.png'>";
            }
            else if(nivel==9){
                 element.innerHTML = "<img src='img/c11.png'>";
            }
            else if(nivel==10){
                 element.innerHTML = "<img src='img/c12.png'>";
            }
             else if(nivel==11){
                 element.innerHTML = "<img src='img/c13.png'>";
            }
             else if(nivel==12){
                 element.innerHTML = "<img src='img/c14.png'>";
            }
             else if(nivel==13){
                 element.innerHTML = "<img src='img/c15.png'>";
            }
             else if(nivel==14){
                 element.innerHTML = "<img src='img/c16.png'>";
            }
            else{
                 element.innerHTML = "<img src='img/c2.png'>";
            }
            
        //var elemente = document.getElementsByClassName("box");
            var cifra = document.createElement("div");
            element.appendChild(cifra);
            cifra.classList.add("box_cifra");
            cifra.innerHTML = candy.rand;
        //conso
            candy.element=element;
            candy.top=0;
            container.appendChild(element);
            candies[x]=candy;

            element.candy=candy;

            element.addEventListener("click", function(event) {
           
                //event.target.parentElement.style.display = "none";
                console.log(event.target.innerHTML);
                score = score + this.candy.rand; //Number(event.target.innerHTML);
                console.log(score);
                document.getElementById("score").innerHTML = score;
                remove_candy(this.candy);
            });

            
        }
    }

    function new_row(){
        create_candies();
        interv=setInterval(move , 45);
        nivel++;
    }

    function remove_candy(candy){
        candy.element.style.display="none";
        delete candies[candy.id];

        if(Object.keys(candies).length==0){
                clearInterval(interv);
                 new_row();
         }

    }

    function move(){

//        console.log("move");

        grade = grade + 10;
       // random = random + 10
        for (var x in candies) {
            var candy=candies[x];
            candy.top += 1 + Math.log(candy.rand/max_punct *10*(nivel+1));
            // console.log(cc)
           candy.element.style.transform = "rotate(" + grade + "deg)";
            if (candy.top < 400) {
                candy.element.style.top = candy.top + "px";
            } else {
                remove_candy(candy);
            }

        }

     }

    new_row();
}

