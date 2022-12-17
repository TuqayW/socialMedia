let images = document.querySelectorAll('.slider')

let index = 0

setInterval(()=>{
    if(index < images.length){  
        for(let i = 0; i< images.length;i++){
            images[i].classList.remove('active')
        }
        images[index++].classList.add('active')
    }
    else{
        index = 0
        for(let i = 0; i< images.length;i++){
            images[i].classList.remove('active')
        }
        images[index++].classList.add('active')
    }
},2500)








