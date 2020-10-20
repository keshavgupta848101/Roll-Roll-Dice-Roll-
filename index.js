var randomNumber1 = 2;
console.log(randomNumber1);

var aa = document.querySelector("input");
aa.addEventListener("click", change);

// iii.addEventListener("click", change);





 function change() {
   
    var ew = new Audio('roll.mp3')
    ew.play();
    var iii = document.querySelector(".img1");
    var ii2 = document.querySelector(".img2");
    var k = 1;
    var k = Math.floor(Math.random() * 6) + 1; 
    console.log(k);
   


    switch (k) {
        case 6:
            iii.setAttribute("src", "images/dice6.png")
            break;
        case 1:
            iii.setAttribute("src", "images/dice1.png")
            break;
        case 2:
            iii.setAttribute("src", "images/dice2.png")
            break;
        case 3:
            iii.setAttribute("src", "images/dice3.png")
            break;
        case 4:
            iii.setAttribute("src", "images/dice4.png")
            break;
        case 5:
            iii.setAttribute("src", "images/dice5.png")
            break;
    


    }



    var m = 1;
    var m = Math.floor(Math.random() * 6) + 1;
    console.log(m);

    {
        switch (m) {
            case 6:
                ii2.setAttribute("src", "images/dice6.png")
                break;
            case 1:
                ii2.setAttribute("src", "images/dice1.png")
                break;
            case 2:
                ii2.setAttribute("src", "images/dice2.png")
                break;
            case 3:
                ii2.setAttribute("src", "images/dice3.png")
                break;
            case 4:
                ii2.setAttribute("src", "images/dice4.png")
                break;
            case 5:
                ii2.setAttribute("src", "images/dice5.png")
                break;
        
    
    
        }
    }





    if(k > m)
    {
      document.querySelector("h1").innerHTML = "🎲Player 1 Winsss"
       
    }
else if(k === m)
{
     document.querySelector("h1").innerHTML = "Enhhh its a Draw";
    var fail = new Audio('fail.mp3');
    fail.play();
}
    else{

        document.querySelector("h1").innerHTML = "Player 2 Winsss 🎲"

    }
}



var a2 = document.querySelector("input");
a2.addEventListener("click", change);

var ii2 = document.querySelector(".img2");
ii2.addEventListener("click", change);




// function change()
// {
//     iii.src("images/dice6.png");
// }
// iii.addEventlistner('click', change)



