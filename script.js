/*TO DO: 
    1. STOP AUDIO IF A NEW AUDIO IS PLAYED. 
    2. STOP ANIMATION OF STOPPED AUDIO 
    3. CHANGE VALUE OF STOPPED AUDIO BUTTON TO "paused"
    4. CHANGE TEXT OF STOPPED AUDIO BACK TO DISPLAYING A PLAY BUTTON

*/

var myAudio = new Audio("/audio/crystalline.mp3");
var ddertbagAudio = new Audio("/audio/bloom.mp3");
var fouramAudio = new Audio("/audio/bm2.mp3");
var taylorMorganAudio = new Audio("/audio/tasteslikecopper.mp3");

myAudio.volume = 0.7;
ddertbagAudio.volume = 0.5;
fouramAudio.volume = 0.75;
taylorMorganAudio.volume = 0.5;

function playPause(){
    let btn = document.getElementById("home-play-button");        
    let buttonStyle = document.querySelector('.btn-play').style; //used to affect the css styling of .btn-play

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
        myAudio.play();
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
        myAudio.pause();
    }
}

function playDdertbag(){
    let btn = document.getElementById("ddertbag-play-button");        
    let buttonStyle = document.querySelector('.btn-play-musician-row-ddertbag').style; //used to affect the css styling of .btn-play (the pause & play icon) for the ddertbag section

    /*Used to Active The Sound Wave Animation Keyframe on Button Click */
    let soundWaveStyle1 = document.querySelector('.boxContainerMusicianRow .box1ddertbag').style; //used to affect the css styling of .box1 in the "my favorite artists" section
    let soundWaveStyle2 = document.querySelector('.boxContainerMusicianRow .box2ddertbag').style; //used to affect the css styling of .box2 in the "my favorite artists" section
    let soundWaveStyle3 = document.querySelector('.boxContainerMusicianRow .box3ddertbag').style; //used to affect the css styling of .box3 in the "my favorite artists" section
    let soundWaveStyle4 = document.querySelector('.boxContainerMusicianRow .box4ddertbag').style; //used to affect the css styling of .box4 in the "my favorite artists" section
    let soundWaveStyle5 = document.querySelector('.boxContainerMusicianRow .box5ddertbag').style; //used to affect the css styling of .box5 in the "my favorite artists" section

    let play = "&#9658;";
    let paused = "&#9612;" + "&#9612;";

    if(btn.value == "paused"){
        /*Start animation*/
        soundWaveStyle1.animationName = 'quiet';
        soundWaveStyle2.animationName = 'normal'; 
        soundWaveStyle3.animationName = 'quiet';
        soundWaveStyle4.animationName = 'loud';
        soundWaveStyle5.animationName = 'quiet';

        buttonStyle.fontSize = '15px'; //changes font size to 36px (from 48px) for pause icon
        buttonStyle.paddingLeft = '5px'; //changes padding-left to 15px (from 10px);
        buttonStyle.paddingBottom = '2px';
        btn.innerHTML = paused;
        btn.value = "playing";
        ddertbagAudio.play();
    }

    else{ //used to revert back to play icon
        /*Stop animation*/
        soundWaveStyle1.animationName = '';
        soundWaveStyle2.animationName = ''; 
        soundWaveStyle3.animationName = '';
        soundWaveStyle4.animationName = '';
        soundWaveStyle5.animationName = '';

        buttonStyle.fontSize = '20px'; 
        buttonStyle.paddingLeft = '2px';
        btn.innerHTML = play;
        btn.value = "paused";
        ddertbagAudio.pause();
    }
}

