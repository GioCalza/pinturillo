//var_dichiarazione
{
var penna_dim;

var words = ["RICK ASTLEY","APPLE", "COIN", "PENCIL", "LAPTOP", "SUNGLASSES", "SHOES", "SHARK", "DEER", "PIZZA","ICEBERG","CRAB", "BOOK","PENCIL","SHOES","SHOTGUN","MONKEY","DESK" ];

var n=(Math.random()*100);

var n2=n%1;
    n=n-n2;
    n=n%18;
var parola_draw=words[n];

var color= "black";

var isdrawing=false;

var canvas = document.getElementById("board");

var bassline = new Audio('bassline.mp3');

var day=true;

var day_light="rgb(147, 255, 228)";

var day_dark="rgb(0, 197, 148)";

var night_light = "rgb(0, 197, 148)";

var night_dark = "rgb(0, 131, 98)"
}


window.onload= function theme() {

    var currentTime = new Date();
    var ora = currentTime.getHours();

    if (ora>=18 || ora<=7 ) {
        document.getElementById("style").innerHTML='<link id="style" rel="stylesheet" href="Style/style_night.css">';
    }
    else if(ora>7 && ora<18){
        document.getElementById("style").innerHTML='<link id="style" rel="stylesheet" href="Style/style.css">';
    }

    
    setInterval( function() {
        var currentTime = new Date();
        var ora = currentTime.getHours();

        if (ora>=18 || ora<=7 ) {
            document.getElementById("style").innerHTML='<link id="style" rel="stylesheet" href="Style/style_night.css">';
        }
        else if(ora>7 && ora<18){
            document.getElementById("style").innerHTML='<link id="style" rel="stylesheet" href="Style/style.css">';
        }
        
    }, 60000);

    
    
}
document.onmousedown = function(){
    
    isdrawing=true;
    
}

document.onmouseup = function(event){
    
    isdrawing=false;
}

document.onmousemove = function draw(event){

        
            
        x=event.pageX;
        y=event.pageY;


        x-=canvas.offsetLeft;
        y-=canvas.offsetTop;
        
            if (canvas.getContext&&isdrawing==true) {


        var ctx= canvas.getContext("2d");

                    

                ctx.beginPath();
                    ctx.fillStyle = color;
                    ctx.arc(x*0.315,y*0.3,penna_dim,0,Math.PI*2,true);
                    ctx.fill();
                ctx.closePath();

                
            }
        
}

function startgame(){

    

    document.getElementById("startbutton").innerHTML='';

    canvas.style.backgroundColor= "white";

    document.getElementById("word").innerHTML="draw: "+parola_draw;
    
    startmusic();
    changecolor9();
    penna_media();

}

function timer(){
    
        var tempo = 180;

            setInterval(
                function(){

                var timer_show = document.getElementById("timer");
                
                var tempoString = "" + tempo;

                timer_show.textContent=tempoString;
                
                if(tempo<=30){
                    if(tempo%2==0){
                        timer_show.style.color="red";

                    }
                    else{
                        timer_show.style.color="black";
                    }
                }
                
                

                if(tempo==0){
                    window.alert("Game Over");
                }
                else{
                    tempo = tempo-1;
                }


            }, 1000);
}
//changepen
{
function penna_enorme(){

    penna_dim=15;
    document.getElementById("dimension4").style.borderWidth = "2px";
    document.getElementById("dimension1").style.borderWidth = "1px";
    document.getElementById("dimension2").style.borderWidth = "1px";
    document.getElementById("dimension3").style.borderWidth = "1px";

    document.getElementById("dimension4").style.borderColor="black";
    document.getElementById("dimension1").style.borderColor="white";
    document.getElementById("dimension2").style.borderColor="white";
    document.getElementById("dimension3").style.borderColor="white";
}
    

function penna_grande(){

    penna_dim=6;
    document.getElementById("dimension4").style.borderWidth = "1px";
    document.getElementById("dimension1").style.borderWidth = "2px";
    document.getElementById("dimension2").style.borderWidth = "1px";
    document.getElementById("dimension3").style.borderWidth = "1px";

    document.getElementById("dimension4").style.borderColor="white";
    document.getElementById("dimension1").style.borderColor="black";
    document.getElementById("dimension2").style.borderColor="white";
    document.getElementById("dimension3").style.borderColor="white";
}

function penna_media(){
    penna_dim=3;
    document.getElementById("dimension4").style.borderWidth = "1px";
    document.getElementById("dimension1").style.borderWidth = "1px";
    document.getElementById("dimension2").style.borderWidth = "2px";
    document.getElementById("dimension3").style.borderWidth = "1px";
    
    document.getElementById("dimension4").style.borderColor="white";
    document.getElementById("dimension2").style.borderColor="black";
    document.getElementById("dimension1").style.borderColor="white";
    document.getElementById("dimension3").style.borderColor="white";
}

}

