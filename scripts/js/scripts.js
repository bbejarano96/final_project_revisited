$(document).ready(function(){

  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

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


    var mermaidAudio = document.getElementById("mAudio");
    var starfishAudio = document.getElementById("sAudio");
    var beachballAudio = document.getElementById("bAudio");
    var lifesaverAudio = document.getElementById("lAudio");
    var surfboardAudio = document.getElementById("sbAudio");
    var seahorseAudio = document.getElementById("shAudio");



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



});
