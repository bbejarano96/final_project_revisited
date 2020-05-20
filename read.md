So in my project wanted to make a google doodle with a beach theme. For the project I created an html document, a css document, and Javascript files. I wanted to also include a canvas element.

First I layed out the scene of the google doodle.

<div id="scene">
    <div class="clickable" id="mermaid"></div>
      <div class="clickable" id="starfish"></div>
      <div class="clickable" id="beachball"></div>
      <div class="clickable" id="lifesaver"></div>
      <div class="clickable" id="surfboard"></div>
      <div class="clickable" id="seahorse"></div>
  </div>

And I placed the canvas element into the html:

<div class="wrapper">
            <p class="unsupported"></p>
            <canvas id="canvas" width="700" height="500"></canvas>
          </div>

I wanted to make each of the letter on the google doodle clicable and use Javascript to play a noise when clicked by:

<audio id="mAudio" src="sounds/mermaid.m4a"></audio>
  <audio id="sAudio" src="sounds/starfish.mp3"></audio>
  <audio id="bAudio" src="sounds/beachball.m4a"></audio>
  <audio id="lAudio" src="sounds/lifesaver.mp3"></audio>
  <audio id="sbAudio" src="sounds/surfboard.m4a"></audio>
  <audio id="shAudio" src="sounds/seahorse.wav"></audio>

  Placing background music on the top right side of the page:

  <audio controls>
              <source src="ocean.mp3" type="audio/mpeg">
                </audio>

Going to the CSS:

Placing and adjecting the positions of each element:

#scene {
    width: 800px;
    height: 340px;
    margin-left: auto;
    margin-right: auto;
    bottom:-15px;
    background: url(images/background.jpg);
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
}
#canvas {
    position: absolute;
    width:800px;
    height:120px;
    left: 0;
    right: 0;
    top: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background: tan;
    border: 6px solid lightblue;
}

#mermaid {
    background-image: url(images/mermaid.svg);
    width: 120px;
    height: 288px;
    position: absolute;
    bottom:-34px;
    left:0;
    z-index: 1000;
    background-repeat: no-repeat;
}

#starfish {
    background-image: url(images/starfish.svg);
    width: 100px;
    height: 124px;
    position: absolute;
    left: 120px;
    bottom: 120px;
    background-repeat: no-repeat;
}

#beachball{
  background-image: url(images/beachball.svg);
  width: 92px;
  height: 124px;
  position: absolute;
  left: 240px;
  bottom: 108px;
  background-repeat: no-repeat;
}


#lifesaver {
    background-image: url(images/lifesaver.svg);
    width: 165px;
    height: 124px;
    position: absolute;
    left: 340px;
    bottom: 110px;
    background-repeat: no-repeat;
}

#surfboard{
  background-image: url(images/surfboard.svg);
  width: 100px;
  height: 144px;
  position: absolute;
  left: 485px;
  bottom: 102px;
  background-repeat: no-repeat;
}

#seahorse{
  background-image: url(images/seahorse.svg);
  width: 105px;
  height: 144px;
  position: absolute;
  left: 600px;
  bottom: 102px;
  background-repeat: no-repeat;
}

And this is how I placed the background music using CSS:

audio {
padding-top: 180px;
padding-left:10px;
border-radius: 7px;
 }

 With the body background of babyblue for the beach theme that I was trying to bring together.

 body {background: lightblue;}


Moving onto the canvas element :

Declaring the ready function:

$(document).ready(function(){

  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");


  And going with canvas making every letter in my name to spell out "BRYAN'S" google:

  //b//

    ctx.fillStyle = "white";
    ctx.fillRect(10, 20, 20, 450);

    ctx.fillStyle = "white";
    ctx.fillRect(35, 20, 20, 20);

    ctx.fillStyle = "white";
    ctx.fillRect(35, 240, 20, 20);

    ctx.fillStyle = "white";
    ctx.fillRect(35, 450, 20, 20);

    ctx.fillStyle = "white";
    ctx.fillRect(60, 40, 20, 190);

    ctx.fillStyle = "white";
    ctx.fillRect(60, 270, 20, 180);

  //r//

  ctx.fillStyle = "white";
  ctx.fillRect(120, 20, 20, 450);

  ctx.fillStyle = "white";
  ctx.fillRect(145, 20, 20, 20);

  ctx.fillStyle = "white";
  ctx.fillRect(145, 240, 20, 20);

  ctx.fillStyle = "white";
  ctx.fillRect(170, 40, 20, 190);

  ctx.fillStyle = "white";
  ctx.fillRect(170, 270, 20, 200);


  //y//

  ctx.fillStyle = "white";
  ctx.fillRect(230, 20, 20, 220);

  ctx.fillStyle = "white";
  ctx.fillRect(255, 245, 20, 220);

  ctx.fillStyle = "white";
  ctx.fillRect(280, 20, 20, 220);

  //a//

  ctx.fillStyle = "white";
  ctx.fillRect(340, 40, 20, 425);

  ctx.fillStyle = "white";
  ctx.fillRect(365, 20, 20, 20);

  ctx.fillStyle = "white";
  ctx.fillRect(365, 240, 20, 20);

  ctx.fillStyle = "white";
  ctx.fillRect(390, 40, 20, 425);

  //n//

  ctx.fillStyle = "white";
  ctx.fillRect(450, 40, 20, 425);

  ctx.fillStyle = "white";
  ctx.fillRect(475, 20, 20, 20);

  ctx.fillStyle = "white";
  ctx.fillRect(500, 40, 20, 425);

  //siGNAL//
  ctx.fillStyle = "white";
  ctx.fillRect(535, 20, 20, 20);

  ctx.fillStyle = "white";
  ctx.fillRect(545, 20, 10, 65);

  //s//

  ctx.fillStyle = "white";
  ctx.fillRect(575, 40, 20, 190);

  ctx.fillStyle = "white";
  ctx.fillRect(600, 20, 20, 20);

  ctx.fillStyle = "white";
  ctx.fillRect(600, 240, 20, 20);

  ctx.fillStyle = "white";
  ctx.fillRect(600, 450, 20, 20);

  ctx.fillStyle = "white";
  ctx.fillRect(625, 270, 20, 180);

  After that I made in the Javascript *getElementById*:

  var mermaidAudio = document.getElementById("mAudio");
  var starfishAudio = document.getElementById("sAudio");
  var beachballAudio = document.getElementById("bAudio");
  var lifesaverAudio = document.getElementById("lAudio");
  var surfboardAudio = document.getElementById("sbAudio");
  var seahorseAudio = document.getElementById("shAudio");

for the noises when clicked on which letter of google.

Having each of the # click functions :

$('#mermaid').click(function(){
         mermaidAudio.pause();
         mermaidAudio.load();
         mermaidAudio.play();
         alert("You just clicked on a mermaid!")
    });

   $('#starfish').click(function(){
        starfishAudio.pause();
        starfishAudio.load();
        starfishAudio.play();
        alert("You just clicked on a starfish!")
   });

    $('#beachball').click(function(){
        beachballAudio.pause();
        beachballAudio.load();
        beachballAudio.play();
        alert("You just clicked on a beachball!")
   });

   $('#lifesaver').click(function(){
       lifesaverAudio.pause();
       lifesaverAudio.load();
       lifesaverAudio.play();
       alert("You just clicked on the lifesaver! Now go and save someones life!")
  });


   $('#surfboard').click(function(){
        surfboardAudio.pause();
        surfboardAudio.load();
        surfboardAudio.play();
        alert("You just clicked on a surfboard!")
   });


    $('#seahorse').click(function(){
        seahorseAudio.pause();
        seahorseAudio.load();
        seahorseAudio.play();
        alert("You just clicked on a seahorse!")

   });

I added on an alert to make sure the Javascript was working but I liked it and added on text to so that the web browser alerts you, you have clicked on an object.


  And lastly ending the Javascript With

  });