function play4am(){
    let btn = document.getElementById("4am-play-button");        
    let buttonStyle = document.querySelector('.btn-play-musician-row-4am').style; //used to affect the css styling of .btn-play (the pause & play icon) for the 4am section

    /*Used to Active The Sound Wave Animation Keyframe on Button Click */
    let soundWaveStyle1 = document.querySelector('.boxContainerMusicianRow .box1FourAm').style; //used to affect the css styling of .box1 in the "my favorite artists" section
    let soundWaveStyle2 = document.querySelector('.boxContainerMusicianRow .box2FourAm').style; //used to affect the css styling of .box2 in the "my favorite artists" section
    let soundWaveStyle3 = document.querySelector('.boxContainerMusicianRow .box3FourAm').style; //used to affect the css styling of .box3 in the "my favorite artists" section
    let soundWaveStyle4 = document.querySelector('.boxContainerMusicianRow .box4FourAm').style; //used to affect the css styling of .box4 in the "my favorite artists" section
    let soundWaveStyle5 = document.querySelector('.boxContainerMusicianRow .box5FourAm').style; //used to affect the css styling of .box5 in the "my favorite artists" section

    let play = "&#9658;";
    let paused = "&#9612;" + "&#9612;";

    if(btn.value == "paused"){
        /*Start animation*/
        soundWaveStyle1.animationName = 'quiet';
        soundWaveStyle2.animationName = 'normal'; 
        soundWaveStyle3.animationName = 'quiet';
        soundWaveStyle4.animationName = 'loud';
        soundWaveStyle5.animationName = 'quiet';

        buttonStyle.fontSize = '15px'; //changes font size to 36px (from 48px) for pause icon
        buttonStyle.paddingLeft = '5px'; //changes padding-left to 15px (from 10px);
        buttonStyle.paddingBottom = '2px';
        btn.innerHTML = paused;
        btn.value = "playing";
        fouramAudio.play();   
    }

    else{ //used to revert back to play icon
        /*Stop animation*/
        soundWaveStyle1.animationName = '';
        soundWaveStyle2.animationName = ''; 
        soundWaveStyle3.animationName = '';
        soundWaveStyle4.animationName = '';
        soundWaveStyle5.animationName = '';

        buttonStyle.fontSize = '20px'; 
        buttonStyle.paddingLeft = '2px';
        btn.innerHTML = play;
        btn.value = "paused";
        fouramAudio.pause();
    }
}

function playTaylorMorgan(){
    let btn = document.getElementById("taylor-play-button");      
    let buttonStyle = document.querySelector('.btn-play-musician-row-taylor').style; //used to affect the css styling of .btn-play (the pause & play icon) for the taylor morgan section

    /*Used to Active The Sound Wave Animation Keyframe on Button Click */
    let soundWaveStyle1 = document.querySelector('.boxContainerMusicianRow .box1TaylorMorgan').style; //used to affect the css styling of .box1 in the "my favorite artists" section
    let soundWaveStyle2 = document.querySelector('.boxContainerMusicianRow .box2TaylorMorgan').style; //used to affect the css styling of .box2 in the "my favorite artists" section
    let soundWaveStyle3 = document.querySelector('.boxContainerMusicianRow .box3TaylorMorgan').style; //used to affect the css styling of .box3 in the "my favorite artists" section
    let soundWaveStyle4 = document.querySelector('.boxContainerMusicianRow .box4TaylorMorgan').style; //used to affect the css styling of .box4 in the "my favorite artists" section
    let soundWaveStyle5 = document.querySelector('.boxContainerMusicianRow .box5TaylorMorgan').style; //used to affect the css styling of .box5 in the "my favorite artists" section

    let play = "&#9658;";
    let paused = "&#9612;" + "&#9612;";

    if(btn.value == "paused"){
        /*Start animation*/
        soundWaveStyle1.animationName = 'quiet';
        soundWaveStyle2.animationName = 'normal'; 
        soundWaveStyle3.animationName = 'quiet';
        soundWaveStyle4.animationName = 'loud';
        soundWaveStyle5.animationName = 'quiet';

        buttonStyle.fontSize = '15px'; //changes font size to 36px (from 48px) for pause icon
        buttonStyle.paddingLeft = '5px'; //changes padding-left to 15px (from 10px);
        buttonStyle.paddingBottom = '2px';
        btn.innerHTML = paused;
        btn.value = "playing";
        taylorMorganAudio.play();
    }

    else{ //used to revert back to play icon
        /*Stop animation*/
        soundWaveStyle1.animationName = '';
        soundWaveStyle2.animationName = ''; 
        soundWaveStyle3.animationName = '';
        soundWaveStyle4.animationName = '';
        soundWaveStyle5.animationName = '';

        buttonStyle.fontSize = '20px'; 
        buttonStyle.paddingLeft = '2px';
        btn.innerHTML = play;
        btn.value = "paused";
        taylorMorganAudio.pause();
    }
}