
init()

// setInterval(init, 6000)




//createCandies()
var score = 0


function init() {

    var y = 100;
    var random2;
    var rand = []
    var box = document.getElementById("box");
    var container = document.getElementById("container");
    //var rotated = false;
    var grade = 0

    //console.log(random)
    var random = Math.floor(Math.random() * 10) + 1

    for (var x = 0; x < 10; x++) {
        random2 = Math.floor(Math.random() * 30) + 1
        rand.push(random2);

    }

    //console.log(rand)

    for (var x = 0; x < 10; x++) {
        var element = document.createElement("div");
        y = y + 100;
        element.classList.add("box")
        container.appendChild(element);
        element.style.left = y + "px";
        element.innerHTML = "<img src='img/c1.png'>"
        var elemente = document.getElementsByClassName("box");
        var cifra = document.createElement("div");
        element.appendChild(cifra);
        cifra.classList.add("box_cifra");
        cifra.innerHTML = rand[x]
        //conso

    }




 



    setInterval(move , 45);
    getScore()





function move(){

        grade = grade + 10
        random = random + 10

        for (var y = 0; y < rand.length; y++) {
            rand[y] = rand[y] * 1.02
            //console.log(rand)
        }


        //a = a + 10;

        for (var x = 0; x < elemente.length; x++) {
            var cc = rand[x]
            //  console.log(cc)
            elemente[x].style.transform = "rotate(" + grade + "deg)";
            if (cc < 400) {
                elemente[x].style.top = cc + "px";
            } else {
                elemente[x].style.display = "none"
               // createCandies()
            }

        }

     }



function getScore(){
     for (var x = 0; x < elemente.length; x++) {
        elemente[x].addEventListener("click", function(event) {
           
                event.target.parentElement.style.display = "none"
                console.log(event.target.innerHTML)
                score = score + Number(event.target.innerHTML)
                console.log(score);
                document.getElementById("score").innerHTML = score
           
        })
    }
}






}

