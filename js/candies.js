
var max_punct=90;


class candy{
	constructor(){
		this.rand = Math.floor(Math.random() * max_punct) + 1;
		this.p=10;	
	}

	show_p(){
		console.log(" c.p = " + this.p + " p2=" + this.p2) ;
	}

	get x(){ return this.p; }
	set B(val){ this.p=val; }
};

candy.prototype.p2=15;



var c = new candy();
c.p=11;
var c2 = new candy();

c.show_p();
c2.show_p();

c.B=77;
console.log(" P = " + c.x);

candy.prototype.p2=20;

c.show_p();
c2.show_p();

/*
function cdy(){};

for(var p in candy.prototype)
	cdy.prototype[p]= candy.prototype[p];
*/

class cdy extends candy {
	show_p(){
		console.log(" c.p CDY = " + this.p + " p2=" + this.p2) ;
	}
};

cdy.prototype.p2=30;



var cc = new cdy();

cc.show_p();
c2.show_p();



for(var p in candy.prototype){
	console.log(" pss = " + p );
}


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
    
    var interv;
     var wrapper=document.getElementById("wrapper");
     var wrapperPos = wrapper.getBoundingClientRect();
     var eelement=document.getElementById("arrow");
     var rect = eelement.getBoundingClientRect();
     var xPos=wrapperPos.left - rect.left

    var nivel=0;
    //console.log(random)
  //  var random = Math.floor(Math.random() * 10) + 1

    function create_candies(){
        var y = 100;
        candies={};
        container.innerHTML="";

        for (var x = 0; x < nb; x++) {
        
            var candy={ id : x};
          //  console.log(candy);
            candy.rand = Math.floor(Math.random() * max_punct) + 1;
            
            y = y + 100;
            candy.candyPos=y
            var element = document.createElement("div");   
            element.classList.add("box");
            element.style.left = y + "px";


            element.innerHTML = "<img src='img/c"+((nivel%15)+1)+".png'>";

            
        //var elemente = document.getElementsByClassName("box");
            var cifra = document.createElement("div");
            element.appendChild(cifra);
            cifra.classList.add("box_cifra");
            cifra.innerHTML = candy.rand;
        //conso
            candy.element=element;

          //   var candElem=document.getElementById("candy.id");
            //    var wrapperPos = wrapper.getBoundingClientRect();


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

        // console.log("sss")
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
           // candy.top += (1+candy.rand/max_punct)*Math.log(nivel+1);
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


               
        

        document.onkeydown = function(e) {
           
           //console.log(arrPos)
            if(e.keyCode==37){
           //     console.log("left")
               xPos = xPos-20;
            console.log(xPos)
            document.getElementById("arrow").style.left = xPos+"px";
              
            }
            if(e.keyCode==39){
                
                console.log("right")
                 xPos = xPos+20;
         //   console.log(xPos)
            document.getElementById("arrow").style.left = xPos+"px";
            }
             if(e.keyCode==32){
        
                for(z in candies){
               
                  if(candies[z].candyPos-160 <  xPos && xPos <  candies[z].candyPos-60){                   
                   // console.log("ok_xPos= " + xPos)
                   //   console.log("ok_CandyPos= "+ candies[z].candyPos)
                   //    console.log("scor= "+ candies[z].rand)
                     score = score + candies[z].rand;
                     console.log("scorOK= "+score)
                     document.getElementById("score").innerHTML = score;
                     remove_candy(candies[z])
                 
                  }
                } 
            }

        };


   

  





    new_row();
}

