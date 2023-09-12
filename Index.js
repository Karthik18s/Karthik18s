var i,s;

for(i=0;i<7;i++)

{

    document.querySelectorAll("button")[i].addEventListener("click",function (){

    s=this.innerHTML;

    sound(s);

    animation(s);

    });

}

document.addEventListener("keydown",key);

function key(event){

   sound(event.key);

   animation(event.key);

}

function sound(s){

    var a;

    switch(s)

    {

        case "w":

            a=new Audio("./sounds/tom-1.mp3");

           a.play();

        break;

        case "a":

            a=new Audio("./sounds/tom-2.mp3");

            a.play();

         break;

         case "s":

            a=new Audio("./sounds/tom-3.mp3");

            a.play();

         break;

        case "d":

         a=new Audio("./sounds/tom-1.mp3");

         a.play();

        break;

        case "j":

            a=new Audio("./sounds/snare.mp3");

            a.play();

         break;

         case "k":

            a=new Audio("./sounds/crash.mp3");

            a.play();

         break;

         case "l":

            a=new Audio("./sounds/kick-bass.mp3");

            a.play();

         break;

    }

}

function animation(ani)

{

    var x=document.querySelector("."+ani);

    x.classList.add("pressed");

    setTimeout(rev,100);

    function rev()

    {

        x.classList.remove("pressed");

    }



}

