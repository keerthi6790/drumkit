window.addEventListener("keydown",function(e){
    console.log(e.keyCode);
    var audio= document.querySelector(`audio[data-key="${e.keyCode}"]`) ;
    var playing=this.document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(playing);
    playing.classList.add('play');
    audio.play();
    
})