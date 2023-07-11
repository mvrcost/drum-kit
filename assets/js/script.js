document.body.addEventListener('keyup', (event)=>{  // ao teclar recebe o código da tecla
    playSound(event.code.toLocaleLowerCase())
    
});

document.querySelector('.composer button').addEventListener('click', ()=>{  //após receber uma serie de caracteres transforma em array e toca a composição
    let song = document.getElementById('input').value
    if (song !== ''){
        let songArray = song.split('')
        playComposition(songArray)
    }    
})


function playSound(sound){ //ao receber o caractere o som é tocado de acordo com a tecla (+ é adicionado um estilo)
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if (audioElement){
        audioElement.currentTime =0;
        audioElement.play()
    }
    if (keyElement){
        keyElement.classList.add('active')

        setTimeout(()=>{
            keyElement.classList.remove('active')
        },300)
    }
}


function playComposition(songArray){ //toca a composição após ser transformado em array 
    let wait = 0;
    
    for (let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait);

        wait += 250;
    }

   
}