//variabili
{
    var mute= false;

    var mute_but = document.getElementById("mutebutton");

}

function startmusic(){
    bassline.play();
    setInterval(function(){
        if(bassline.ended){
            bassline.play();
        }
    }, 1000);

}

function mute_start() {
    if(mute==true){
        mute=false;
        mute_but.innerHTML="<img src='volume.png' alt=''>";
        bassline.muted=false;
    }
    else if(mute==false){
        mute=true;
        mute_but.innerHTML='<img src="mute.png" alt="">';
        bassline.muted=true;
    }
}

