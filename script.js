console.log("Welcome to Spotify!!")

/* Initializing variables */
let songindex = 0;
let mymusicbar = document.getElementById("musicbar")
let mainplaybutton = document.getElementById("main-play-btn")
let audioelement = new Audio("songs/1.mp3")
let songentry = Array.from(document.getElementsByClassName("songdetails"))
let songs = [
    {songname:"12 Saal Billal Saeed",filePath:"songs/1.mp3",coverpath:"cover/1.jpg"},
    {songname:"Barrish Lete Ana",filePath:"songs/2.mp3",coverpath:"cover/2.jpg"},
    {songname:"Badnam Mankirt Aulakh",filePath:"songs/3.mp3",coverpath:"cover/3.jpg"},
    {songname:"Brown Rang Honey Singh",filePath:"songs/4.mp3",coverpath:"cover/4.jpg"},
    {songname:"Dil Diyan Gallan",filePath:"songs/5.mp3",coverpath:"cover/5.jpg"},
    {songname:"SHape of You Ed Sheeran",filePath:"songs/6.mp3",coverpath:"cover/6.jpg"},
    {songname:"Hulara - J Star",filePath:"songs/7.mp3",coverpath:"cover/7.jpg"},
    {songname:"Ik Tera Maninder Buttar",filePath:"songs/8.mp3",coverpath:"cover/8.jpg"}
]

/*Lets first update the value of the cover pages and the song names  */
songentry.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByTagName("span")[0].innerText = songs[i].songname;
});



/* listnening to play and pause event*/
mainplaybutton.addEventListener("click",()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play()
        mainplaybutton.classList.remove("fa-circle-play")
        mainplaybutton.classList.add("fa-circle-pause")
        document.getElementById("gif").style.opacity=1
    }
    else{
        audioelement.pause()
        mainplaybutton.classList.remove("fa-circle-pause")
        mainplaybutton.classList.add("fa-circle-play")
        document.getElementById("gif").style.opacity=0
    }
})

/* checking for time update while playing the song */
audioelement.addEventListener("timeupdate",()=>{
    /*lets update the progress barr */
    let progress = parseInt((audioelement.currentTime/audioelement.duration)*100)
    mymusicbar.value = progress
})

mymusicbar.addEventListener("change",()=>{
    audioelement.currentTime = (mymusicbar.value/100)*audioelement.duration
})


/* working of temporary play pause buttons */
let tempplay = Array.from(document.getElementsByClassName("songplaybtn"))

const makeAllPlays = ()=>{
    tempplay.forEach((element) => {
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
    })
}


tempplay.forEach((element,i) => {
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        songindex = i;
        audioelement.src = "songs/"+(songindex+1)+".mp3"
        audioelement.currentTime=0
        document.getElementsByClassName("songinfo")[0].getElementsByTagName("span")[0].innerText = songs[i].songname
        mainplaybutton.click();
    })
});

/* use of backward icon */
document.getElementsByClassName("fa-backward-step")[0].addEventListener("click",()=>{
    if(songindex==0){
        alert("The Mentioned input is Invalid!!")
    }
    else{
        audioelement.src = "songs/"+(songindex)+".mp3"
        songindex -=1
        makeAllPlays();
        document.getElementsByClassName("songplaybtn")[songindex].click()
        
    }
})

/* use of forward icon */
document.getElementsByClassName("fa-forward-step")[0].addEventListener("click",()=>{
    if(songindex==songs.length-1){
        alert("The Mentioned input is Invalid!!")
    }
    else{
        audioelement.src = "songs/"+(songindex+2)+".mp3"
        songindex +=1
        makeAllPlays();
        document.getElementsByClassName("songplaybtn")[songindex].click()
    }
})


