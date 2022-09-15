let menu = [
    {
        name: "burger",
        img: "burger.png"
    },
    {
        name: "cake",
        img: "cake.png"
    },
    {
        name: "fries",
        img: "fries.png"
    },
    {
        name: "hotdog",
        img: "hotdog.png"
    },
    {
        name: "icecream",
        img: "icecream.png"
    },
    {
        name: "pizza",
        img: "pizza.png"
    },
    {
        name: "burger",
        img: "burger.png"
    },
    {
        name: "cake",
        img: "cake.png"
    },
    {
        name: "fries",
        img: "fries.png"
    },
    {
        name: "hotdog",
        img: "hotdog.png"
    },
    {
        name: "icecream",
        img: "icecream.png"
    },
    {
        name: "pizza",
        img: "pizza.png"
    }
]
menu.sort(() => Math.random() - 0.5);

let images = document.querySelectorAll("img")

let selectedImgName = []
let selectedImgId = []
let finish = 0;

function showCard(){
    for(let i=0;i<images.length;i++){
        images[i].setAttribute('src', menu[i].img)
    }
}
showCard()

let countdown = setInterval(time,1000)
function blankCard(){
    for(let i=0;i<images.length;i++){
        images[i].setAttribute('src', 'blank.png')
    }
    countdown
}

setTimeout(blankCard,2000)

images.forEach((Element)=>{
    Element.addEventListener('click',selectImg)
})

function selectImg(){
    let id = this.getAttribute('id');
    this.setAttribute('src',menu[id].img);
    selectedImgName.push(menu[id].name);
    selectedImgId.push(id);
    if(selectedImgName.length===2){
        images.forEach((Element)=>{
            Element.removeEventListener('click',selectImg)
        })
        setTimeout(check,1000)  
    }
    
}

function check(){
    if(selectedImgName[0]!==selectedImgName[1]){
        document.getElementById(selectedImgId[0]).setAttribute('src', 'blank.png');
        document.getElementById(selectedImgId[1]).setAttribute('src', 'blank.png');
        selectedImgName = []
        selectedImgId = []
        images.forEach((Element)=>{
            Element.addEventListener('click',selectImg)
        })
    }
    else{
        finish+=1
        selectedImgName = []
        selectedImgId = []
        images.forEach((Element)=>{
            Element.addEventListener('click',selectImg)
        })
    }
    if(finish===6){
        clearInterval(countdown);
        completed();
    }
}

let container = document.querySelector('.container');

function completed(){
    container.style.backgroundColor  = 'white'
    container.innerText = "Level Completed"
    btn = document.createElement('button')
    btn.addEventListener('click',()=>{
       document.location.reload();
    })
    btn.innerText = 'Reload'
    container.append(btn);
    btn.classList.add('btn')
}

let timer = document.querySelector('.display');
let seconds = 60;
let minutes = 0;

let leadingseconds;
let leadingminutes;

function time(){
    if(seconds>0){
        seconds--;
    }
    
    if(seconds<10){
        leadingseconds = "0"+seconds.toString()
    }else {leadingseconds = seconds}    
    
    if(minutes<10){
        leadingminutes = "0"+minutes.toString()
    }else {leadingminutes= minutes}    
    
    timer.innerText =leadingminutes+':'+leadingseconds;
    if(seconds==0){
        if(finish!==6){
            container.style.backgroundColor  = 'white'
            container.innerText = "You Lost"
            btn = document.createElement('button')
            btn.addEventListener('click',()=>{
               document.location.reload();
            })
            btn.innerText = 'Reload'
            container.append(btn);
            btn.classList.add('btn')

        }
        
    }
}