//changecolor
{
        function changecolor1(){
        

        color = document.getElementById("colore1").style.backgroundColor ;

        document.getElementById("colore1").style.borderWidth = "8.9px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
    }

    function changecolor2(){


        

        color = document.getElementById("colore2").style.backgroundColor ;
        
        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "8.9px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
    }

    function changecolor3(){


        

        color = document.getElementById("colore3").style.backgroundColor ;
        
        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "8.9px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
    }

    function changecolor4(){


        color = document.getElementById("colore4").style.backgroundColor ;
        
        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "8.9px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
    }

    function changecolor5(){



        color = document.getElementById("colore5").style.backgroundColor ;
        
        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "8.9px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
    }

    function changecolor6(){



        color = document.getElementById("colore6").style.backgroundColor ;

        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "8.9px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
        
    }

    function changecolor7(){


        color = document.getElementById("colore7").style.backgroundColor ;
        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "8.9px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
        
    }

    function changecolor8(){


        color = document.getElementById("colore8").style.backgroundColor ;
        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "8.9px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
        
    }

    function changecolor9(){



        color = document.getElementById("colore9").style.backgroundColor ;
        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "8.9px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
        
    }

    function changecolor10(){



        color = document.getElementById("colore10").style.backgroundColor ;
        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "8.9px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
        
    }
    function changecolor11(){
        

        color = document.getElementById("colore11").style.backgroundColor ;



        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "8.9px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
        
    }
    function changecolor12(){
        

        color = document.getElementById("colore12").style.backgroundColor ;



        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "8.9px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
        
    }

    function changecolor13(){
        

        color = document.getElementById("colore13").style.backgroundColor ;



        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "8.9px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
        
    }
    function changecolor14(){
        

        color = document.getElementById("colore14").style.backgroundColor ;



        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "8.9px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
        
    }
    function changecolor15(){
        

        color = document.getElementById("colore15").style.backgroundColor ;



        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "8.9px";
        document.getElementById("colore16").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "1px";
        
    }
    function changecolor16(){
        

        color = document.getElementById("colore16").style.backgroundColor ;



        document.getElementById("colore1").style.borderWidth = "1px";
        document.getElementById("colore2").style.borderWidth = "1px";
        document.getElementById("colore3").style.borderWidth = "1px";
        document.getElementById("colore4").style.borderWidth = "1px";
        document.getElementById("colore5").style.borderWidth = "1px";
        document.getElementById("colore6").style.borderWidth = "1px";
        document.getElementById("colore7").style.borderWidth = "1px";
        document.getElementById("colore8").style.borderWidth = "1px";
        document.getElementById("colore9").style.borderWidth = "1px";
        document.getElementById("colore10").style.borderWidth = "1px";
        document.getElementById("colore11").style.borderWidth = "1px";
        document.getElementById("colore12").style.borderWidth = "1px";
        document.getElementById("colore13").style.borderWidth = "1px";
        document.getElementById("colore14").style.borderWidth = "1px";
        document.getElementById("colore15").style.borderWidth = "1px";
        document.getElementById("colore16").style.borderWidth = "8.9px";
        
    }
}

//appunti
{
        /*
        setInterval(function draw(){

            

            var x = event.screenX;
            var y = event.screenY;

            if (canvas.getContext) {

                var ctx = canvas.getContext("2d");

                ctx.beginPath();
                    ctx.fillStyle ="white";
                    ctx.arc(x,y,penna_dim,0,Math.PI*2,true);
                    ctx.fill();
                    ctx.stroke();
                ctx.closePath();
            }
        
        }, 20);

        */

    /*

    console.log per stampare

    math.random() per numeri casuali

    */

}
