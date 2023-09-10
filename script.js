const enddate="7 sept 2023 2:25 pm"
document.getElementById('end-date').innerText=enddate
const inputs=document.querySelectorAll("input")


function playaudio(url){
     var audio=new Audio('')
     audio.play()
}
function clock(){
     const end=new Date(enddate)
     const now=new  Date()
     const diff=(end-now)/1000
if(diff<0){
// playaudio()
return
}
     inputs[0].value=Math.floor(diff/ 3600/24)
     inputs[1].value=Math.floor(diff/ 3600)%24
     inputs[2].value=Math.floor(diff/60)%60
     inputs[3].value=Math.floor(diff)%60
     //convert date

}
clock()
setInterval(()=>{
     clock()
},1000)

// a day=24 hrs
//1 hr=60min
//60 min=3600sec