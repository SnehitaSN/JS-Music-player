const myAudio = document.querySelector("audio")

const myPlay = document.getElementById("play")

isAudioPlaying = false;


function playAudio() {

    isAudioPlaying = true;
    myAudio.play();
    myPlay.classList.replace("fa-play", "fa-pause")
    //****ASSIGNMENT***** */
    myImage.classList.add("rotateimage")

}

function pauseAudio() {

    isAudioPlaying = false;
    myAudio.pause();
    myPlay.classList.replace("fa-pause", "fa-play")
}

myPlay.addEventListener("click", function () {
    //write the logic to play the audio play and pause

    if (isAudioPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
})

const data = [
    {
        singerName: "Sophie Divine",
        songName: "All the way in to the dessert",
        info: "image1"
    },
    {
        singerName: "Jemma Barbsy",
        songName: "In to the sky",
        info: "image2"
    },
    {
        singerName: "Ecclestone",
        songName: "All the way in",
        info: "image3"
    }
]


// song = {

//     SingerName:"Jemma Barbsy",
//     songName:"In to the sky",
//     info:"image2"
// }


const mySinger = document.getElementById("singer")
const mySong = document.getElementById("song")
const myImage = document.querySelector("img")
const myForward = document.getElementById("forward")
const myBackward = document.getElementById("backward")
const CurrentTime = document.getElementById("currenttime")
const Duration = document.getElementById("duration")


function loadSong(song) {

    mySinger.innerText = song.singerName
    mySong.innerText = song.songName
    myImage.src = `Images/${song.info}.jpeg`
    myAudio.src = `audio/${song.info}.mp3`
}
loadSong(data[2])


let songIndex = 0;


function nextSong() {
    //logic when the next song will be played
    songIndex++ //songindex=1
    if (songIndex > data.length - 1) {
        songIndex = 0
    }
    console.log(songIndex)
    loadSong(data[songIndex])

    playAudio()
}

myForward.addEventListener("click", nextSong)

myBackward.addEventListener("click", function () {

    songIndex--

    if (songIndex < 0) {
        songIndex = 2
    }
    console.log(songIndex)
    loadSong(data[songIndex])
    playAudio()
})


//current time,duration  audio

const myProgressBar = document.getElementById("progressbar")

myAudio.addEventListener("timeupdate", function (event) {

    if (isAudioPlaying) {


        //logic to get the current time as the audio keeps playing ,total duration of audio
        let myCurrentTime = event.srcElement.currentTime
        let myDuration = event.srcElement.duration
        console.log(myCurrentTime)
        console.log(myDuration)
        let myPercentage = (myCurrentTime / myDuration) * 100 //percentage of audio played
        console.log(myPercentage)
        myProgressBar.style.width = `${myPercentage}%`

        //console.log(myDuration) == seconds //convert into minutes
        console.log(myDuration)
        console.log(myDuration / 60)

        const durationInMinutes = Math.floor(myDuration / 60)
        console.log(durationInMinutes)

        let durationInSeconds = Math.floor(myDuration % 60)
        console.log(durationInSeconds)

        if (durationInSeconds < 10) {
            durationInSeconds = `0${durationInSeconds}`
        }

        let totalTime = `${durationInMinutes}:${durationInSeconds}`
        console.log(totalTime)
        Duration.innerText = totalTime

        //******************************************************************* */

        const currentTimeInMinutes = Math.floor(myCurrentTime / 60)
        console.log(currentTimeInMinutes)

        let currentTimeInSeconds = Math.floor(myCurrentTime % 60)
        console.log(currentTimeInSeconds)

        if (currentTimeInSeconds < 10) {
            currentTimeInSeconds = `0${currentTimeInSeconds}`
        }

        let totalCurrentTime = `${currentTimeInMinutes}:${currentTimeInSeconds}`
        CurrentTime.innerText = totalCurrentTime




    }

})


