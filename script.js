var audio = new Audio("/audio/bloom.mp3")
audio.volume = 0.6;

function playPause(){
    let btn = document.getElementById("home-play-button");        
    let buttonStyle = document.querySelector('.btn-play').style; //used to affect the css styling of .btn-pla

    /*Used to Active The Sound Wave Animation Keyframe on Button Click */
    let soundWaveStyle1 = document.querySelector('.box1').style; //used to affect the css styling of .box1 
    let soundWaveStyle2 = document.querySelector('.box2').style; //used to affect the css styling of .box2 
    let soundWaveStyle3 = document.querySelector('.box3').style; //used to affect the css styling of .box3 
    let soundWaveStyle4 = document.querySelector('.box4').style; //used to affect the css styling of .box4 
    let soundWaveStyle5 = document.querySelector('.box5').style; //used to affect the css styling of .box5 

    let play = "&#9658;";
    let paused = "&#9612;" + "&#9612;";

    if(btn.value == "paused"){
        /*Start animation*/
        soundWaveStyle1.animationName = 'quiet';
        soundWaveStyle2.animationName = 'normal'; 
        soundWaveStyle3.animationName = 'quiet';
        soundWaveStyle4.animationName = 'loud';
        soundWaveStyle5.animationName = 'quiet';

        buttonStyle.fontSize = '36px'; //changes font size to 36px (from 48px) for pause icon
        buttonStyle.paddingLeft = '15px'; //changes padding-left to 15px (from 10px);
        btn.innerHTML = paused;
        btn.value = "playing";
        audio.play();
    }

    else{ //used to revert back to play icon
        /*Stop animation*/
        soundWaveStyle1.animationName = '';
        soundWaveStyle2.animationName = ''; 
        soundWaveStyle3.animationName = '';
        soundWaveStyle4.animationName = '';
        soundWaveStyle5.animationName = '';

        buttonStyle.fontSize = '48px'; 
        buttonStyle.paddingLeft = '10px';
        btn.innerHTML = play;
        btn.value = "paused";
        audio.pause();
    }
}